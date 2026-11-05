"use client";

import { useState } from "react";
import { MOCK_OPPORTUNITIES } from "../../../data/mockData";
import { Opportunity } from "../../../types";

export default function VerificationCenterPage() {
  const [items, setItems] = useState<Opportunity[]>(MOCK_OPPORTUNITIES);

  const approveItem = (id: string) => {
    setItems((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, verificationStatus: "Official Source Verified" } : o
      )
    );
  };

  const markUnderReview = (id: string) => {
    setItems((prev) =>
      prev.map((o) =>
        o.id === id ? { ...o, verificationStatus: "Under Review" } : o
      )
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
          Integrity &amp; Gazette Validation
        </span>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
          Source Verification Centre
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Review extracted opportunity data against official gazettes, PDF notifications, and ministry websites before live publication.
        </p>
      </div>

      {/* Verification standards card */}
      <div className="p-5 rounded-2xl bg-[#E8F1EE] border border-[#D5E4E0] text-xs text-[#0F3832] space-y-1">
        <strong className="block font-bold text-sm">Official Gazette Protocol</strong>
        <p className="leading-relaxed">
          Do not label an opportunity officially verified merely because it appears on another aggregator. Check original ministry PDF, application endpoint, and gazette notification reference.
        </p>
      </div>

      {/* Verification Queue Table */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-card space-y-4">
        <h2 className="font-sora text-base font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
          <span>Verification Queue ({items.length})</span>
          <span className="text-xs font-normal text-slate-500">Live Audit Enabled</span>
        </h2>

        <div className="space-y-4">
          {items.map((opp) => (
            <div
              key={opp.id}
              className="p-5 rounded-xl bg-[#FBFBFA] border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase">
                    {opp.organization}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs text-slate-500 font-mono">
                    ID: {opp.id}
                  </span>
                </div>
                <h4 className="font-sora text-sm font-bold text-slate-900">{opp.title}</h4>
                <div className="text-xs text-slate-600">
                  <span>Source URL: </span>
                  <a
                    href={opp.officialSourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0F3832] font-semibold hover:underline"
                  >
                    {opp.officialSourceUrl}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    opp.verificationStatus === "Official Source Verified"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {opp.verificationStatus}
                </span>

                {opp.verificationStatus !== "Official Source Verified" ? (
                  <button
                    onClick={() => approveItem(opp.id)}
                    className="px-4 py-2 bg-[#0F3832] hover:bg-[#14493F] text-white rounded-lg text-xs font-semibold transition-all cursor-pointer"
                  >
                    Approve Gazette
                  </button>
                ) : (
                  <button
                    onClick={() => markUnderReview(opp.id)}
                    className="px-3 py-2 border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg text-xs font-medium cursor-pointer"
                  >
                    Flag Review
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

