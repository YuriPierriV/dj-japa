import { readdir } from 'fs/promises';
import path from 'path';

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG']);
const VIDEO_EXTS = new Set(['.mp4', '.webm', '.mov', '.MOV']);

export async function GET() {
  const pub = path.join(process.cwd(), 'public');

  const [imgs, vids] = await Promise.all([
    readdir(path.join(pub, 'imagens')).catch(() => [] as string[]),
    readdir(path.join(pub, 'videos')).catch(() => [] as string[]),
  ]);

  const files = [
    ...imgs
      .filter((f) => IMAGE_EXTS.has(path.extname(f)))
      .map((f) => ({ src: `/imagens/${f}`, type: 'image' as const, name: f })),
    ...vids
      .filter((f) => VIDEO_EXTS.has(path.extname(f)))
      .map((f) => ({ src: `/videos/${f}`, type: 'video' as const, name: f })),
  ];

  return Response.json(files);
}
