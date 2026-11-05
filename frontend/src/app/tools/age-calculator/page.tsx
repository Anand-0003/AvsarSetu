"use client";

import { useState } from "react";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import Link from "next/link";

export default function AgeCalculatorPage() {
  const [dob, setDob] = useState("2003-08-14");
  const [targetDate, setTargetDate] = useState("2025-11-01");

  const calculateAge = () => {
    if (!dob || !targetDate) return { years: 0, months: 0, days: 0 };
    const birth = new Date(dob);
    const target = new Date(targetDate);

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
    return { years: Math.max(0, years), months: Math.max(0, months), days: Math.max(0, days) };
  };

  const age = calculateAge();

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
            <span className="text-slate-800 font-medium">Age Eligibility Calculator</span>
          </nav>

          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-10 shadow-card">
            <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Age Eligibility Calculator
            </h1>
            <p className="text-sm text-slate-600 mb-8">
              Verify exact age on the gazette notification cutoff date for UPSC, SSC, Banking, and PSC exams.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Date of Birth (DOB)
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FBFBFA] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  Age Cutoff / Reference Date
                </label>
                <input
                  type="date"
                  value={targetDate}
                  onChange={(e) => setTargetDate(e.target.value)}
                  className="w-full px-4 py-3 bg-[#FBFBFA] border border-slate-200 rounded-xl text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                />
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#E8F1EE] border border-[#D5E4E0] text-center">
              <span className="text-xs font-bold text-[#0F3832] uppercase tracking-wide block mb-2">
                Exact Age as of Cutoff Date
              </span>
              <div className="font-sora text-3xl sm:text-4xl font-extrabold text-[#0F3832]">
                {age.years} Years, {age.months} Months, {age.days} Days
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Eligible for notifications requiring age between 18 and 30/32 years.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link href="/tools" className="text-xs font-semibold text-slate-600 hover:text-[#0F3832]">
                ← Back to Tools
              </Link>
              <Link
                href="/jobs"
                className="px-5 py-2.5 rounded-lg bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F]"
              >
                Browse Govt Jobs for Age {age.years}
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

