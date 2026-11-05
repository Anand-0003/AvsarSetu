"use client";

import { useState } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { MOCK_OPPORTUNITIES } from "../../data/mockData";
import Link from "next/link";

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    "pmrf-2025",
    "rajasthan-anuprati",
  ]);

  const selectedOpps = MOCK_OPPORTUNITIES.filter((opp) =>
    selectedIds.includes(opp.id)
  );

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Analytical Matrix
            </span>
            <h1 className="font-sora text-3xl font-bold text-slate-900">
              Opportunity Comparison Tool
            </h1>
            <p className="text-sm text-slate-600 mt-1.5">
              Side-by-side comparison of eligibility conditions, stipend benefits, deadlines, and official requirements.
            </p>
          </div>

          {/* Opportunity selector bar */}
          <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle mb-8 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-700 mr-2">Select to compare (max 3):</span>
            {MOCK_OPPORTUNITIES.slice(0, 6).map((opp) => (
              <button
                key={opp.id}
                onClick={() => toggleSelect(opp.id)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  selectedIds.includes(opp.id)
                    ? "bg-[#0F3832] text-white border-[#0F3832]"
                    : "bg-[#FBFBFA] text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {opp.title.slice(0, 24)}...
              </button>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto bg-white border border-[#D5E4E0] rounded-2xl shadow-card">
            <table className="w-full min-w-[700px] text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-[#FBFBFA]">
                  <th className="p-4 text-xs font-bold uppercase text-slate-500 w-1/4">
                    Comparison Parameter
                  </th>
                  {selectedOpps.map((opp) => (
                    <th key={opp.id} className="p-4 text-sm font-sora font-bold text-slate-900 w-1/3">
                      {opp.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm text-slate-700">
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Issuing Organization</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4">{opp.organization}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Category</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4 uppercase font-semibold text-xs text-[#0F3832]">
                      {opp.categoryLabel}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Financial Benefit</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4 font-bold text-emerald-800">{opp.benefits}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Application Deadline</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4 font-semibold text-[#D97706]">{opp.deadline}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Education Requirement</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4">{opp.educationLevel.join(", ")}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Geographic Scope</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4">{opp.state || opp.locationScope}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Income Ceiling</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4">
                      {opp.incomeLimit ? `Under ₹${(opp.incomeLimit / 100000).toFixed(1)} Lakh` : "No Limit"}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Verification Status</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4">
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                        {opp.verificationStatus}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900 bg-[#FBFBFA]">Action</td>
                  {selectedOpps.map((opp) => (
                    <td key={opp.id} className="p-4">
                      <Link
                        href={`/opportunities/${opp.slug}`}
                        className="inline-block px-4 py-2 rounded-lg bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F]"
                      >
                        View Full Details
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

