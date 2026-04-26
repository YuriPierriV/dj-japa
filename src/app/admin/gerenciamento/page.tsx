import { readFile } from 'fs/promises';
import path from 'path';
import AdminClient from './AdminClient';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const filePath = path.join(process.cwd(), 'src/data/landingImages.json');
  const raw = await readFile(filePath, 'utf-8');
  const data = JSON.parse(raw);
  return <AdminClient initialData={data} />;
}
