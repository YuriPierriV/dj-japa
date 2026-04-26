import { NextResponse } from 'next/server';

type LeadPayload = {
  nome?: string;
  telefone?: string;
  email?: string;
  dataEvento?: string;
  source?: string;
};

type TableConfig = {
  table: string;
  nameField: string;
  dateField: string;
};

function resolveTable(source: string): TableConfig {
  if (source.startsWith('debutante')) {
    return { table: 'debutante_leads', nameField: 'debutante_name', dateField: 'event_date' };
  }
  if (source.startsWith('festa-corporativa')) {
    return { table: 'corporate_leads', nameField: 'contact_name', dateField: 'event_date' };
  }
  return { table: 'wedding_leads', nameField: 'couple_name', dateField: 'wedding_date' };
}

function isValidLead(payload: LeadPayload) {
  return Boolean(
    payload.nome?.trim() &&
    payload.telefone?.trim() &&
    payload.email?.trim() &&
    payload.dataEvento?.trim()
  );
}

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.json(
      { error: 'Supabase environment variables are missing.' },
      { status: 500 }
    );
  }

  const payload = (await request.json()) as LeadPayload;

  if (!isValidLead(payload)) {
    return NextResponse.json(
      { error: 'Invalid lead payload.' },
      { status: 400 }
    );
  }

  const source = payload.source?.trim() || 'vip_whatsapp_button';
  const { table, nameField, dateField } = resolveTable(source);

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      [nameField]: payload.nome?.trim(),
      phone: payload.telefone?.trim(),
      email: payload.email?.trim(),
      [dateField]: payload.dataEvento,
      source,
    }),
    cache: 'no-store',
  });

  if (!response.ok) {
    const errorText = await response.text();

    return NextResponse.json(
      { error: 'Failed to save lead.', details: errorText },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
