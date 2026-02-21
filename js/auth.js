
/**
 * WRKOUT Authentication Logic
 * Handles Login, Registration, Logout, and Session Checks
 */

const auth = {
    // Register a new user
    async register(email, password, username) {
        try {
            // 1. Sign up data
            const { data, error } = await window.supabaseClient.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        username: username // Add username to metadata
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
    async login(identifier, password, selectedRole) {
        try {
            let email = identifier;

            // 1. Check if identifier looks like an email. If not, treat as username and resolve to email.
            if (!identifier.includes('@')) {
                const { data: profile, error } = await window.supabaseClient
                    .from('profiles')
                    .select('email')
                    .eq('username', identifier)
                    .single();

                if (error || !profile || !profile.email) {
                    throw new Error('Username not found or invalid.');
                }

                email = profile.email;
            }

            const { data, error } = await window.supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

            if (error) throw error;

            const user = data.user;

            // FETCH PROFILE to check onboarding status
            const { data: profileData, error: profileError } = await window.supabaseClient
                .from('profiles')
                .select('role')
                .eq('id', user.id)
                .single();

            if (profileError) {
                console.error("Error fetching profile during login:", profileError);
                // Proceed cautiously, maybe they just signed up and trigger hasn't finished (rare but possible)
            }

            const userRole = (profileData && profileData.role) ? profileData.role : null;

            // If no role, they need onboarding
            if (!userRole) {
                // Save basic session info but don't set role yet
                localStorage.setItem('wrkout_user', JSON.stringify({
                    id: user.id,
                    email: user.email,
                    role: null,
                    name: user.user_metadata.full_name || 'User'
                }));
                return { success: true, user, needsOnboarding: true };
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
            return { success: false, message: error.message };
        }
    },

    // Login with Social Provider (Google, Apple)
    async loginWithProvider(provider) {
        try {
            const { data, error } = await window.supabaseClient.auth.signInWithOAuth({
                provider: provider,
                options: {
                    // Redirect back to the current page (or a specific callback page)
                    redirectTo: window.location.href,
                }
            });
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error(`${provider} Login Error:`, error.message);
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
