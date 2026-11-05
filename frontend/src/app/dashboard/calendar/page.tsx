"use client";

import { useState } from "react";
import Link from "next/link";

export default function CalendarPage() {
  const [currentMonth] = useState("November 2025");

  const deadlines = [
    { date: "18 Nov 2025", title: "PMRF 2025 Registration Closes", type: "Scholarship", org: "Ministry of Education" },
    { date: "25 Nov 2025", title: "TCS Smart Hiring Registration End", type: "Private Job", org: "TCS" },
    { date: "28 Oct 2025", title: "ISRO Scientist 'SC' Last Date", type: "Govt Job", org: "ISRO" },
    { date: "30 Nov 2025", title: "NATS 2.0 Apprenticeship Enrollment", type: "Internship", org: "Board of Practical Training" },
    { date: "15 Dec 2025", title: "Anuprati Free Coaching Portal Closes", type: "Scheme", org: "Govt. of Rajasthan" },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
            Schedule &amp; Milestones
          </span>
          <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
            Opportunity Deadline Calendar
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Track application cutoff dates, verification windows, and examination schedules.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50">
            ← Prev
          </button>
          <span className="text-xs font-bold text-slate-900 px-2">{currentMonth}</span>
          <button className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50">
            Next →
          </button>
        </div>
      </div>

      {/* Deadlines timeline list */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-card space-y-6">
        <h2 className="font-sora text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 flex items-center justify-between">
          <span>Upcoming National Milestones</span>
          <span className="text-xs font-normal text-slate-500">Auto-synced with gazette feeds</span>
        </h2>

        <div className="space-y-4">
          {deadlines.map((d, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#0F3832] text-white text-center min-w-[70px]">
                  <span className="block text-[10px] uppercase font-bold text-[#D97706]">
                    {d.date.split(" ")[1]}
                  </span>
                  <span className="font-sora text-lg font-extrabold leading-none">
                    {d.date.split(" ")[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-sora text-sm font-semibold text-slate-900">{d.title}</h4>
                  <span className="text-xs text-slate-500">{d.org}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#E8F1EE] text-[#0F3832] text-xs font-semibold">
                  {d.type}
                </span>
                <Link
                  href="/explore"
                  className="text-xs font-semibold text-[#0F3832] hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
