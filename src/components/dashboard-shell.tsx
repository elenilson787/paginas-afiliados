'use client';

import { createClient } from '@/lib/supabase/client';

export function DashboardShell({ email, workspace, metrics, campaigns, products }: any) {
  const supabase = createClient();

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  return (
    <main className="mx-auto max-w-7xl space-y-8 p-6">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Shopee Affiliate SaaS</h1>
          <p className="text-slate-600">{email} · {workspace}</p>
        </div>
        <button onClick={signOut} className="rounded-xl border px-4 py-2">Sair</button>
      </header>

      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map((item: any) => (
          <div key={item.label} className="rounded-2xl border bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Campanhas</h2>
          <ul className="mt-4 space-y-3">
            {campaigns.map((c: any) => (
              <li key={c.name} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                <span>{c.name}</span>
                <span className="text-sm text-slate-500">{c.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="text-xl font-semibold">Produtos em destaque</h2>
          <ul className="mt-4 space-y-3">
            {products.map((p: any) => (
              <li key={p.name} className="rounded-xl bg-slate-50 p-3">
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-slate-500">{p.category} · {p.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
