import { DashboardShell } from './dashboard-shell';

type DashboardProps = {
  email?: string | null;
};

export function Dashboard({ email }: DashboardProps) {
  return <DashboardShell email={email} />;
}
