"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_OPPORTUNITIES, MOCK_SAVED_SEARCHES } from "../../../data/mockData";
import { OpportunityCard } from "../../../components/opportunity/OpportunityCard";

export default function SavedItemsPage() {
  const [savedIds, setSavedIds] = useState<string[]>([
    "pmrf-2025",
    "rajasthan-anuprati",
    "nats-2025",
  ]);

  const [savedSearches, setSavedSearches] = useState(MOCK_SAVED_SEARCHES);

  const handleSaveToggle = (id: string) => {
    setSavedIds((prev) => prev.filter((item) => item !== id));
  };

  const removeSearch = (id: string) => {
    setSavedSearches((prev) => prev.filter((s) => s.id !== id));
  };

  const savedOpps = MOCK_OPPORTUNITIES.filter((opp) => savedIds.includes(opp.id));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
          Personal Bookmarks
        </span>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
          Saved Opportunities &amp; Searches
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Review saved schemes and quick filter preferences for persistent notifications.
        </p>
      </div>

      {/* Saved Searches Section */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-subtle">
        <h2 className="font-sora text-base font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
          <span>Saved Search Filters ({savedSearches.length})</span>
          <span className="text-xs font-normal text-slate-500">Live matching alerts enabled</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {savedSearches.map((s) => (
            <div
              key={s.id}
              className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-200 flex items-center justify-between"
            >
              <div>
                <h4 className="font-sora text-sm font-semibold text-slate-900">{s.title}</h4>
                <span className="text-xs text-slate-500">
                  {s.matchingCount} new matches · Saved on {s.dateSaved}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/explore?q=${encodeURIComponent(s.query)}`}
                  className="px-3 py-1 bg-[#0F3832] text-white rounded-lg text-xs font-semibold hover:bg-[#14493F]"
                >
                  Apply
                </Link>
                <button
                  onClick={() => removeSearch(s.id)}
                  className="text-slate-400 hover:text-red-600 p-1 cursor-pointer"
                  title="Remove search"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved Opportunities List */}
      <div className="space-y-4">
        <h2 className="font-sora text-lg font-bold text-slate-900">
          Saved Opportunities ({savedOpps.length})
        </h2>

        {savedOpps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {savedOpps.map((opp) => (
              <OpportunityCard
                key={opp.id}
                opportunity={opp}
                onSaveToggle={handleSaveToggle}
                isSaved={true}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-12 text-center">
            <p className="text-sm text-slate-500 mb-4">You have no saved opportunities currently.</p>
            <Link
              href="/explore"
              className="px-5 py-2.5 bg-[#0F3832] text-white rounded-xl text-xs font-semibold"
            >
              Explore Opportunities to Save
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

