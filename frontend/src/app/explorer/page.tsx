"use client";

import { useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { OpportunityCard } from "../../components/opportunity/OpportunityCard";
import { MOCK_OPPORTUNITIES, INDIAN_STATES } from "../../data/mockData";
import Link from "next/link";

export default function ExplorerPage() {
  const [activeState, setActiveState] = useState<string>("Rajasthan");

  const stateOpportunities = MOCK_OPPORTUNITIES.filter(
    (opp) => opp.state === activeState || opp.locationScope === "All India"
  );

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
          {/* Header */}
          <div className="mb-8 max-w-3xl">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Jurisdiction &amp; Regional Atlas
            </span>
            <h1 className="font-sora text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              State &amp; District Opportunity Explorer
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Explore schemes, scholarships, and state recruitment tailored specifically to your domicile and administrative district.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* State selection column */}
            <div className="lg:col-span-4 bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-subtle max-h-[600px] overflow-y-auto">
              <h3 className="font-sora text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                <span>Select State / UT</span>
                <span className="text-[11px] font-normal text-slate-500">36 States &amp; UTs</span>
              </h3>

              <div className="space-y-1">
                {INDIAN_STATES.map((st) => (
                  <button
                    key={st}
                    onClick={() => setActiveState(st === "All India (Central)" ? "Central" : st)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      activeState === st || (st === "All India (Central)" && activeState === "Central")
                        ? "bg-[#0F3832] text-white"
                        : "text-slate-700 hover:bg-[#E8F1EE]"
                    }`}
                  >
                    <span>{st}</span>
                    <span className="text-[10px] opacity-75">→</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Opportunities Feed for Selected State */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-[#D5E4E0] shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#0F3832] uppercase tracking-wide">
                    Regional Scope: {activeState}
                  </span>
                  <h3 className="font-sora text-xl font-bold text-slate-900 mt-1">
                    Available in {activeState}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Showing local state welfare programs plus pan-India eligible schemes.
                  </p>
                </div>
                <Link
                  href={`/explore?state=${encodeURIComponent(activeState)}`}
                  className="px-4 py-2 bg-[#0F3832] text-white rounded-lg text-xs font-semibold hover:bg-[#14493F] shrink-0"
                >
                  View in Catalog
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stateOpportunities.map((opp) => (
                  <OpportunityCard key={opp.id} opportunity={opp} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

