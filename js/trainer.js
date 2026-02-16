document.addEventListener('DOMContentLoaded', () => {
    initTrainerDashboard();
});

async function initTrainerDashboard() {
    const user = await auth.checkSession();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Load Clients
    loadClients(user.id);

    // Setup Invitation Form
    const addClientForm = document.getElementById('addClientForm');
    if (addClientForm) {
        addClientForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await inviteClient(user.id);
        });
    }
}

async function loadClients(trainerId) {
    const tableBody = document.querySelector('tbody');
    const recentActivityHeader = document.querySelector('h3.text-lg.font-bold.text-white');

    if (recentActivityHeader && recentActivityHeader.innerText === 'Recent Activity') {
        recentActivityHeader.innerText = 'My Clients';
    }

    try {
        const { data: clients, error } = await window.supabaseClient
            .from('trainer_clients')
            .select('*')
            .eq('trainer_id', trainerId)
            .order('created_at', { ascending: false });

        if (error) throw error;

        if (clients.length === 0) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="5" class="px-6 py-8 text-center text-gray-500">
                        No clients yet. Click "New Client" to invite someone!
                    </td>
                </tr>
            `;
            return;
        }

        renderClientList(clients, tableBody);

    } catch (err) {
        console.error('Error loading clients:', err);
        tableBody.innerHTML = `<tr><td colspan="5" class="px-6 py-4 text-red-400">Error loading clients.</td></tr>`;
    }
}

function renderClientList(clients, tableBody) {
    tableBody.innerHTML = clients.map(client => `
        <tr class="hover:bg-white/5 transition-colors cursor-pointer" onclick="openClientDrawer('${client.id}', '${client.client_email}')">
            <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                    <div class="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        ${client.client_email.substring(0, 2).toUpperCase()}
                    </div>
                    <span class="font-medium text-white">${client.client_email}</span>
                </div>
            </td>
            <td class="px-6 py-4">
                <span class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium 
                    ${client.status === 'active' ? 'bg-green-500/10 text-green-400 ring-1 ring-green-500/20' : 'bg-yellow-500/10 text-yellow-400 ring-1 ring-yellow-500/20'}">
                    ${client.status.charAt(0).toUpperCase() + client.status.slice(1)}
                </span>
            </td>
            <td class="px-6 py-4 text-gray-400">-</td>
            <td class="px-6 py-4 text-slate-500 text-sm">
                ${new Date(client.created_at).toLocaleDateString()}
            </td>
            <td class="px-6 py-4 text-right">
                <button class="text-slate-400 hover:text-white">
                    <span class="material-symbols-outlined">chevron_right</span>
                </button>
            </td>
        </tr>
    `).join('');
}

async function inviteClient(trainerId) {
    const emailInput = document.getElementById('clientEmailInput');
    const sendBtn = document.getElementById('sendInviteBtn');
    const errorMessage = document.getElementById('modalErrorMessage');
    const email = emailInput.value;

    errorMessage.classList.add('hidden');
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';

    try {
        const { data: existing } = await window.supabaseClient
            .from('trainer_clients')
            .select('id')
            .eq('trainer_id', trainerId)
            .eq('client_email', email)
            .single();

        if (existing) {
            throw new Error('This client is already in your list.');
        }

        const { error: insertError } = await window.supabaseClient
            .from('trainer_clients')
            .insert([{
                trainer_id: trainerId,
                client_email: email,
                status: 'pending'
            }]);

        if (insertError) throw insertError;

        closeAddClientModal();
        loadClients(trainerId);
        alert(`Invitation sent to ${email} (simulated). Added to your list.`);

    } catch (error) {
        console.error('Invite Error:', error);
        errorMessage.textContent = error.message || 'Failed to invite client.';
        errorMessage.classList.remove('hidden');
    } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send Invite';
    }
}

// Drawer Functions
function closeClientDrawer() {
    const drawer = document.getElementById('clientDrawer');
    const backdrop = document.getElementById('drawerBackdrop');

    drawer.classList.add('translate-x-full');
    backdrop.classList.add('hidden');

    // Clear content after animation
    setTimeout(() => {
        drawer.innerHTML = '';
    }, 300);
}

async function openClientDrawer(relationshipId, clientEmail) {
    const drawer = document.getElementById('clientDrawer');
    const backdrop = document.getElementById('drawerBackdrop');

    drawer.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-gray-400">
            <span class="material-symbols-outlined text-4xl mb-2 animate-spin">progress_activity</span>
            <p>Loading details...</p>
        </div>
    `;

    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('hidden');

    await loadClientPanel(relationshipId, clientEmail);
}

async function loadClientPanel(relationshipId, clientEmail) {
    const drawer = document.getElementById('clientDrawer');

    // Fetch Data Parallelly
    const [notesRes, paymentsRes] = await Promise.all([
        window.supabaseClient.from('client_notes').select('*').eq('client_id', relationshipId).order('created_at', { ascending: false }),
        window.supabaseClient.from('client_payments').select('*').eq('client_id', relationshipId).order('due_date', { ascending: true })
    ]);

    const notes = notesRes.data || [];
    const payments = paymentsRes.data || [];

    // Render HTML
    drawer.innerHTML = `
        <div class="h-full flex flex-col bg-[#1a2c22]">
            <!-- Header -->
            <div class="px-6 py-5 border-b border-white/10 flex justify-between items-start bg-[#112117]">
                <div>
                    <h2 class="text-xl font-bold text-white">${clientEmail}</h2>
                    <p class="text-sm text-gray-400">Client Details</p>
                </div>
                <button onclick="closeClientDrawer()" class="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>

            <!-- Tabs Navigation -->
            <div class="flex border-b border-white/10 px-6">
                <button onclick="switchTab('overview')" id="tab-overview" class="tab-btn px-4 py-3 text-sm font-medium border-b-2 border-[#19e66b] text-[#19e66b]">Overview</button>
                <button onclick="switchTab('financials')" id="tab-financials" class="tab-btn px-4 py-3 text-sm font-medium border-b-2 border-transparent text-gray-400 hover:text-white">Financials</button>
                <button onclick="switchTab('notes')" id="tab-notes" class="tab-btn px-4 py-3 text-sm font-medium border-b-2 border-transparent text-gray-400 hover:text-white">Notes</button>
            </div>

            <!-- Scrollable Content -->
            <div class="flex-1 overflow-y-auto p-6 space-y-6 md:custom-scrollbar">
                
                <!-- OVERVIEW TAB -->
                <div id="content-overview" class="tab-content space-y-6">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-surface-dark border border-white/5 p-4 rounded-xl">
                            <span class="block text-xs text-gray-400 mb-1">Workouts Done</span>
                            <span class="text-2xl font-bold text-white">0</span>
                        </div>
                         <div class="bg-surface-dark border border-white/5 p-4 rounded-xl">
                            <span class="block text-xs text-gray-400 mb-1">Active Plans</span>
                            <span class="text-2xl font-bold text-white">0</span>
                        </div>
                    </div>
                    <div class="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex items-start gap-3">
                         <span class="material-symbols-outlined text-blue-400">info</span>
                         <div>
                            <h4 class="text-sm font-bold text-blue-400">Client Invite Pending</h4>
                            <p class="text-xs text-blue-300 mt-1">This user hasn't accepted the invitation yet.</p>
                         </div>
                    </div>
                </div>

                <!-- FINANCIALS TAB -->
                <div id="content-financials" class="tab-content hidden space-y-6">
                    <div class="flex justify-between items-center">
                        <h3 class="font-bold text-white">Payments & Deadlines</h3>
                        <button onclick="showAddPaymentModal('${relationshipId}')" class="text-xs bg-[#19e66b] text-[#112117] px-3 py-1.5 rounded-lg font-bold hover:bg-[#15c55b]">
                            + Add Payment
                        </button>
                    </div>
                    
                    <div class="space-y-3">
                        ${payments.length === 0 ? '<p class="text-sm text-gray-500 text-center py-4">No payment records.</p>' : ''}
                        ${payments.map(p => `
                            <div class="bg-surface-dark border border-white/5 p-4 rounded-xl flex justify-between items-center group">
                                <div>
                                    <p class="font-medium text-white">${p.description || 'Payment'}</p>
                                    <p class="text-xs text-gray-400">Due: ${p.due_date || 'N/A'}</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-white">€${p.amount}</p>
                                    <span class="text-[10px] uppercase font-bold px-2 py-0.5 rounded ${getStatusColor(p.status)}">
                                        ${p.status}
                                    </span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                     <!-- Add Payment Inline Form (Hidden by default, simplified for now) -->
                     <div id="addPaymentForm-${relationshipId}" class="hidden bg-white/5 p-4 rounded-xl space-y-3 border border-dashed border-white/10">
                        <input type="text" id="payDesc-${relationshipId}" placeholder="Description (e.g. Oct Coaching)" class="w-full bg-[#112117] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#19e66b]">
                        <div class="flex gap-2">
                             <input type="number" id="payAmount-${relationshipId}" placeholder="Amount (€)" class="w-full bg-[#112117] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-[#19e66b]">
                             <input type="date" id="payDate-${relationshipId}" class="w-full bg-[#112117] border border-white/10 rounded px-3 py-2 text-sm text-gray-400 focus:outline-none focus:border-[#19e66b]">
                        </div>
                        <button onclick="savePayment('${relationshipId}')" class="w-full bg-[#19e66b] text-[#112117] py-2 rounded text-sm font-bold">Save Payment</button>
                     </div>
                </div>

                <!-- NOTES TAB -->
                <div id="content-notes" class="tab-content hidden space-y-4">
                    <div class="bg-white/5 p-1 rounded-xl">
                        <textarea id="noteInput-${relationshipId}" placeholder="Write a private note..." 
                        class="w-full bg-transparent border-none text-white placeholder-gray-500 text-sm focus:ring-0 resize-none h-24 p-3"></textarea>
                        <div class="flex justify-end px-2 pb-2">
                            <button onclick="saveNote('${relationshipId}')" class="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-lg transition-colors">
                                Save Note
                            </button>
                        </div>
                    </div>

                    <div class="space-y-3">
                         ${notes.length === 0 ? '<p class="text-sm text-gray-500 text-center py-4">No notes yet.</p>' : ''}
                         ${notes.map(note => `
                            <div class="bg-surface-dark border border-white/5 p-4 rounded-xl group relative">
                                <p class="text-sm text-gray-300 whitespace-pre-wrap">${note.note_content}</p>
                                <span class="text-[10px] text-gray-600 block mt-2">${new Date(note.created_at).toLocaleString()}</span>
                                <button onclick="deleteNote('${note.id}', '${relationshipId}', '${clientEmail}')" class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-red-400">
                                    <span class="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>

            </div>
        </div>
    `;

    // Setup global functions for this specific instance
    window.showAddPaymentModal = (id) => {
        const form = document.getElementById(`addPaymentForm-${id}`);
        form.classList.remove('hidden');
    };
}

// Helper: Status Color
function getStatusColor(status) {
    if (status === 'paid') return 'bg-green-500/10 text-green-400';
    if (status === 'overdue') return 'bg-red-500/10 text-red-400';
    if (status === 'pending') return 'bg-yellow-500/10 text-yellow-400';
    return 'bg-gray-500/10 text-gray-400';
}

// Logic: Switch Tabs
window.switchTab = (tabName) => {
    // Buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('border-[#19e66b]', 'text-[#19e66b]');
        btn.classList.add('border-transparent', 'text-gray-400');
    });
    const activeBtn = document.getElementById(`tab-${tabName}`);
    activeBtn.classList.remove('border-transparent', 'text-gray-400');
    activeBtn.classList.add('border-[#19e66b]', 'text-[#19e66b]');

    // Content
    document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
    document.getElementById(`content-${tabName}`).classList.remove('hidden');
};

// Logic: Save Note
window.saveNote = async (relationshipId) => {
    const input = document.getElementById(`noteInput-${relationshipId}`);
    const content = input.value.trim();
    if (!content) return;

    const user = JSON.parse(localStorage.getItem('wrkout_user'));

    try {
        const { error } = await window.supabaseClient
            .from('client_notes')
            .insert([{
                trainer_id: user.id,
                client_id: relationshipId,
                note_content: content
            }]);

        if (error) throw error;

        // Refresh panel
        // For simplicity, we just reload the whole panel. Ideally, we append locally.
        const drawerTitle = document.querySelector('#clientDrawer h2').innerText; // Hack to get email back
        loadClientPanel(relationshipId, drawerTitle);

    } catch (err) {
        console.error('Error saving note:', err);
        alert('Failed to save note.');
    }
};

window.deleteNote = async (noteId, relationshipId, clientEmail) => {
    if (!confirm('Delete this note?')) return;
    try {
        const { error } = await window.supabaseClient.from('client_notes').delete().eq('id', noteId);
        if (error) throw error;
        loadClientPanel(relationshipId, clientEmail);
    } catch (err) {
        console.error(err);
    }
}

// Logic: Save Payment
window.savePayment = async (relationshipId) => {
    const desc = document.getElementById(`payDesc-${relationshipId}`).value;
    const amount = document.getElementById(`payAmount-${relationshipId}`).value;
    const date = document.getElementById(`payDate-${relationshipId}`).value;

    if (!desc || !amount) {
        alert('Please fill description and amount');
        return;
    }

    const user = JSON.parse(localStorage.getItem('wrkout_user'));

    try {
        const { error } = await window.supabaseClient
            .from('client_payments')
            .insert([{
                trainer_id: user.id,
                client_id: relationshipId,
                amount: parseFloat(amount),
                description: desc,
                due_date: date || null,
                status: 'pending'
            }]);

        if (error) throw error;

        const drawerTitle = document.querySelector('#clientDrawer h2').innerText;
        loadClientPanel(relationshipId, drawerTitle);

    } catch (err) {
        console.error('Payment Error:', err);
        alert('Failed to save payment.');
    }
}
