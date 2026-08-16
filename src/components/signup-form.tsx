'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export function SignupForm() {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [workspaceName, setWorkspaceName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          workspace_name: workspaceName || 'Meu Workspace',
        },
      },
    });

    setLoading(false);

    if (!error) {
      router.push('/login');
    }
  };

  return (
    <form onSubmit={handleSignup} className="w-full space-y-4 rounded-2xl border bg-white p-6 shadow">
      <div>
        <h1 className="text-2xl font-semibold">Criar conta</h1>
        <p className="text-sm text-slate-500">Cadastre seu acesso</p>
      </div>

      <input
        className="w-full rounded-xl border p-3 outline-none"
        type="text"
        placeholder="Nome do workspace"
        value={workspaceName}
        onChange={(e) => setWorkspaceName(e.target.value)}
      />

      <input
        className="w-full rounded-xl border p-3 outline-none"
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className="w-full rounded-xl border p-3 outline-none"
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 p-3 font-medium text-white disabled:opacity-60"
      >
        {loading ? 'Criando...' : 'Criar conta'}
      </button>
    </form>
  )
}
