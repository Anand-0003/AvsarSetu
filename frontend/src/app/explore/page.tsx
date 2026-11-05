"use client";

import { useState, useMemo } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { OpportunityCard } from "../../components/opportunity/OpportunityCard";
import { MOCK_OPPORTUNITIES, INDIAN_STATES } from "../../data/mockData";

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedState, setSelectedState] = useState<string>("all");
  const [selectedEducation, setSelectedEducation] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [savedIds, setSavedIds] = useState<string[]>(["pmrf-2025"]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleSaveToggle = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredOpportunities = useMemo(() => {
    return MOCK_OPPORTUNITIES.filter((opp) => {
      // Search term
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesTitle = opp.title.toLowerCase().includes(query);
        const matchesOrg = opp.organization.toLowerCase().includes(query);
        const matchesDesc = opp.shortDescription.toLowerCase().includes(query);
        const matchesTags = opp.tags.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesOrg && !matchesDesc && !matchesTags) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== "all" && opp.category !== selectedCategory) {
        return false;
      }

      // State
      if (selectedState !== "all") {
        if (selectedState === "Central") {
          if (opp.state !== "Central" && opp.locationScope !== "All India") return false;
        } else if (opp.state && opp.state !== selectedState && opp.locationScope !== "All India") {
          return false;
        }
      }

      // Education
      if (selectedEducation !== "all") {
        const hasLevel = opp.educationLevel.some((lvl) =>
          lvl.toLowerCase().includes(selectedEducation.toLowerCase())
        );
        if (!hasLevel && !opp.educationLevel.includes("Any")) return false;
      }

      // Verification Status
      if (selectedStatus !== "all" && opp.verificationStatus !== selectedStatus) {
        return false;
      }

      return true;
    });
  }, [search, selectedCategory, selectedState, selectedEducation, selectedStatus]);

  const clearAllFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedState("all");
    setSelectedEducation("all");
    setSelectedStatus("all");
  };

  const hasActiveFilters =
    search !== "" ||
    selectedCategory !== "all" ||
    selectedState !== "all" ||
    selectedEducation !== "all" ||
    selectedStatus !== "all";

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-8 md:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              National Opportunity Index
            </span>
            <h1 className="font-sora text-3xl font-bold text-slate-900">
              Explore All Opportunities
            </h1>
            <p className="text-sm text-slate-600 mt-1.5">
              Filtered search across verified central &amp; state government schemes, grants, recruitment, and learning pathways.
            </p>
          </div>

          {/* Mobile Filter Toggle Button Bar */}
          <div className="lg:hidden mb-6 flex items-center justify-between gap-3 bg-white border border-[#D5E4E0] p-3.5 rounded-xl shadow-subtle">
            <button
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
              type="button"
              className="flex items-center gap-2 font-sora font-semibold text-xs text-[#0F3832] bg-[#E8F1EE] hover:bg-[#D5E4E0] px-3.5 py-2 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">
                {mobileFiltersOpen ? "expand_less" : "tune"}
              </span>
              <span>{mobileFiltersOpen ? "Hide Filter Options" : "Filter Criteria"}</span>
              {hasActiveFilters && (
                <span className="ml-1 w-5 h-5 rounded-full bg-[#D97706] text-white text-[10px] font-bold flex items-center justify-center">
                  !
                </span>
              )}
            </button>
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="text-xs font-semibold text-[#D97706] hover:underline cursor-pointer"
              >
                Reset All
              </button>
            )}
          </div>

          {/* 4:8 Layout Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Filter Rail (4 cols) */}
            <aside
              className={`bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-subtle lg:col-span-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto ${
                mobileFiltersOpen ? "block" : "hidden lg:block"
              }`}
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-[#0F3832]">tune</span>
                  <h3 className="font-sora font-semibold text-slate-900 text-sm">Filter Criteria</h3>
                </div>
                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="text-xs font-semibold text-[#D97706] hover:underline cursor-pointer"
                  >
                    Reset All
                  </button>
                )}
              </div>

              {/* Filter controls */}
              <div className="space-y-5 text-sm">
                {/* Search input */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Search Keywords
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[18px]">
                      search
                    </span>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="e.g. UPSC, Fellowship, IT..."
                      className="w-full pl-9 pr-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                    />
                  </div>
                </div>

                {/* Category select */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Opportunity Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
                  >
                    <option value="all">All Categories</option>
                    <option value="scheme">Government Schemes</option>
                    <option value="scholarship">Scholarships &amp; Grants</option>
                    <option value="govt_job">Government Jobs</option>
                    <option value="private_job">Private Careers</option>
                    <option value="internship">Internships &amp; Apprenticeships</option>
                    <option value="course">Free Courses &amp; Certifications</option>
                  </select>
                </div>

                {/* State / Geography */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    State / Jurisdiction
                  </label>
                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
                  >
                    <option value="all">All India (Any State)</option>
                    <option value="Central">Central Govt Schemes Only</option>
                    {INDIAN_STATES.filter((s) => s !== "All India (Central)").map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Education Level */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Education Level
                  </label>
                  <select
                    value={selectedEducation}
                    onChange={(e) => setSelectedEducation(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
                  >
                    <option value="all">All Education Levels</option>
                    <option value="10th">10th Pass</option>
                    <option value="12th">12th Pass</option>
                    <option value="Undergraduate">Undergraduate / College</option>
                    <option value="Graduate">Graduate / Degree Holder</option>
                    <option value="Postgraduate">Postgraduate / Research</option>
                  </select>
                </div>

                {/* Verification Status */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Verification Standard
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full px-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-800 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
                  >
                    <option value="all">All Verified Listings</option>
                    <option value="Official Source Verified">Official Source Verified</option>
                    <option value="Source Confirmed">Source Confirmed</option>
                  </select>
                </div>
              </div>
            </aside>

            {/* Right Result Feed (8 cols) */}
            <section className="lg:col-span-8 space-y-6">
              {/* Results status bar */}
              <div className="flex items-center justify-between bg-white px-5 py-3.5 rounded-xl border border-[#D5E4E0] shadow-subtle">
                <span className="text-xs sm:text-sm font-medium text-slate-700">
                  Showing <strong className="text-[#0F3832]">{filteredOpportunities.length}</strong> matching verified opportunities
                </span>
                <span className="text-xs text-slate-500 hidden sm:inline">
                  Updated Live from Official Portals
                </span>
              </div>

              {/* Opportunities grid */}
              {filteredOpportunities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredOpportunities.map((opp) => (
                    <OpportunityCard
                      key={opp.id}
                      opportunity={opp}
                      onSaveToggle={handleSaveToggle}
                      isSaved={savedIds.includes(opp.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-[#D5E4E0] rounded-2xl p-12 text-center shadow-subtle">
                  <span className="material-symbols-outlined text-[48px] text-slate-300 mb-3">
                    search_off
                  </span>
                  <h4 className="font-sora text-base font-semibold text-slate-800 mb-1">
                    No matching opportunities found
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mb-5">
                    Try broadening your search keywords or clearing state and education filters.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-4 py-2 rounded-lg bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F] transition-all cursor-pointer"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
