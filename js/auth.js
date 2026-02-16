
/**
 * WRKOUT Authentication Logic
 * Handles Login, Registration, Logout, and Session Checks
 */

const auth = {
    // Register a new user
    async register(email, password, role, fullName) {
        try {
            // 1. Sign up data
            const { data, error } = await window.supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        full_name: fullName,
                        role: role
                    }
                }
            });

            if (error) throw error;

            // 2. Create profile entry (optional, if using a separate profiles table)
            // For now we store basics in user_metadata

            return { success: true, data };
        } catch (error) {
            console.error('Registration Error:', error.message);
            return { success: false, message: error.message };
        }
    },

    // Login user
    async login(email, password, selectedRole) {
        try {
            const { data, error } = await window.supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) throw error;

            const user = data.user;
            const userRole = user.user_metadata.role || 'client'; // Default to client if undefined

            // STRICT CHECK: Ensure selected authentication tab matches the user's actual role
            // Compare case-insensitive just in case
            if (selectedRole && userRole.toLowerCase() !== selectedRole.toLowerCase()) {
                // Formatting for nice error message
                const actualRoleDisplay = userRole.charAt(0).toUpperCase() + userRole.slice(1);
                const selectedRoleDisplay = selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1);

                // Logout immediately to clear the session we just created
                await window.supabaseClient.auth.signOut();

                throw new Error(`This account is registered as a ${actualRoleDisplay}. Please switch to the ${actualRoleDisplay} login tab.`);
            }

            // Save basic session info to local storage for quick UI access
            localStorage.setItem('wrkout_user', JSON.stringify({
                id: user.id,
                email: user.email,
                role: userRole,
                name: user.user_metadata.full_name || 'User'
            }));

            return { success: true, user, role: userRole };
        } catch (error) {
            console.error('Login Error:', error.message);
            // If it's our custom error, it's safe to show. If it's Supabase error, show that too.
            return { success: false, message: error.message };
        }
    },

    // Reset Password
    async resetPassword(email) {
        try {
            const { error } = await window.supabaseClient.auth.resetPasswordForEmail(email, {
                // Dynamically build the redirect URL based on current environment
                // Works for both localhost:3000 and https://username.github.io/repo-name/
                redirectTo: window.location.href.substring(0, window.location.href.lastIndexOf('/')) + '/reset-password.html',
            });
            if (error) throw error;
            return { success: true };
        } catch (error) {
            console.error('Reset Password Error:', error.message);
            return { success: false, message: error.message };
        }
    },

    // Logout user
    async logout() {
        try {
            const { error } = await window.supabaseClient.auth.signOut();
            if (error) throw error;

            localStorage.removeItem('wrkout_user');
            window.location.href = 'login.html';
        } catch (error) {
            console.error('Logout Error:', error.message);
        }
    },

    // Check if user is authenticated
    checkSession() {
        const user = localStorage.getItem('wrkout_user');
        if (!user) {
            // If we are not on login or register page, redirect
            const path = window.location.pathname;
            if (!path.includes('login.html') && !path.includes('register.html') && !path.includes('index.html') && path !== '/') {
                window.location.href = 'login.html';
            }
        }
        return user ? JSON.parse(user) : null;
    },

    // Get current user role
    getRole() {
        const user = this.checkSession();
        return user ? user.role : null;
    }
};

// Global export
window.auth = auth;

// Auto-check session on load (skip for login/register pages)
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (!path.includes('login.html') && !path.includes('register.html')) {
        auth.checkSession();
    }

    // Setup logout buttons if any exist
    const logoutBtns = document.querySelectorAll('.logout-btn');
    logoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            auth.logout();
        });
    });
});
