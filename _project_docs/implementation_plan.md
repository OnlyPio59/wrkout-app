# FitPro SaaS Implementation Plan

## Goal Description
Set up the FitPro SaaS application by creating the HTML files provided by the user.

## Proposed Changes
Create the following files in `c:/Users/Utente/Desktop/WRKOUT-APP/`:

### HTML Pages
- `index.html`: Client Daily Workout Tracker
- `workout-builder.html`: Workout Plan Builder
- `login.html`: Login / Access Page
- `trainer-dashboard.html`: Trainer / Gym Dashboard
- `analytics.html`: Progress & Analytics Page
- `clients.html`: Client Management Page
- `settings.html`: Branding & Gamification Settings

#### [NEW] [register.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/register.html)
#### [NEW] [js/supabase.js](file:///C:/Users/Utente/Desktop/WRKOUT-APP/js/supabase.js)
#### [NEW] [js/auth.js](file:///C:/Users/Utente/Desktop/WRKOUT-APP/js/auth.js)

## Backend Implementation (Supabase)
To support Cloudflare Pages (static hosting), we will use **Supabase** as the Backend-as-a-Service (BaaS).

### Architecture
- **Auth**: Supabase Auth (Email/Password).
- **Database**: PostgreSQL (provided by Supabase).
- **Client**: `@supabase/supabase-js` via CDN (ES Modules).

### Features
1.  **Registration**: New users can sign up (Client/Trainer roles).
2.  **Login**: Authenticate users and store session in LocalStorage.
3.  **Profile Management**: Link auth users to a `profiles` table in DB.
4.  **Route Protection**: Redirect unauthenticated users to login.

### Additional Components
#### [MODIFY] [login.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/login.html)
- Add "Forgot Password" modal.
- Link "Need Help" to mailto.
- **[NEW] Enforce selected role matches user role.**

#### [NEW] [gym-dashboard.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/gym-dashboard.html)
- Dashboard for Gym owners.

#### [MODIFY] [register.html](file:///C:/Users/Utente/Desktop/WRKOUT-APP/register.html)
- Add "Gym" role option.

#### [MODIFY] [js/auth.js](file:///C:/Users/Utente/Desktop/WRKOUT-APP/js/auth.js)
- Update login to accept and verify `selectedRole`.

## Verification Plan
### Manual Verification
- Open each HTML file in the browser to ensure they render correctly.
- Check for any broken links or missing assets (images are from `lh3.googleusercontent.com`, so they should work).
