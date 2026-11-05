"use client";

import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { OpportunityCard } from "../../components/opportunity/OpportunityCard";
import { MOCK_OPPORTUNITIES } from "../../data/mockData";

export default function ScholarshipsPage() {
  const scholarships = MOCK_OPPORTUNITIES.filter((opp) => opp.category === "scholarship");

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
          {/* Header */}
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              National &amp; International Grants
            </span>
            <h1 className="font-sora text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Scholarships &amp; Research Fellowships
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Merit-cum-means assistance, doctoral fellowships (PMRF), minority student fee reimbursement, and premier corporate endowments.
            </p>
          </div>

          {/* Quick stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle">
              <span className="text-xs text-slate-500 block font-medium">Active Grants</span>
              <span className="font-sora text-xl font-bold text-[#0F3832]">1,850+</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle">
              <span className="text-xs text-slate-500 block font-medium">Max Fellowship</span>
              <span className="font-sora text-xl font-bold text-[#D97706]">₹80,000 / mo</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle">
              <span className="text-xs text-slate-500 block font-medium">Women in STEM</span>
              <span className="font-sora text-xl font-bold text-emerald-700">Dedicated Quotas</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle">
              <span className="text-xs text-slate-500 block font-medium">Verification</span>
              <span className="font-sora text-xl font-bold text-slate-800">Ministry Portals</span>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarships.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
