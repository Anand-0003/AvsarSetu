"use client";

import { useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { OpportunityCard } from "../../components/opportunity/OpportunityCard";
import { MOCK_OPPORTUNITIES } from "../../data/mockData";

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState<"all" | "govt" | "private">("all");

  const jobs = MOCK_OPPORTUNITIES.filter((opp) => {
    if (activeTab === "govt") return opp.category === "govt_job";
    if (activeTab === "private") return opp.category === "private_job";
    return opp.category === "govt_job" || opp.category === "private_job";
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
                Employment Pipelines
              </span>
              <h1 className="font-sora text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Government &amp; Private Recruitment
              </h1>
              <p className="text-base text-slate-600 mt-2 leading-relaxed">
                Direct notifications across UPSC, SSC, Railways, State PSCs, Defense, and verified corporate tech hiring drives.
              </p>
            </div>

            {/* Toggle tabs */}
            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#D5E4E0] shadow-subtle shrink-0">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#0F3832] text-white"
                    : "text-slate-600 hover:text-[#0F3832] hover:bg-slate-50"
                }`}
              >
                All Openings ({MOCK_OPPORTUNITIES.filter((o) => o.category === "govt_job" || o.category === "private_job").length})
              </button>
              <button
                onClick={() => setActiveTab("govt")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "govt"
                    ? "bg-[#0F3832] text-white"
                    : "text-slate-600 hover:text-[#0F3832] hover:bg-slate-50"
                }`}
              >
                Govt Public Sector
              </button>
              <button
                onClick={() => setActiveTab("private")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "private"
                    ? "bg-[#0F3832] text-white"
                    : "text-slate-600 hover:text-[#0F3832] hover:bg-slate-50"
                }`}
              >
                Verified Private Tech
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

