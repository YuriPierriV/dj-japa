create extension if not exists pgcrypto;

create table if not exists public.wedding_leads (
  id uuid primary key default gen_random_uuid(),
  couple_name text not null,
  phone text not null,
  email text not null,
  wedding_date date not null,
  source text not null default 'vip_whatsapp_button',
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.wedding_leads enable row level security;

grant insert on table public.wedding_leads to anon;
grant insert on table public.wedding_leads to authenticated;

create policy "anon_can_insert_wedding_leads"
on public.wedding_leads
for insert
to anon
with check (true);

create policy "authenticated_can_insert_wedding_leads"
on public.wedding_leads
for insert
to authenticated
with check (true);
