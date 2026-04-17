import { NextResponse } from 'next/server';

type LeadPayload = {
  nome?: string;
  telefone?: string;
  email?: string;
  dataEvento?: string;
};

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

  const response = await fetch(`${supabaseUrl}/rest/v1/wedding_leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      couple_name: payload.nome?.trim(),
      phone: payload.telefone?.trim(),
      email: payload.email?.trim(),
      wedding_date: payload.dataEvento,
      source: 'vip_whatsapp_button',
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
