"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_APPLICATIONS } from "../../../data/mockData";
import { ApplicationTrackerItem } from "../../../types";

export default function ApplicationTrackerPage() {
  const [applications, setApplications] = useState<ApplicationTrackerItem[]>(MOCK_APPLICATIONS);

  const updateStatus = (id: string, newStatus: ApplicationTrackerItem["status"]) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
          Preparation &amp; Submission Pipeline
        </span>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
          Application Tracker
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Monitor your preparation stages, required document checklists, and submission receipts in one place.
        </p>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500 uppercase">
                  {app.organization}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-[#D97706] font-semibold">
                  Deadline: {app.deadline}
                </span>
              </div>

              <h3 className="font-sora text-base font-bold text-slate-900">
                {app.opportunityTitle}
              </h3>

              <p className="text-xs text-slate-600 bg-[#FBFBFA] p-3 rounded-lg border border-slate-100">
                <strong className="text-slate-700">Notes: </strong>{app.notes}
              </p>
            </div>

            {/* Status Control & Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
              <div className="flex flex-col">
                <label className="text-[10px] font-semibold uppercase text-slate-400 mb-1">
                  Change Status
                </label>
                <select
                  value={app.status}
                  onChange={(e) => updateStatus(app.id, e.target.value as ApplicationTrackerItem["status"])}
                  className="px-3 py-1.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F3832] cursor-pointer"
                >
                  <option value="Interested">Interested</option>
                  <option value="Eligibility Checked">Eligibility Checked</option>
                  <option value="Preparing Documents">Preparing Documents</option>
                  <option value="Ready to Apply">Ready to Apply</option>
                  <option value="Applied">Applied</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div className="pt-3 sm:pt-4">
                <Link
                  href={`/opportunities/${app.opportunityId}`}
                  className="inline-block px-4 py-2 bg-[#0F3832] hover:bg-[#14493F] text-white rounded-lg text-xs font-semibold transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
