"use client";

import { useState } from "react";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import Link from "next/link";

export default function CgpaCalculatorPage() {
  const [cgpa, setCgpa] = useState<number>(8.4);
  const [formula, setFormula] = useState<"cbse" | "aicte" | "mumbai">("cbse");

  const calculateEquivalent = () => {
    if (formula === "cbse") return (cgpa * 9.5).toFixed(2);
    if (formula === "aicte") return ((cgpa - 0.75) * 10).toFixed(2);
    if (formula === "mumbai") return (7.1 * cgpa + 11).toFixed(2);
    return (cgpa * 9.5).toFixed(2);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[800px] mx-auto">
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0F3832]">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-[#0F3832]">Tools</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">CGPA to Percentage Converter</span>
          </nav>

          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-10 shadow-card">
            <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              CGPA to Percentage Converter
            </h1>
            <p className="text-sm text-slate-600 mb-8">
              Convert university 10-point CGPA into equivalent academic percentage based on official educational board formulas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Enter Your CGPA (10-point scale)
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  max="10"
                  value={cgpa}
                  onChange={(e) => setCgpa(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[#FBFBFA] border border-slate-200 rounded-xl text-slate-900 font-bold text-lg focus:outline-none focus:border-[#0F3832]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Conversion Formula Standard
                </label>
                <select
                  value={formula}
                  onChange={(e) => setFormula(e.target.value as "cbse" | "aicte" | "mumbai")}
                  className="w-full px-4 py-3 bg-[#FBFBFA] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
                >
                  <option value="cbse">CBSE Standard (CGPA × 9.5)</option>
                  <option value="aicte">AICTE Standard ((CGPA - 0.75) × 10)</option>
                  <option value="mumbai">Mumbai University Standard (7.1 × CGPA + 11)</option>
                </select>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#E8F1EE] border border-[#D5E4E0] text-center">
              <span className="text-xs font-bold text-[#0F3832] uppercase tracking-wide block mb-1">
                Equivalent Academic Percentage
              </span>
              <div className="font-sora text-4xl sm:text-5xl font-extrabold text-[#0F3832]">
                {calculateEquivalent()}%
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Standard formula applied: {formula === "cbse" ? "CGPA × 9.5" : formula === "aicte" ? "(CGPA - 0.75) × 10" : "7.1 × CGPA + 11"}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link href="/tools" className="text-xs font-semibold text-slate-600 hover:text-[#0F3832]">
                ← Back to Tools
              </Link>
              <Link
                href="/explore"
                className="px-5 py-2.5 rounded-lg bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F]"
              >
                Search Matching Fellowships
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
