"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#FBFBFA] px-4 py-12">
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
          <h1 className="font-sora text-2xl font-bold text-slate-900">Create Free Account</h1>
          <p className="text-xs text-slate-500 mt-1">
            Always 100% free. No subscription required for full citizen discovery features.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name (Optional)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.in"
              className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#0F3832] hover:bg-[#14493F] text-white font-semibold text-sm shadow-sm transition-all active:scale-[0.98] cursor-pointer mt-2"
          >
            Create Free Account
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-600">
            Already registered?{" "}
            <Link href="/auth/login" className="font-semibold text-[#0F3832] hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

