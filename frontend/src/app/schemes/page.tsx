"use client";

import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { OpportunityCard } from "../../components/opportunity/OpportunityCard";
import { MOCK_OPPORTUNITIES } from "../../data/mockData";
import Link from "next/link";

export default function SchemesPage() {
  const schemes = MOCK_OPPORTUNITIES.filter((opp) => opp.category === "scheme");

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
          {/* Header */}
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Central &amp; State Welfare Portals
            </span>
            <h1 className="font-sora text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Government Schemes &amp; Subsidies
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Verified Direct Benefit Transfer (DBT), education vouchers, coaching assistance, and welfare programs backed by official gazettes and ministry portals.
            </p>
          </div>

          {/* Quick stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle">
              <span className="text-xs text-slate-500 block font-medium">Total Schemes</span>
              <span className="font-sora text-xl font-bold text-[#0F3832]">2,430+</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle">
              <span className="text-xs text-slate-500 block font-medium">Direct DBT Coverage</span>
              <span className="font-sora text-xl font-bold text-emerald-700">100% Verified</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle">
              <span className="text-xs text-slate-500 block font-medium">State Portals</span>
              <span className="font-sora text-xl font-bold text-slate-800">28 States</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle">
              <span className="text-xs text-slate-500 block font-medium">Registration Fee</span>
              <span className="font-sora text-xl font-bold text-[#D97706]">Free / Zero</span>
            </div>
          </div>

          {/* Schemes grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>

          {/* Cross link */}
          <div className="mt-14 p-8 rounded-2xl bg-[#E8F1EE] border border-[#D5E4E0] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-sora text-lg font-bold text-[#0F3832] mb-1">
                Not sure which scheme you qualify for?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Answer 4 simple questions in our Eligibility Checker to discover your matching benefits.
              </p>
            </div>
            <Link
              href="/eligibility"
              className="px-6 py-3 rounded-lg bg-[#0F3832] hover:bg-[#14493F] text-white text-xs sm:text-sm font-semibold transition-all shrink-0"
            >
              Check Scheme Eligibility
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

