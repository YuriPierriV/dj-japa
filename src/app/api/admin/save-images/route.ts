import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'src/data/landingImages.json');
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: 'Falha ao salvar' }, { status: 500 });
  }
}
