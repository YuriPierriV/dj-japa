import { NextResponse } from 'next/server';

export type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string;
  event_date: string;
  source: string;
  created_at: string;
  type: 'casamento' | 'debutante' | 'corporativo';
};

type RawWedding   = { id: string; couple_name: string;   phone: string; email: string; wedding_date: string; source: string; created_at: string };
type RawDebutante = { id: string; debutante_name: string; phone: string; email: string; event_date: string;  source: string; created_at: string };
type RawCorporate = { id: string; contact_name: string;  phone: string; email: string; event_date: string;  source: string; created_at: string };

async function fetchTable(base: string, key: string, table: string, select: string) {
  const res = await fetch(`${base}/rest/v1/${table}?select=${select}&order=created_at.desc`, {
    headers: { apikey: key, Authorization: `Bearer ${key}` },
    cache: 'no-store',
  });
  if (!res.ok) return [];
  return res.json();
}

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key  = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!base || !key) {
    return NextResponse.json({ error: 'Configuração incompleta.' }, { status: 500 });
  }

  const [weddings, debutantes, corporates] = await Promise.all([
    fetchTable(base, key, 'wedding_leads',   'id,couple_name,phone,email,wedding_date,source,created_at'),
    fetchTable(base, key, 'debutante_leads', 'id,debutante_name,phone,email,event_date,source,created_at'),
    fetchTable(base, key, 'corporate_leads', 'id,contact_name,phone,email,event_date,source,created_at'),
  ]);

  const leads: Lead[] = [
    ...(weddings   as RawWedding[]).map((r) => ({ id: r.id, name: r.couple_name,    phone: r.phone, email: r.email, event_date: r.wedding_date, source: r.source, created_at: r.created_at, type: 'casamento'   as const })),
    ...(debutantes as RawDebutante[]).map((r) => ({ id: r.id, name: r.debutante_name, phone: r.phone, email: r.email, event_date: r.event_date,  source: r.source, created_at: r.created_at, type: 'debutante'   as const })),
    ...(corporates as RawCorporate[]).map((r) => ({ id: r.id, name: r.contact_name,  phone: r.phone, email: r.email, event_date: r.event_date,  source: r.source, created_at: r.created_at, type: 'corporativo' as const })),
  ].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  return NextResponse.json(leads);
}
