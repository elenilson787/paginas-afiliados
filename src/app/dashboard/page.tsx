import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect('/login');
  }

  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6">
      <section className="rounded-2xl border bg-white p-6 shadow">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="mt-2 text-slate-600">
          Bem-vindo ao seu painel, {data.user.email}.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Cliques</p>
            <p className="text-2xl font-bold">12.4k</p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Conversões</p>
            <p className="text-2xl font-bold">1.8k</p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Comissão</p>
            <p className="text-2xl font-bold">R$ 8.4k</p>
          </div>
        </div>
      </section>
    </main>
  );
}
