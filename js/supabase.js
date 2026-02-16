
// WRKOUT - Supabase Configuration
// TODO: Replace these with valid credentials from your Supabase Dashboard -> Project Settings -> API
const SUPABASE_URL = 'https://buxybbaafxwqloepegsh.supabase.co';
const SUPABASE_KEY = 'sb_publishable_fKVy3JRiCCXgdo5ztt6kyA_0ga3IE3D';

// Initialize the Supabase client
// We are using the CDN-imported 'supabase' object which is available globally via the script tag in HTML
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Export for use in other files
window.supabaseClient = _supabase;
