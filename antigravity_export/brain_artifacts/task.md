# Task: Switch to Username-Based Client System

- [x] Database Updates <!-- id: 0 -->
    - [x] Create `profiles` table (id, username, full_name, role, avatar_url) with RLS <!-- id: 1 -->
    - [x] Create trigger to auto-create profile on `auth.users` insert <!-- id: 2 -->
    - [x] Update `trainer_clients` to use `client_id` primarily (already does, but logic changes) <!-- id: 3 -->
- [x] Backend Logic (Supabase) <!-- id: 4 -->
    - [x] Create RPC or Policy to allow searching profiles by username <!-- id: 5 -->
- [ ] Frontend Updates <!-- id: 6 -->
    - [x] Update Register Page (`register.html`) to include Username field <!-- id: 7 -->
    - [x] Update `js/auth.js` to save username to metadata/profile <!-- id: 8 -->
    - [x] Update Register Page Script to Capture Username <!-- id: 8b --> 
    - [x] Update Dashboard "Add Client" Modal to search by Username <!-- id: 9 -->
    - [x] Update `js/trainer.js` to handle username search and invite <!-- id: 10 -->
    - [x] Update Login Page (`login.html`) to accept Username or Email <!-- id: 14 -->
    - [x] Update `js/auth.js` to resolve Username -> Email for login <!-- id: 15 -->
- [ ] Verification <!-- id: 11 -->
    - [x] Verify UI elements (Username Inputs) <!-- id: 11b -->
    - [x] Run SQL Migration (User Action - Updated Script) <!-- id: 11c -->
    - [x] Verify Code Push to GitHub <!-- id: 16 -->
    - [ ] Register a new "Client" with a username <!-- id: 12 -->
    - [ ] Trainer searches and adds that Client by username <!-- id: 13 -->

## Future Ideas / Backlog
- [ ] Feature: Allow Clients to search and request Trainers <!-- id: 99 -->
