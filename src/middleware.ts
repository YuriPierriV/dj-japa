import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const LOGIN_PATH = '/admin/login';
const PROTECTED = '/admin/gerenciamento';

function secret() {
  return new TextEncoder().encode(process.env.ADMIN_JWT_SECRET!);
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith(PROTECTED)) return NextResponse.next();

  const token = request.cookies.get('admin_token')?.value;
  if (!token) return NextResponse.redirect(new URL(LOGIN_PATH, request.url));

  try {
    await jwtVerify(token, secret());
    return NextResponse.next();
  } catch {
    const response = NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    response.cookies.delete('admin_token');
    return response;
  }
}

export const config = {
  matcher: ['/admin/gerenciamento', '/admin/gerenciamento/:path*', '/admin/leads', '/admin/leads/:path*'],
};
