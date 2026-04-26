'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Download, LogOut, Mail, MapPin, Phone, Search, X } from 'lucide-react';
import type { Lead } from '@/app/api/admin/leads/route';

type Filter = 'todos' | 'casamento' | 'debutante' | 'corporativo';

const TYPE_LABEL: Record<Lead['type'], string> = {
  casamento:   'Casamento',
  debutante:   'Debutante',
  corporativo: 'Corporativo',
};
const TYPE_COLOR: Record<Lead['type'], string> = {
  casamento:   'bg-rose-900/40 text-rose-300 border-rose-800/50',
  debutante:   'bg-purple-900/40 text-purple-300 border-purple-800/50',
  corporativo: 'bg-blue-900/40 text-blue-300 border-blue-800/50',
};

function fmtDate(iso: string) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function fmtDatetime(iso: string) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function toCSV(leads: Lead[]): string {
  const headers = ['Tipo', 'Nome', 'Telefone', 'Email', 'Data do Evento', 'Origem', 'Cadastrado em'];
  const rows = leads.map((l) => [
    TYPE_LABEL[l.type],
    l.name,
    l.phone,
    l.email,
    fmtDate(l.event_date),
    l.source,
    fmtDatetime(l.created_at),
  ].map((v) => `"${(v ?? '').replace(/"/g, '""')}"`).join(','));
  return [headers.join(','), ...rows].join('\n');
}

function downloadCSV(leads: Lead[]) {
  const csv = '﻿' + toCSV(leads);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `leads-dj-japa-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function LeadCard({ lead }: { lead: Lead }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 space-y-3">
      {/* Top row */}
      <div className="flex items-start justify-between gap-2">
        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider rounded-full border px-2.5 py-0.5 ${TYPE_COLOR[lead.type]}`}>
          {TYPE_LABEL[lead.type]}
        </span>
        <span className="text-[11px] text-zinc-500 whitespace-nowrap">{fmtDatetime(lead.created_at)}</span>
      </div>

      {/* Name */}
      <p className="text-sm font-semibold text-zinc-100 leading-tight">{lead.name || '—'}</p>

      {/* Contact row */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {lead.phone && (
          <a
            href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 text-xs font-mono transition-colors"
          >
            <Phone className="w-3 h-3 shrink-0" />
            {lead.phone}
          </a>
        )}
        {lead.email && (
          <span className="flex items-center gap-1.5 text-zinc-400 text-xs">
            <Mail className="w-3 h-3 shrink-0" />
            <span className="truncate max-w-[180px]">{lead.email}</span>
          </span>
        )}
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-zinc-800 pt-2.5">
        {lead.event_date && (
          <span className="flex items-center gap-1.5 text-zinc-500 text-[11px]">
            <Calendar className="w-3 h-3 shrink-0" />
            {fmtDate(lead.event_date)}
          </span>
        )}
        {lead.source && (
          <span className="flex items-center gap-1.5 text-zinc-600 text-[11px] font-mono truncate max-w-full">
            <MapPin className="w-3 h-3 shrink-0" />
            {lead.source}
          </span>
        )}
      </div>
    </div>
  );
}

export default function LeadsClient() {
  const router = useRouter();
  const [leads, setLeads]     = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery]     = useState('');
  const [filter, setFilter]   = useState<Filter>('todos');

  useEffect(() => {
    fetch('/api/admin/leads')
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setLeads(data); })
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return leads.filter((l) => {
      if (filter !== 'todos' && l.type !== filter) return false;
      if (!q) return true;
      return (
        l.name?.toLowerCase().includes(q) ||
        l.phone?.toLowerCase().includes(q) ||
        l.email?.toLowerCase().includes(q) ||
        l.source?.toLowerCase().includes(q)
      );
    });
  }, [leads, query, filter]);

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
  }

  const counts: Record<Filter, number> = useMemo(() => ({
    todos:       leads.length,
    casamento:   leads.filter((l) => l.type === 'casamento').length,
    debutante:   leads.filter((l) => l.type === 'debutante').length,
    corporativo: leads.filter((l) => l.type === 'corporativo').length,
  }), [leads]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
        {/* Row 1: nav + actions */}
        <div className="flex items-center justify-between px-4 py-2.5 gap-3">
          <nav className="flex gap-1 shrink-0">
            <a href="/admin/leads" className="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500 text-black">Leads</a>
            <a href="/admin/gerenciamento" className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors">Mídia</a>
          </nav>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => downloadCSV(filtered)}
              disabled={filtered.length === 0}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-amber-500 hover:text-black text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">CSV</span>
            </button>
            <button type="button" onClick={logout} className="text-zinc-500 hover:text-zinc-300 transition-colors p-1.5" title="Sair">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Row 2: search */}
        <div className="px-4 pb-2.5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500 pointer-events-none" />
            <input
              type="search"
              placeholder="Nome, telefone ou e-mail…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-8 pr-8 py-2 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Row 3: filter tabs */}
        <div className="flex border-t border-zinc-800 overflow-x-auto">
          {(['todos', 'casamento', 'debutante', 'corporativo'] as Filter[]).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`shrink-0 px-4 py-2 text-xs font-medium capitalize transition-colors flex items-center gap-1.5 ${filter === f ? 'text-amber-400 border-b-2 border-amber-400' : 'text-zinc-500 hover:text-zinc-300'}`}
            >
              {f === 'todos' ? 'Todos' : TYPE_LABEL[f as Lead['type']]}
              <span className={`text-[10px] rounded px-1 ${filter === f ? 'bg-amber-500/20 text-amber-400' : 'bg-zinc-800 text-zinc-500'}`}>
                {counts[f]}
              </span>
            </button>
          ))}
          <div className="ml-auto flex items-center pr-4 text-xs text-zinc-600 shrink-0">
            {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>
      </header>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center h-64 text-zinc-600 text-sm">Carregando…</div>
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-zinc-600 text-sm gap-2">
          <Search className="w-8 h-8 opacity-30" />
          {query ? 'Nenhum resultado para esta busca.' : 'Nenhum lead cadastrado ainda.'}
        </div>
      ) : (
        <>
          {/* Cards — mobile */}
          <div className="md:hidden px-4 py-4 space-y-3">
            {filtered.map((lead) => <LeadCard key={lead.id} lead={lead} />)}
          </div>

          {/* Table — desktop */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/50">
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Tipo</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Nome</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Telefone</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">E-mail</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Evento</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500 hidden xl:table-cell">Origem</th>
                  <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-zinc-500">Cadastrado</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead, i) => (
                  <tr
                    key={lead.id}
                    className={`border-b border-zinc-800/50 hover:bg-zinc-900/60 transition-colors ${i % 2 === 0 ? '' : 'bg-zinc-900/20'}`}
                  >
                    <td className="px-4 py-3">
                      <span className={`inline-block text-[10px] font-bold uppercase tracking-wider rounded border px-2 py-0.5 ${TYPE_COLOR[lead.type]}`}>
                        {TYPE_LABEL[lead.type]}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-zinc-200 max-w-[160px] truncate">{lead.name || '—'}</td>
                    <td className="px-4 py-3">
                      {lead.phone ? (
                        <a
                          href={`https://wa.me/55${lead.phone.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 font-mono text-xs transition-colors"
                        >
                          {lead.phone}
                        </a>
                      ) : '—'}
                    </td>
                    <td className="px-4 py-3 text-zinc-400 text-xs truncate max-w-[180px]">{lead.email || '—'}</td>
                    <td className="px-4 py-3 text-zinc-400 text-xs">{fmtDate(lead.event_date)}</td>
                    <td className="px-4 py-3 text-zinc-600 text-[11px] hidden xl:table-cell font-mono truncate max-w-[140px]">{lead.source || '—'}</td>
                    <td className="px-4 py-3 text-zinc-500 text-xs whitespace-nowrap">{fmtDatetime(lead.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
