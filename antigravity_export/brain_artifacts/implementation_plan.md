# Username Implementation Plan

## Database Changes (`db_schema_profiles.sql`)
- [x] Create `public.profiles` table.
- [x] Create `handle_new_user` trigger.
- [x] Alter `trainer_clients` to support `client_username` and nullable email.

## Frontend Changes
### Registration (`register.html`)
- [ ] Add `Username` input field before Email.
- [ ] Update form submission to capture `username`.

### Auth Logic (`js/auth.js`)
- [ ] Update `register` function to accept `username` and pass to `options.data`.

### Trainer Dashboard (`trainer-dashboard.html`)
- [ ] Change "Add Client" modal input from Email to Username.
- [ ] Update "Add Client" description text.

### Client Logic (`js/trainer.js`)
- [ ] Update `inviteClient`:
    1. Search `profiles` table for `username`.
    2. If found, get `id` and `username`.
    3. Insert into `trainer_clients` (trainer_id, client_id, client_username, status='active').
    4. Handle errors (User not found, already added).

### Sync `clients.html`
- [x] Apply same "Add Client" modal changes to `clients.html`.
