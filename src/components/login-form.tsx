"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setLoading(false);
      setErrorMessage(
        "Não foi possível entrar. Verifique seu e-mail e sua senha."
      );
      return;
    }

    router.replace("/dashboard");
  }

  return (
    <form
      onSubmit={handleLogin}
      className="w-full space-y-4 rounded-2xl border bg-white p-6 shadow"
    >
      <div>
        <h1 className="text-2xl font-semibold">Entrar</h1>
        <p className="text-sm text-slate-500">
          Acesse seu painel de afiliado
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          E-mail
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
          className="w-full rounded-xl border p-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-700"
        >
          Senha
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
          className="w-full rounded-xl border p-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {errorMessage && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
        >
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-blue-600 p-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Entrando..." : "Entrar"}
      </button>

      <p className="text-center text-sm text-slate-600">
        Ainda não tem uma conta?{" "}
        <Link href="/signup" className="font-medium text-blue-600 underline">
          Criar conta
        </Link>
      </p>
    </form>
  );
}
