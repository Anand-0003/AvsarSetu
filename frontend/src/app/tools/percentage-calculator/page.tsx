"use client";

import { useState } from "react";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import Link from "next/link";

export default function PercentageCalculatorPage() {
  const [obtainedMarks, setObtainedMarks] = useState<number>(450);
  const [totalMarks, setTotalMarks] = useState<number>(600);

  const percentage = totalMarks > 0 ? ((obtainedMarks / totalMarks) * 100).toFixed(2) : "0.00";

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[800px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0F3832]">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-[#0F3832]">Tools</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Percentage Calculator</span>
          </nav>

          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-10 shadow-card">
            <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Academic Percentage Calculator
            </h1>
            <p className="text-sm text-slate-600 mb-8">
              Accurately compute aggregate percentage from obtained and maximum marks as demanded on official scholarship and recruitment portals.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Obtained Marks
                </label>
                <input
                  type="number"
                  value={obtainedMarks}
                  onChange={(e) => setObtainedMarks(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[#FBFBFA] border border-slate-200 rounded-xl text-slate-900 font-bold text-lg focus:outline-none focus:border-[#0F3832]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Maximum / Total Marks
                </label>
                <input
                  type="number"
                  value={totalMarks}
                  onChange={(e) => setTotalMarks(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[#FBFBFA] border border-slate-200 rounded-xl text-slate-900 font-bold text-lg focus:outline-none focus:border-[#0F3832]"
                />
              </div>
            </div>

            {/* Calculated Result Display */}
            <div className="p-6 rounded-2xl bg-[#E8F1EE] border border-[#D5E4E0] text-center">
              <span className="text-xs font-bold text-[#0F3832] uppercase tracking-wide block mb-1">
                Your Calculated Percentage
              </span>
              <div className="font-sora text-4xl sm:text-5xl font-extrabold text-[#0F3832]">
                {percentage}%
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Formula: (Obtained Marks / Total Marks) × 100
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link href="/tools" className="text-xs font-semibold text-slate-600 hover:text-[#0F3832]">
                ← Back to Tools Directory
              </Link>
              <Link
                href="/explore"
                className="px-5 py-2.5 rounded-lg bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F]"
              >
                Find Schemes Matching {percentage}%
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

