"use client";

import Link from "next/link";
import { MOCK_USER, MOCK_OPPORTUNITIES, MOCK_APPLICATIONS } from "../../data/mockData";
import { OpportunityCard } from "../../components/opportunity/OpportunityCard";

export default function DashboardOverviewPage() {
  const recommendedOpps = MOCK_OPPORTUNITIES.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
            Citizen Dashboard
          </span>
          <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
            Namaste, {MOCK_USER.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            {MOCK_USER.educationLevel} ({MOCK_USER.course}) · Domicile: {MOCK_USER.state} ({MOCK_USER.district})
          </p>
        </div>

        <Link
          href="/eligibility"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F] transition-all"
        >
          <span className="material-symbols-outlined text-[16px]">tune</span>
          <span>Run Eligibility Check</span>
        </Link>
      </div>

      {/* Stats Counter Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#D5E4E0] shadow-subtle">
          <span className="text-xs text-slate-500 font-medium block mb-1">Matching Schemes</span>
          <span className="font-sora text-2xl font-bold text-[#0F3832]">14</span>
          <span className="text-[11px] text-emerald-700 block mt-1">Based on BCA &amp; RJ</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-[#D5E4E0] shadow-subtle">
          <span className="text-xs text-slate-500 font-medium block mb-1">Active Applications</span>
          <span className="font-sora text-2xl font-bold text-[#D97706]">
            {MOCK_APPLICATIONS.length}
          </span>
          <span className="text-[11px] text-slate-500 block mt-1">1 Applied · 2 In Prep</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-[#D5E4E0] shadow-subtle">
          <span className="text-xs text-slate-500 font-medium block mb-1">Bookmarked Items</span>
          <span className="font-sora text-2xl font-bold text-slate-800">5</span>
          <span className="text-[11px] text-slate-500 block mt-1">1 Closing Soon</span>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-[#D5E4E0] shadow-subtle">
          <span className="text-xs text-slate-500 font-medium block mb-1">Family Profiles</span>
          <span className="font-sora text-2xl font-bold text-slate-800">4</span>
          <span className="text-[11px] text-[#0F3832] block mt-1">Parents &amp; Sibling</span>
        </div>
      </div>

      {/* Active Application Tracker Widget */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-subtle">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#0F3832]">assignment</span>
            <h2 className="font-sora text-base font-bold text-slate-900">
              Application Tracker Overview
            </h2>
          </div>
          <Link
            href="/dashboard/applications"
            className="text-xs font-semibold text-[#0F3832] hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {MOCK_APPLICATIONS.map((app) => (
            <div key={app.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-sora text-sm font-semibold text-slate-900">
                  {app.opportunityTitle}
                </h4>
                <span className="text-xs text-slate-500">
                  {app.organization} · Deadline: {app.deadline}
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold self-start sm:self-auto ${
                  app.status === "Applied"
                    ? "bg-emerald-100 text-emerald-800"
                    : app.status === "Preparing Documents"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Personalized Recommendations Feed */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="font-sora text-lg font-bold text-slate-900">
              Recommended for Your Profile
            </h2>
            <p className="text-xs text-slate-500">
              Matched against your education: BCA, Age: 22, and Rajasthan domicile.
            </p>
          </div>
          <Link
            href="/explore"
            className="text-xs font-semibold text-[#0F3832] hover:underline"
          >
            Explore Catalog →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendedOpps.map((opp) => (
            <OpportunityCard key={opp.id} opportunity={opp} />
          ))}
        </div>
      </div>
    </div>
  );
}
