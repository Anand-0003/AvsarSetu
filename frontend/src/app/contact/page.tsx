"use client";

import { useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[800px] mx-auto">
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-10 shadow-card">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Support &amp; Inquiries
            </span>
            <h1 className="font-sora text-3xl font-bold text-slate-900 mb-2">
              Contact AvsarSetu Team
            </h1>
            <p className="text-sm text-slate-600 mb-8">
              Have questions regarding scheme verification, partnership proposals, or need help with eligibility checks? Send us a message.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-[#E8F1EE] border border-[#D5E4E0] text-center">
                <span className="material-symbols-outlined text-4xl text-[#0F3832] mb-2">check_circle</span>
                <h3 className="font-sora text-lg font-bold text-[#0F3832]">Message Received</h3>
                <p className="text-xs text-slate-600 mt-1">Our research team will respond within 24 to 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@example.in"
                    className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Message / Subject
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your query or feedback..."
                    className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#0F3832] text-white font-semibold text-xs hover:bg-[#14493F] transition-all cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

