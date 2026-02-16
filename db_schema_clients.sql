-- 1. Create table for Trainer-Client relationships
create table if not exists public.trainer_clients (
  id uuid default gen_random_uuid() primary key,
  trainer_id uuid references auth.users(id) not null,
  client_email text not null,
  client_id uuid references auth.users(id), -- Nullable until client registers/accepts
  status text check (status in ('active', 'pending', 'archived')) default 'pending',
  joined_at timestamp with time zone default now(),
  created_at timestamp with time zone default now(),
  
  -- Unique constraint to prevent duplicate invites
  unique(trainer_id, client_email)
);

-- 2. Create table for Client Notes (Private to Trainer)
create table if not exists public.client_notes (
  id uuid default gen_random_uuid() primary key,
  trainer_id uuid references auth.users(id) not null,
  client_id uuid references public.trainer_clients(id) not null, -- Links to the relationship record
  note_content text,
  is_pinned boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- 3. Create table for Client Payments/Financials
create table if not exists public.client_payments (
  id uuid default gen_random_uuid() primary key,
  trainer_id uuid references auth.users(id) not null,
  client_id uuid references public.trainer_clients(id) not null,
  amount decimal(10, 2) not null,
  currency text default 'EUR',
  status text check (status in ('paid', 'pending', 'overdue', 'cancelled')) default 'pending',
  due_date date,
  paid_date date,
  description text, -- e.g. "Monthly Coaching - October"
  created_at timestamp with time zone default now()
);

-- 4. Enable Row Level Security (RLS)
alter table public.trainer_clients enable row level security;
alter table public.client_notes enable row level security;
alter table public.client_payments enable row level security;

-- 5. RLS Policies
-- Trainer Clients: Trainers can see/edit their own clients
create policy "Trainers can view their own clients"
  on public.trainer_clients for select
  using (auth.uid() = trainer_id);

create policy "Trainers can insert new clients"
  on public.trainer_clients for insert
  with check (auth.uid() = trainer_id);

create policy "Trainers can update their own clients"
  on public.trainer_clients for update
  using (auth.uid() = trainer_id);

-- Client Notes: Only the trainer who created them can see them
create policy "Trainers manage their client notes"
  on public.client_notes for all
  using (auth.uid() = trainer_id);

-- Client Payments: Trainers see all, Clients see their own (optional future feature)
create policy "Trainers manage client payments"
  on public.client_payments for all
  using (auth.uid() = trainer_id);
