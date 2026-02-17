-- 1. Create Profiles Table (Publicly readable for search)
create table if not exists public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  username text unique,
  full_name text,
  role text check (role in ('trainer', 'client')),
  email text, -- Added for Username login resolution
  avatar_url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Ensure email column exists (safe to run if table already exists)
alter table public.profiles add column if not exists email text;

-- 2. Enable RLS on Profiles
alter table public.profiles enable row level security;

-- 3. Profiles Policies
-- Public Read: Everyone can read profiles (needed for search)
create policy "Public profiles are viewable by everyone"
  on public.profiles for select
  using (true);

-- User Update: Users can update their own profile
create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- 4. Trigger to create profile on Signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, role, username, email)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'role',
    new.raw_user_meta_data->>'username',
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger execution
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 5. Update Trainer Clients table to support Username based linking
-- Make client_email nullable as we might not have it if adding by username
alter table public.trainer_clients alter column client_email drop not null;

-- Add client_username column for easier display/search if needed
alter table public.trainer_clients add column if not exists client_username text;

-- Update unique constraint to be (trainer_id, client_id) because email might be null
-- First drop old constraint if we can naming it, or just add a new one?
-- It's safer to just add a unique index on client_id.
create unique index if not exists trainer_clients_trainer_client_id_idx on public.trainer_clients (trainer_id, client_id) where client_id is not null;

