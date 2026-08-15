import Link from 'next/link';
import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-4">
      <div className="w-full space-y-4">
        <LoginForm />
        <p className="text-center text-sm text-slate-600">
          Não tem conta?{' '}
          <Link href="/signup" className="font-medium text-blue-600 underline">
            Criar agora
          </Link>
        </p>
      </div>
    </main>
  );
}
