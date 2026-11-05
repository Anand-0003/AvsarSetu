"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

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
          <h1 className="font-sora text-2xl font-bold text-slate-900">Reset Password</h1>
          <p className="text-xs text-slate-500 mt-1">
            Enter your registered email address to receive password recovery instructions.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-[#E8F1EE] border border-[#D5E4E0] text-center space-y-2">
            <span className="material-symbols-outlined text-3xl text-[#0F3832]">mark_email_read</span>
            <h4 className="font-sora text-sm font-bold text-[#0F3832]">Reset Link Sent</h4>
            <p className="text-xs text-slate-600">
              If an account matches {email}, you will receive a secure reset email shortly.
            </p>
            <div className="pt-2">
              <Link href="/auth/login" className="text-xs font-semibold text-[#0F3832] hover:underline">
                Back to Sign In
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
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

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#0F3832] hover:bg-[#14493F] text-white font-semibold text-sm shadow-sm transition-all active:scale-[0.98] cursor-pointer mt-2"
            >
              Send Recovery Email
            </button>
          </form>
        )}

        <div className="mt-6 pt-6 border-t border-slate-100 text-center">
          <Link href="/auth/login" className="text-xs text-slate-600 hover:text-[#0F3832]">
            ← Return to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

