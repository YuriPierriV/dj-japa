'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import JLogo from '@/components/JLogo';

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push('/admin/gerenciamento');
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error ?? 'Credenciais inválidas.');
      }
    } catch {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">

        <div className="flex justify-center mb-8">
          <JLogo className="h-10 w-10 text-wedding-gold drop-shadow-[0_0_16px_rgba(201,166,113,0.4)]" />
        </div>

        <h1 className="text-center font-serif text-2xl text-white mb-1">Acesso restrito</h1>
        <p className="text-center text-xs text-zinc-500 mb-8 tracking-wide">DJ Japa — Gerenciamento</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">Login</label>
            <input
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="Usuário"
            />
          </div>

          <div>
            <label className="block text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">Senha</label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-xs text-red-400 text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm uppercase tracking-widest rounded-lg py-3 transition-colors"
          >
            {loading ? 'Entrando…' : 'Entrar'}
          </button>
        </form>

      </div>
    </main>
  );
}
