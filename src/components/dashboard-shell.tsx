import Link from 'next/link';

type DashboardShellProps = {
  email?: string | null;
  children?: React.ReactNode;
};

export function DashboardShell({ email, children }: DashboardShellProps) {
  return (
    <main className="mx-auto min-h-screen max-w-6xl p-6">
      <section className="rounded-2xl border bg-white p-6 shadow">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="mt-1 text-slate-600">
              Bem-vindo{email ? `, ${email}` : ''}.
            </p>
          </div>

          <form action="/auth/logout" method="post">
            <button
              type="submit"
              className="inline-flex w-fit rounded-xl border px-4 py-2 text-sm font-medium"
            >
              Sair
            </button>
          </form>
        </div>

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

        {children}
      </section>
    </main>
  );
}
