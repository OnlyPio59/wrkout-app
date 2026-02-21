/**
 * WRKOUT - Onboarding Logic
 * Handles role selection and dynamic form generation for complete profile setup.
 */

let selectedRole = null;

// UI Elements
const step1 = document.getElementById('step1_roles');
const step2 = document.getElementById('step2_details');
const dynamicFields = document.getElementById('dynamicFields');
const roleTitle = document.getElementById('roleTitle');
const form = document.getElementById('detailsForm');
const errorMessage = document.getElementById('errorMessage');
const submitBtn = document.getElementById('submitBtn');

// Prevent unaunth access to onboarding
document.addEventListener('DOMContentLoaded', () => {
    const user = auth.checkSession();
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    // Check if user already has a role. If so, they shouldn't be here.
    if (user.role) {
        redirectUser(user.role);
    }
});

// Navigate back to role selection
function goBack() {
    selectedRole = null;

    // Animate out Step 2
    step2.classList.add('translate-x-full', 'opacity-0');

    setTimeout(() => {
        step2.classList.add('hidden');
        step1.classList.remove('hidden');

        // Slight delay to allow display:block to apply before animating transform
        setTimeout(() => {
            step1.classList.remove('-translate-x-full', 'opacity-0');
            step1.classList.add('translate-x-0', 'opacity-100');
        }, 50);
    }, 300); // 300ms matches Tailwind duration-300 logic roughly. Our class is duration-500 though. Let's use 400 for safety.
}


// Handle Role Selection
function selectRole(role) {
    selectedRole = role;

    // Update Title
    const titleMap = {
        'client': 'Client Profile Details',
        'trainer': 'Trainer Profile Details',
        'gym': 'Gym Facility Details'
    };
    roleTitle.textContent = titleMap[role];

    // Generate specific form fields
    generateFormFields(role);

    // Animate transition (Slide out step 1, slide in step 2)
    step1.classList.replace('translate-x-0', '-translate-x-full');
    step1.classList.replace('opacity-100', 'opacity-0');

    setTimeout(() => {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');

        // Slide in Step 2 from the right
        setTimeout(() => {
            step2.classList.replace('translate-x-full', 'translate-x-0');
            step2.classList.replace('opacity-0', 'opacity-100');
        }, 50);

    }, 400); // Wait for step1 animation to finish
}

// Generate dynamic fields based on role
function generateFormFields(role) {
    let fieldsHTML = '';

    if (role === 'client' || role === 'trainer') {
        fieldsHTML = `
            <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 pl-1">First Name</label>
                    <input id="firstName" type="text" required
                        class="block w-full px-4 py-3 bg-surface-dark border border-border-dark rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                        placeholder="John">
                </div>
                <div class="space-y-2">
                    <label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 pl-1">Last Name</label>
                    <input id="lastName" type="text" required
                        class="block w-full px-4 py-3 bg-surface-dark border border-border-dark rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                        placeholder="Doe">
                </div>
            </div>
            <div class="space-y-2">
                <label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 pl-1">Date of Birth</label>
                <input id="dob" type="date" required
                    class="block w-full px-4 py-3 bg-surface-dark border border-border-dark rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                    style="color-scheme: dark;">
            </div>
        `;
    } else if (role === 'gym') {
        fieldsHTML = `
            <div class="space-y-2">
                <label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 pl-1">Gym / Company Name</label>
                <input id="companyName" type="text" required
                    class="block w-full px-4 py-3 bg-surface-dark border border-border-dark rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                    placeholder="FitCenter Inc.">
            </div>
            <div class="space-y-2">
                <label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 pl-1">VAT Number (Partita IVA)</label>
                <input id="vatNumber" type="text" required
                    class="block w-full px-4 py-3 bg-surface-dark border border-border-dark rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                    placeholder="IT01234567890">
            </div>
            <div class="space-y-2">
                <label class="block text-xs font-semibold uppercase tracking-wider text-gray-400 pl-1">Full Address</label>
                <input id="address" type="text" required
                    class="block w-full px-4 py-3 bg-surface-dark border border-border-dark rounded-xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all sm:text-sm"
                    placeholder="Via Roma 1, Milano">
            </div>
        `;
    }

    dynamicFields.innerHTML = fieldsHTML;
}

// Handle Form Submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorMessage.classList.add('hidden');
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Saving... <span class="material-symbols-outlined ml-2 animate-spin">sync</span>';

    try {
        const user = auth.checkSession();
        if (!user) throw new Error("Session expired. Please log in again.");

        let fullName = "";
        let metadataUpdates = { role: selectedRole };

        // Extract data based on role
        if (selectedRole === 'client' || selectedRole === 'trainer') {
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const dob = document.getElementById('dob').value;

            fullName = `${firstName} ${lastName}`;
            metadataUpdates.full_name = fullName;
            metadataUpdates.first_name = firstName;
            metadataUpdates.last_name = lastName;
            metadataUpdates.dob = dob;

        } else if (selectedRole === 'gym') {
            const companyName = document.getElementById('companyName').value.trim();
            const vatNumber = document.getElementById('vatNumber').value.trim();
            const address = document.getElementById('address').value.trim();

            fullName = companyName; // Use company name as primary display name
            metadataUpdates.full_name = fullName;
            metadataUpdates.company_name = companyName;
            metadataUpdates.vat_number = vatNumber;
            metadataUpdates.address = address;
        }

        // 1. Update Auth Metadata
        const { error: authError } = await window.supabaseClient.auth.updateUser({
            data: metadataUpdates
        });
        if (authError) throw authError;

        // 2. Update Public Profiles Table
        // Need to update full_name and role which might be null currently
        // Do we also need a structured data column in profile for dob/vat? (Future plan)
        // For now, let's just make sure core profile info is there so RLS and linking works.
        const { error: dbError } = await window.supabaseClient
            .from('profiles')
            .update({
                full_name: fullName,
                role: selectedRole
            })
            .eq('id', user.id);

        if (dbError) throw dbError;

        // 3. Update Local Storage Session
        user.role = selectedRole;
        user.name = fullName;
        localStorage.setItem('wrkout_user', JSON.stringify(user));

        // 4. Redirect
        redirectUser(selectedRole);

    } catch (error) {
        console.error("Onboarding Error:", error);
        errorMessage.textContent = error.message;
        errorMessage.classList.remove('hidden');
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Complete Setup <span class="material-symbols-outlined ml-2">check_circle</span>';
    }
});

function redirectUser(role) {
    if (role === 'trainer') {
        window.location.href = 'trainer-dashboard.html';
    } else if (role === 'gym') {
        window.location.href = 'gym-dashboard.html';
    } else {
        window.location.href = 'index.html'; // Client dashboard
    }
}
