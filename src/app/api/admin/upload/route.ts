import { createClient } from '@supabase/supabase-js';
import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const VIDEO_TYPES = new Set(['video/mp4', 'video/webm', 'video/quicktime']);

function jwtSecret() {
  return new TextEncoder().encode(process.env.ADMIN_JWT_SECRET!);
}

export async function POST(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;
  if (!token) return NextResponse.json({ error: 'Não autorizado.' }, { status: 401 });
  try {
    await jwtVerify(token, jwtSecret());
  } catch {
    return NextResponse.json({ error: 'Token inválido.' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file') as File | null;
  if (!file) return NextResponse.json({ error: 'Arquivo não enviado.' }, { status: 400 });

  const isImage = IMAGE_TYPES.has(file.type);
  const isVideo = VIDEO_TYPES.has(file.type);
  if (!isImage && !isVideo) {
    return NextResponse.json({ error: 'Tipo não suportado. Use JPG, PNG, WebP, MP4, MOV ou WebM.' }, { status: 400 });
  }

  const folder = isImage ? 'imagens' : 'videos';
  const safeName = file.name.replace(/[^a-zA-Z0-9._\-]/g, '_');
  const bucketPath = `${folder}/${safeName}`;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const buffer = Buffer.from(await file.arrayBuffer());
  const { error } = await supabase.storage.from('media').upload(bucketPath, buffer, {
    contentType: file.type,
    upsert: true,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const src = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media/${bucketPath}`;
  return NextResponse.json({ src, type: isImage ? 'image' : 'video', name: safeName });
}
