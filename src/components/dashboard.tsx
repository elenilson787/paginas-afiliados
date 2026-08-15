import { metrics, campaigns, products } from '@/lib/mock-data';

export function Dashboard() {
  return (
    <main className="mx-auto max-w-7xl p-6 space-y-8">
      <section>
        <h1 className="text-3xl font-bold">Shopee Affiliate SaaS</h1>
        <p className="mt-2 text-slate-600">Painel inicial para monitorar links, produtos e campanhas.</p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {metrics.map((item) => (
          <div key={item.label} className="rounded-2xl bg-white p-5 shadow-sm border">
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-sm border">
          <h2 className="text-xl font-semibold">Campanhas</h2>
          <ul className="mt-4 space-y-3">
            {campaigns.map((c) => (
              <li key={c.name} className="flex items-center justify-between rounded-xl bg-slate-50 p-3">
                <span>{c.name}</span>
                <span className="text-sm text-slate-500">{c.status}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm border">
          <h2 className="text-xl font-semibold">Produtos em destaque</h2>
          <ul className="mt-4 space-y-3">
            {products.map((p) => (
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
