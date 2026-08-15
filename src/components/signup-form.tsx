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

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: email,
          workspace_name: workspaceName || 'Meu Workspace',
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (!error) router.push('/login');
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-24 max-w-md space-y-4 rounded-2xl border bg-white p-6 shadow">
      <h1 className="text-2xl font-semibold">Criar conta</h1>
      <input className="w-full rounded-xl border p-3" placeholder="Nome do workspace" value={workspaceName} onChange={e => setWorkspaceName(e.target.value)} />
      <input className="w-full rounded-xl border p-3" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="w-full rounded-xl border p-3" placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="w-full rounded-xl bg-blue-600 p-3 text-white">Cadastrar</button>
    </form>
  );
}
