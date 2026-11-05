"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("rahul.sharma@example.in");
  const [password, setPassword] = useState("••••••••");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#FBFBFA] px-4 py-12">
      {/* Brand Logo Header */}
      <Link href="/" className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-[#0F3832] flex items-center justify-center text-white border border-[#14493F]">
          <span className="text-[#D97706] text-xl font-bold select-none font-sora">✦</span>
        </div>
        <span className="font-sora font-bold text-2xl tracking-tight text-[#0F3832]">
          Avsar<span className="text-slate-900">Setu</span>
        </span>
      </Link>

      <div className="w-full max-w-md bg-white border border-[#D5E4E0] rounded-2xl p-8 shadow-card">
        <div className="mb-6">
          <h1 className="font-sora text-2xl font-bold text-slate-900">Welcome back</h1>
          <p className="text-xs text-slate-500 mt-1">
            Sign in to access your saved opportunities, family profiles, and application tracker.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.in"
              className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Password
              </label>
              <Link href="/auth/forgot-password" className="text-xs text-[#0F3832] hover:underline">
                Forgot password?
              </Link>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#0F3832] hover:bg-[#14493F] text-white font-semibold text-sm shadow-sm transition-all active:scale-[0.98] cursor-pointer mt-2"
          >
            Sign In to Dashboard
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-600">
            Don&apos;t have an account?{" "}
            <Link href="/auth/register" className="font-semibold text-[#0F3832] hover:underline">
              Create a free account
            </Link>
          </p>
          <div className="mt-4">
            <Link href="/explore" className="text-xs text-slate-500 hover:text-slate-800">
              ← Continue as Guest without logging in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

