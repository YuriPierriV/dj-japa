import { compare } from 'bcryptjs';
import { SignJWT } from 'jose';
import { NextResponse } from 'next/server';

const FAKE_HASH = '$2b$12$invalidhashusedfortimingprotectiononly.............';

function jwtSecret() {
  return new TextEncoder().encode(process.env.ADMIN_JWT_SECRET!);
}

export async function POST(request: Request) {
  const { username, password } = await request.json().catch(() => ({}));

  if (!username || !password) {
    return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    return NextResponse.json({ error: 'Configuração incompleta.' }, { status: 500 });
  }

  // Busca o hash do usuário no banco
  const res = await fetch(
    `${supabaseUrl}/rest/v1/admin_users?username=eq.${encodeURIComponent(username)}&select=password_hash&limit=1`,
    {
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
      },
      cache: 'no-store',
    }
  );

  const rows: { password_hash: string }[] = await res.json().catch(() => []);
  const hash = rows[0]?.password_hash ?? FAKE_HASH;

  // Compara sempre (tempo constante — evita timing attack)
  const valid = await compare(password, hash);

  if (!valid || !rows[0]) {
    return NextResponse.json({ error: 'Credenciais inválidas.' }, { status: 401 });
  }

  const token = await new SignJWT({ sub: username })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('8h')
    .sign(jwtSecret());

  const response = NextResponse.json({ ok: true });
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 8,
    path: '/',
  });

  return response;
}
