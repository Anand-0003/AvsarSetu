"use client";

import Link from "next/link";
import { Opportunity } from "../../types";

interface OpportunityCardProps {
  opportunity: Opportunity;
  onSaveToggle?: (id: string) => void;
  isSaved?: boolean;
}

export function OpportunityCard({ opportunity, onSaveToggle, isSaved }: OpportunityCardProps) {
  return (
    <div className="bg-white border border-[#D5E4E0] hover:border-[#0F3832]/50 rounded-xl p-6 shadow-subtle hover:shadow-cardHover transition-all flex flex-col justify-between group">
      <div>
        {/* Top meta row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider truncate">
            {opportunity.organization}
          </span>
          
          {opportunity.verificationStatus === "Official Source Verified" ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-semibold border border-emerald-200 shrink-0">
              <span className="material-symbols-outlined text-[12px] text-emerald-600">verified</span>
              Official Verified
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-semibold border border-amber-200 shrink-0">
              <span className="material-symbols-outlined text-[12px] text-amber-600">check_circle</span>
              {opportunity.verificationStatus}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-sora text-base font-semibold text-slate-900 mb-2 leading-snug group-hover:text-[#0F3832] transition-colors">
          <Link href={`/opportunities/${opportunity.slug}`}>
            {opportunity.title}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-xs text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {opportunity.shortDescription}
        </p>

        {/* Key Info Pill Box */}
        <div className="space-y-1.5 mb-5 text-xs text-slate-800 bg-[#FBFBFA] p-3 rounded-lg border border-slate-100">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Benefit / Grant:</span>
            <span className="font-bold text-[#0F3832] truncate max-w-[65%] text-right">
              {opportunity.benefits}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium">Scope:</span>
            <span className="font-medium text-slate-700">
              {opportunity.state ? `${opportunity.state} · ` : ""}{opportunity.locationScope}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="block text-[10px] uppercase font-bold text-[#D97706]">Deadline</span>
          <span className="text-xs font-semibold text-slate-800">{opportunity.deadline}</span>
        </div>

        <div className="flex items-center gap-2">
          {onSaveToggle && (
            <button
              onClick={() => onSaveToggle(opportunity.id)}
              className={`p-2 rounded-lg border transition-all ${
                isSaved
                  ? "bg-[#E8F1EE] text-[#0F3832] border-[#D5E4E0]"
                  : "bg-white text-slate-400 hover:text-[#0F3832] border-slate-200"
              }`}
              title={isSaved ? "Remove from saved" : "Save opportunity"}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isSaved ? "bookmark" : "bookmark_border"}
              </span>
            </button>
          )}

          <Link
            href={`/opportunities/${opportunity.slug}`}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0F3832] hover:bg-[#14493F] text-white text-xs font-semibold shadow-xs transition-all active:scale-[0.98]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

