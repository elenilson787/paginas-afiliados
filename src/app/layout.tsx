import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopee Affiliate SaaS',
  description: 'Plataforma SaaS para afiliados Shopee',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
