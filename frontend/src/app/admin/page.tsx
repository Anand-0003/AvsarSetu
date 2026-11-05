"use client";

import Link from "next/link";
import { MOCK_ADMIN_STATS, MOCK_OPPORTUNITIES } from "../../data/mockData";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Overview Title Banner */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
            Centralized Platform Intelligence
          </span>
          <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
            AvsarSetu Super Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Real-time telemetry across opportunities, verification queues, and citizen engagement metrics.
          </p>
        </div>

        <Link
          href="/admin/opportunities"
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F] transition-all shrink-0"
        >
          <span className="material-symbols-outlined text-[16px]">add_circle</span>
          <span>Add Opportunity</span>
        </Link>
      </div>

      {/* Primary KPI Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#D5E4E0] shadow-subtle">
          <span className="text-xs text-slate-500 font-medium block mb-1">Total Registered Citizens</span>
          <span className="font-sora text-2xl font-bold text-[#0F3832]">
            {MOCK_ADMIN_STATS.totalUsers}
          </span>
          <span className="text-[11px] text-emerald-700 block mt-1">+1,240 this week</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#D5E4E0] shadow-subtle">
          <span className="text-xs text-slate-500 font-medium block mb-1">Active Opportunities</span>
          <span className="font-sora text-2xl font-bold text-slate-900">
            {MOCK_ADMIN_STATS.activeOpportunities}
          </span>
          <span className="text-[11px] text-[#0F3832] block mt-1">Across 28 States + 8 UTs</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#D5E4E0] shadow-subtle">
          <span className="text-xs text-slate-500 font-medium block mb-1">Pending Gazette Verification</span>
          <span className="font-sora text-2xl font-bold text-[#D97706]">
            {MOCK_ADMIN_STATS.pendingVerification}
          </span>
          <span className="text-[11px] text-amber-700 block mt-1">Review required</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#D5E4E0] shadow-subtle">
          <span className="text-xs text-slate-500 font-medium block mb-1">Reported Listings</span>
          <span className="font-sora text-2xl font-bold text-red-600">
            {MOCK_ADMIN_STATS.reportedIssues}
          </span>
          <span className="text-[11px] text-slate-500 block mt-1">Citizen feedback triage</span>
        </div>
      </div>

      {/* Category Breakdown Matrix */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-card">
        <h2 className="font-sora text-base font-bold text-slate-900 pb-3 border-b border-slate-100 mb-6 flex items-center justify-between">
          <span>Opportunity Distribution by Segment</span>
          <span className="text-xs font-normal text-slate-500">Live Database Breakdown</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {MOCK_ADMIN_STATS.categoriesBreakdown.map((cat) => (
            <div key={cat.name} className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-200">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block truncate">
                {cat.name}
              </span>
              <span className="font-sora text-xl font-bold text-slate-900 block mt-1">
                {cat.count}
              </span>
              <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(cat.count / 3500) * 100}%`,
                    backgroundColor: cat.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Verification Queue Preview */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-card">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-6">
          <div>
            <h2 className="font-sora text-base font-bold text-slate-900">
              Verification Priority Queue
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Newly detected scheme updates awaiting official gazette confirmation.
            </p>
          </div>
          <Link
            href="/admin/verification"
            className="text-xs font-semibold text-[#0F3832] hover:underline"
          >
            Open Verification Center →
          </Link>
        </div>

        <div className="divide-y divide-slate-100">
          {MOCK_OPPORTUNITIES.slice(0, 4).map((opp) => (
            <div key={opp.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="font-sora text-sm font-semibold text-slate-900">{opp.title}</h4>
                <span className="text-xs text-slate-500">
                  {opp.organization} · Category: {opp.categoryLabel}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                  {opp.verificationStatus}
                </span>
                <Link
                  href="/admin/verification"
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Inspect
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

