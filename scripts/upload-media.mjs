// One-time script: upload all media from public/ to Supabase Storage bucket 'media'
// Usage: node scripts/upload-media.mjs
import { createClient } from '@supabase/supabase-js';
import { readdir, readFile } from 'fs/promises';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Parse .env manually (Node 18 doesn't support --env-file)
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  const lines = readFileSync(envPath, 'utf-8').split('\n');
  const env = {};
  for (const line of lines) {
    const match = line.match(/^([^#=\s]+)\s*=\s*(.*)$/);
    if (match) env[match[1]] = match[2].trim();
  }
  return env;
}

const env = loadEnv();
const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = 'media';

const IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG']);
const VIDEO_EXTS = new Set(['.mp4', '.webm', '.mov', '.MOV']);
const MIME = {
  '.jpg': 'image/jpeg', '.JPG': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.JPEG': 'image/jpeg',
  '.png': 'image/png', '.PNG': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime', '.MOV': 'video/quicktime',
};

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function ensureBucket() {
  const { error } = await supabase.storage.getBucket(BUCKET);
  if (error?.message?.includes('not found') || error?.message?.includes('does not exist')) {
    const { error: createErr } = await supabase.storage.createBucket(BUCKET, { public: true });
    if (createErr) throw new Error(`Erro ao criar bucket: ${createErr.message}`);
    console.log(`Bucket '${BUCKET}' criado.`);
  } else if (error) {
    throw new Error(`Erro ao acessar bucket: ${error.message}`);
  } else {
    console.log(`Bucket '${BUCKET}' já existe.`);
  }
}

async function uploadFile(localPath, bucketPath) {
  const ext = path.extname(localPath);
  const contentType = MIME[ext] || 'application/octet-stream';
  const data = await readFile(localPath);
  const { error } = await supabase.storage.from(BUCKET).upload(bucketPath, data, {
    contentType,
    upsert: true,
  });
  if (error) {
    console.error(`  ❌ ${path.basename(localPath)}: ${error.message}`);
    return false;
  }
  const sizeMB = (data.length / 1024 / 1024).toFixed(1);
  console.log(`  ✓ ${path.basename(localPath)} (${sizeMB} MB)`);
  return true;
}

async function uploadDir(localDir, bucketPrefix) {
  const allExts = new Set([...IMAGE_EXTS, ...VIDEO_EXTS]);
  const files = await readdir(localDir).catch(() => []);
  const eligible = files.filter((f) => allExts.has(path.extname(f)));
  if (eligible.length === 0) { console.log('  nenhum arquivo encontrado.'); return; }
  for (const file of eligible) {
    await uploadFile(path.join(localDir, file), `${bucketPrefix}/${file}`);
  }
}

async function main() {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('Variáveis NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY não encontradas no .env');
    process.exit(1);
  }

  console.log(`Conectando ao Supabase: ${SUPABASE_URL}\n`);
  await ensureBucket();

  const pub = path.join(__dirname, '..', 'public');

  console.log('\nUpload de imagens (public/imagens)...');
  await uploadDir(path.join(pub, 'imagens'), 'imagens');

  console.log('\nUpload de vídeos (public/videos)...');
  await uploadDir(path.join(pub, 'videos'), 'videos');

  // vid3.mp4 está na raiz de public/
  const vid3 = path.join(pub, 'vid3.mp4');
  const vid3Data = await readFile(vid3).catch(() => null);
  if (vid3Data) {
    console.log('\nUpload de public/vid3.mp4...');
    await uploadFile(vid3, 'videos/vid3.mp4');
  }

  const baseUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}`;
  console.log(`\n✅ Upload concluído!\nBase URL: ${baseUrl}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
