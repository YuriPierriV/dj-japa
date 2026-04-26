import { createClient } from '@supabase/supabase-js';
import path from 'path';

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG']);
const VIDEO_EXTS = new Set(['.mp4', '.webm', '.mov', '.MOV']);
const BUCKET = 'media';

export async function GET() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  );

  const [{ data: imgs }, { data: vids }] = await Promise.all([
    supabase.storage.from(BUCKET).list('imagens'),
    supabase.storage.from(BUCKET).list('videos'),
  ]);

  const baseUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${BUCKET}`;

  const files = [
    ...(imgs ?? [])
      .filter((f) => IMAGE_EXTS.has(path.extname(f.name)))
      .map((f) => ({ src: `${baseUrl}/imagens/${f.name}`, type: 'image' as const, name: f.name })),
    ...(vids ?? [])
      .filter((f) => VIDEO_EXTS.has(path.extname(f.name)))
      .map((f) => ({ src: `${baseUrl}/videos/${f.name}`, type: 'video' as const, name: f.name })),
  ];

  return Response.json(files);
}
