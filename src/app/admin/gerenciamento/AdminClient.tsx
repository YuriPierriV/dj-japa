'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, RefreshCw, Film, Image as ImageIcon, LogOut, Upload, Loader2 } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type MediaItem = { type: 'image' | 'video'; src: string };
type LandingData = {
  hero: string;
  heroVideo: string | null;
  about: { primary: string; secondary: string };
  process: { alignment: MediaItem; curation: MediaItem; structure: MediaItem; execution: MediaItem };
  stories: MediaItem[];
  contact: string;
};
type ImagesData = Record<string, LandingData>;
type Slug = 'casamento' | 'debutante' | 'festa-corporativa';
type FileOption = { src: string; type: 'image' | 'video'; name: string };
type PickerState = { filterType: 'image' | 'video' | null; onSelect: (f: FileOption) => void } | null;

const SLUGS: Slug[] = ['casamento', 'debutante', 'festa-corporativa'];
const SLUG_LABELS: Record<Slug, string> = { casamento: 'Casamento', debutante: 'Debutante', 'festa-corporativa': 'Corporativo' };
const PROCESS_KEYS = ['alignment', 'curation', 'structure', 'execution'] as const;
const PROCESS_LABELS = ['Alinhamento', 'Curadoria', 'Estrutura', 'Execução'];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function normalize(data: ImagesData): ImagesData {
  return Object.fromEntries(
    Object.keys(data).map((s) => [s, { ...data[s], heroVideo: data[s].heroVideo?.trim() || null }])
  );
}

function fileName(src: string) {
  return src.split('/').pop() ?? src;
}

function acceptAttr(filterType: 'image' | 'video' | null) {
  if (filterType === 'image') return 'image/jpeg,image/png,image/webp,image/gif';
  if (filterType === 'video') return 'video/mp4,video/webm,video/quicktime';
  return 'image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,video/quicktime';
}

// ─── File Picker Modal ────────────────────────────────────────────────────────

function FilePicker({
  files,
  pickerState,
  onClose,
  onUpload,
  uploading,
  uploadError,
}: {
  files: FileOption[];
  pickerState: PickerState;
  onClose: () => void;
  onUpload: (file: File) => Promise<FileOption | null>;
  uploading: boolean;
  uploadError: string | null;
}) {
  const [tab, setTab] = useState<'all' | 'image' | 'video'>('all');
  const inputRef = useRef<HTMLInputElement>(null);

  if (!pickerState) return null;

  const filterType = pickerState.filterType;
  const shown = files.filter((f) => {
    if (filterType) return f.type === filterType;
    if (tab === 'all') return true;
    return f.type === tab;
  });

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    const result = await onUpload(file);
    if (result && pickerState) {
      pickerState.onSelect(result);
      onClose();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-zinc-950">
      {/* Modal header */}
      <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-3 shrink-0">
        <span className="text-sm font-semibold text-zinc-100">Selecionar arquivo</span>
        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            type="file"
            accept={acceptAttr(filterType)}
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-black text-xs font-bold transition-colors"
          >
            {uploading ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Upload className="w-3.5 h-3.5" />
            )}
            {uploading ? 'Enviando…' : 'Upload'}
          </button>
          <button type="button" onClick={onClose} className="text-zinc-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Upload error */}
      {uploadError && (
        <div className="px-4 py-2 bg-red-950 border-b border-red-800 text-red-300 text-xs shrink-0">
          {uploadError}
        </div>
      )}

      {/* Upload overlay */}
      {uploading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-zinc-950/80">
          <Loader2 className="w-8 h-8 text-amber-400 animate-spin" />
          <p className="text-sm text-zinc-300">Enviando arquivo…</p>
        </div>
      )}

      {/* Type tabs — only show if no forced filter */}
      {!filterType && (
        <div className="flex border-b border-zinc-800 shrink-0">
          {(['all', 'image', 'video'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`flex-1 py-2.5 text-xs font-medium uppercase tracking-wider transition-colors ${tab === t ? 'text-amber-400 border-b-2 border-amber-400' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              {t === 'all' ? 'Todos' : t === 'image' ? 'Imagens' : 'Vídeos'}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {shown.map((file) => (
            <button
              key={file.src}
              type="button"
              onClick={() => { pickerState.onSelect(file); onClose(); }}
              className="group flex flex-col items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 p-1.5 hover:border-amber-500 transition-colors text-left"
            >
              <div className="relative w-full rounded overflow-hidden bg-zinc-800" style={{ aspectRatio: '1' }}>
                {file.type === 'image' ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={file.src} alt={file.name} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="w-full h-full flex items-center justify-center bg-zinc-800">
                      <Film className="w-8 h-8 text-zinc-600" />
                    </div>
                    <video
                      src={file.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity"
                      onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLVideoElement).pause(); (e.currentTarget as HTMLVideoElement).currentTime = 0; }}
                    />
                  </>
                )}
                <div className={`absolute top-1 right-1 rounded px-1 text-[9px] font-bold uppercase ${file.type === 'video' ? 'bg-amber-500 text-black' : 'bg-zinc-700 text-zinc-300'}`}>
                  {file.type === 'video' ? 'VID' : 'IMG'}
                </div>
              </div>
              <span className="text-[10px] text-zinc-400 truncate w-full text-center leading-tight">{file.name}</span>
            </button>
          ))}
        </div>
        {shown.length === 0 && !uploading && (
          <div className="flex flex-col items-center justify-center h-40 text-zinc-600 text-sm gap-2">
            <p>Nenhum arquivo encontrado</p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex items-center gap-1.5 text-amber-500 hover:text-amber-400 text-xs transition-colors"
            >
              <Upload className="w-3.5 h-3.5" /> Fazer upload
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Media Field ──────────────────────────────────────────────────────────────

function MediaField({
  label,
  item,
  onPick,
  onClear,
  badge,
}: {
  label: string;
  item: MediaItem;
  onPick: () => void;
  onClear?: () => void;
  badge?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={onPick}
        className="relative shrink-0 w-14 h-14 rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 hover:border-amber-500 transition-colors"
      >
        {item.src ? (
          item.type === 'video' ? (
            <video src={item.src} muted playsInline preload="metadata" className="w-full h-full object-cover" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.src} alt="" className="w-full h-full object-cover" />
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon className="w-5 h-5 text-zinc-600" />
          </div>
        )}
        {badge && (
          <div className="absolute bottom-0 inset-x-0 bg-amber-500/90 text-black text-[8px] font-bold text-center py-0.5 uppercase">
            {badge}
          </div>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className="text-xs text-zinc-400 mb-1">{label}</p>
        <p className="text-xs text-zinc-200 font-mono truncate">{item.src ? fileName(item.src) : <span className="text-zinc-600 italic">vazio</span>}</p>
      </div>

      <div className="flex flex-col gap-1 shrink-0">
        <button
          type="button"
          onClick={onPick}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 text-xs transition-colors"
        >
          <RefreshCw className="w-3 h-3" />
          Trocar
        </button>
        {onClear && item.src && (
          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-zinc-800 hover:bg-red-900 text-zinc-400 hover:text-red-300 text-xs transition-colors"
          >
            <X className="w-3 h-3" />
            Remover
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden">
      <div className="px-4 py-2.5 bg-zinc-800/60 border-b border-zinc-800">
        <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{title}</h3>
      </div>
      <div className="p-4 space-y-4">{children}</div>
    </div>
  );
}

// ─── Hero Preview ─────────────────────────────────────────────────────────────

function HeroPreview({ hero, heroVideo }: { hero: string; heroVideo: string | null }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800" style={{ aspectRatio: '9/16' }}>
      {heroVideo ? (
        <video key={heroVideo} src={heroVideo} autoPlay muted loop playsInline preload="metadata" className="absolute inset-0 w-full h-full object-cover opacity-80" />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={hero} src={hero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
      )}
      <div className="absolute inset-0 bg-zinc-950/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/10 via-zinc-950/60 to-zinc-950/95" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-6">
        <div className="w-7 h-7 rounded-full border-2 border-amber-400/60" />
        <div className="h-1 w-16 bg-amber-400/40 rounded" />
        <div className="h-2 w-28 bg-white/80 rounded" />
        <div className="h-2 w-24 bg-amber-400 rounded" />
        <div className="mt-2 h-7 w-24 rounded bg-amber-400" />
      </div>
      {heroVideo && (
        <div className="absolute top-2 left-2 flex items-center gap-1 bg-amber-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
          <Film className="w-2.5 h-2.5" /> Vídeo
        </div>
      )}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function AdminClient({ initialData }: { initialData: ImagesData }) {
  const router = useRouter();
  const [data, setData] = useState<ImagesData>(initialData);
  const [activeSlug, setActiveSlug] = useState<Slug>('casamento');
  const [files, setFiles] = useState<FileOption[]>([]);
  const [pickerState, setPickerState] = useState<PickerState>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [activePreview, setActivePreview] = useState<'hero' | 'processo' | 'momentos'>('hero');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/list-files').then((r) => r.json()).then(setFiles).catch(() => {});
  }, []);

  const landing = data[activeSlug];

  function update(fn: (prev: LandingData) => LandingData) {
    setData((d) => ({ ...d, [activeSlug]: fn(d[activeSlug]) }));
    setDirty(true);
    setSaved(false);
  }

  function openPicker(filterType: 'image' | 'video' | null, onSelect: (f: FileOption) => void) {
    setUploadError(null);
    setPickerState({ filterType, onSelect });
  }

  async function handleUpload(file: File): Promise<FileOption | null> {
    setUploading(true);
    setUploadError(null);
    const form = new FormData();
    form.append('file', file);
    try {
      const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
      const json = await res.json();
      if (!res.ok) {
        setUploadError(json.error ?? 'Erro ao fazer upload.');
        return null;
      }
      const newFile: FileOption = { src: json.src, type: json.type, name: json.name };
      setFiles((prev) => {
        const exists = prev.some((f) => f.src === newFile.src);
        return exists ? prev.map((f) => f.src === newFile.src ? newFile : f) : [newFile, ...prev];
      });
      return newFile;
    } catch {
      setUploadError('Erro de conexão. Tente novamente.');
      return null;
    } finally {
      setUploading(false);
    }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  async function save() {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/save-images', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(normalize(data)),
      });
      if (res.ok) { setSaved(true); setDirty(false); setTimeout(() => setSaved(false), 3000); }
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3 gap-3">
          {/* Nav + Sair */}
          <div className="flex items-center gap-3 shrink-0">
            <nav className="flex gap-1">
              <a href="/admin/leads" className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors">Leads</a>
              <a href="/admin/gerenciamento" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500 text-black">Mídia</a>
            </nav>
            <button
              type="button"
              onClick={logout}
              className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
              title="Sair"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sair</span>
            </button>
          </div>

          {/* active landing label */}
          <span className="text-xs font-semibold text-amber-400 tracking-wide shrink-0">
            {SLUG_LABELS[activeSlug]}
          </span>

          {/* Salvar */}
          <button
            type="button"
            onClick={save}
            disabled={saving || !dirty}
            className={`shrink-0 px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${saved ? 'bg-green-600 text-white' : dirty ? 'bg-amber-500 text-black hover:bg-amber-400' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'}`}
          >
            {saving ? '…' : saved ? 'Salvo ✓' : 'Salvar'}
          </button>
        </div>
      </header>

      {/* Landing selector */}
      <div className="border-b border-zinc-800 bg-zinc-900/40">
        <div className="max-w-screen-lg mx-auto px-4 py-3 flex gap-2">
          {SLUGS.map((slug) => {
            const d = data[slug];
            const isActive = slug === activeSlug;
            return (
              <button
                key={slug}
                type="button"
                onClick={() => setActiveSlug(slug)}
                className={`relative flex-1 rounded-xl overflow-hidden transition-all duration-200 ${isActive ? 'ring-2 ring-amber-400 shadow-lg shadow-amber-500/10' : 'opacity-50 hover:opacity-80'}`}
                style={{ height: '72px' }}
              >
                {d.heroVideo ? (
                  <video src={d.heroVideo} muted playsInline preload="metadata" autoPlay loop className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={d.hero} alt="" className="absolute inset-0 w-full h-full object-cover" />
                )}
                <div className={`absolute inset-0 transition-colors ${isActive ? 'bg-zinc-950/40' : 'bg-zinc-950/60'}`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <span className={`text-[11px] font-bold uppercase tracking-widest drop-shadow ${isActive ? 'text-amber-400' : 'text-zinc-200'}`}>
                    {SLUG_LABELS[slug]}
                  </span>
                  {isActive && <div className="w-5 h-0.5 rounded-full bg-amber-400" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-screen-lg mx-auto px-4 py-5 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5">

        {/* Form */}
        <div className="space-y-3 order-2 lg:order-1">

          <Section title="Hero">
            <MediaField
              label="Imagem de fundo (poster)"
              item={{ type: 'image', src: landing.hero }}
              onPick={() => openPicker('image', (f) => update((l) => ({ ...l, hero: f.src })))}
            />
            <MediaField
              label="Vídeo de fundo (opcional)"
              item={{ type: 'video', src: landing.heroVideo ?? '' }}
              onPick={() => openPicker('video', (f) => update((l) => ({ ...l, heroVideo: f.src })))}
              onClear={() => update((l) => ({ ...l, heroVideo: null }))}
              badge={landing.heroVideo ? 'ativo' : undefined}
            />
          </Section>

          <Section title="Sobre — Fotos">
            <MediaField
              label="Foto principal"
              item={{ type: 'image', src: landing.about.primary }}
              onPick={() => openPicker('image', (f) => update((l) => ({ ...l, about: { ...l.about, primary: f.src } })))}
            />
            <MediaField
              label="Foto secundária"
              item={{ type: 'image', src: landing.about.secondary }}
              onPick={() => openPicker('image', (f) => update((l) => ({ ...l, about: { ...l.about, secondary: f.src } })))}
            />
          </Section>

          <Section title="Como Funciona">
            {PROCESS_KEYS.map((key, i) => (
              <MediaField
                key={key}
                label={PROCESS_LABELS[i]}
                item={landing.process[key]}
                onPick={() => openPicker(null, (f) => update((l) => ({ ...l, process: { ...l.process, [key]: { type: f.type, src: f.src } } })))}
              />
            ))}
          </Section>

          <Section title="Momentos / Depoimentos">
            {landing.stories.map((story, i) => (
              <MediaField
                key={i}
                label={`Card ${i + 1}`}
                item={story}
                onPick={() => openPicker(null, (f) => {
                  update((l) => {
                    const stories = [...l.stories];
                    stories[i] = { type: f.type, src: f.src };
                    return { ...l, stories };
                  });
                })}
              />
            ))}
          </Section>

          <Section title="Contato — Fundo">
            <MediaField
              label="Imagem"
              item={{ type: 'image', src: landing.contact }}
              onPick={() => openPicker('image', (f) => update((l) => ({ ...l, contact: f.src })))}
            />
          </Section>
        </div>

        {/* Preview */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-20 lg:self-start space-y-3">
          {/* Preview tabs */}
          <div className="flex rounded-lg overflow-hidden border border-zinc-800 text-xs">
            {(['hero', 'processo', 'momentos'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActivePreview(tab)}
                className={`flex-1 py-2 font-medium capitalize transition-colors ${activePreview === tab ? 'bg-zinc-700 text-white' : 'bg-zinc-900 text-zinc-500 hover:text-zinc-300'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activePreview === 'hero' && (
            <HeroPreview hero={landing.hero} heroVideo={landing.heroVideo} />
          )}

          {activePreview === 'processo' && (
            <div className="grid grid-cols-2 gap-2">
              {PROCESS_KEYS.map((key, i) => (
                <div key={key} className="space-y-1">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-zinc-800">
                    {landing.process[key].type === 'video' ? (
                      <video src={landing.process[key].src} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover" />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={landing.process[key].src} alt="" className="w-full h-full object-cover" />
                    )}
                  </div>
                  <p className="text-[10px] text-zinc-500 text-center">{PROCESS_LABELS[i]}</p>
                </div>
              ))}
            </div>
          )}

          {activePreview === 'momentos' && (
            <div className="grid grid-cols-3 gap-1.5">
              {landing.stories.map((story, i) => (
                <div key={i} className="relative rounded-lg overflow-hidden bg-zinc-800" style={{ aspectRatio: '4/5' }}>
                  {story.type === 'video' ? (
                    <video src={story.src} autoPlay muted loop playsInline preload="metadata" className="w-full h-full object-cover" />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={story.src} alt="" className="w-full h-full object-cover" />
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-zinc-950/60 text-zinc-300 text-[9px] text-center py-0.5">{i + 1}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* File Picker */}
      <FilePicker
        files={files}
        pickerState={pickerState}
        onClose={() => setPickerState(null)}
        onUpload={handleUpload}
        uploading={uploading}
        uploadError={uploadError}
      />
    </div>
  );
}
