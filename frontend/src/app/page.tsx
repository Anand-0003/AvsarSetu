"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { OpportunityCard } from "../components/opportunity/OpportunityCard";
import { MOCK_OPPORTUNITIES, MOCK_CATEGORIES, INDIAN_STATES } from "../data/mockData";

export default function HomePage() {
  const [activeSearchTab, setActiveSearchTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [activeCuratedTab, setActiveCuratedTab] = useState("all");
  const [savedIds, setSavedIds] = useState<string[]>(["pmrf-2025"]);

  const handleSaveToggle = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredOpportunities = MOCK_OPPORTUNITIES.filter((opp) => {
    if (activeCuratedTab === "closing") return opp.isClosingSoon;
    if (activeCuratedTab === "high") return opp.category === "scholarship" || opp.category === "govt_job";
    if (activeCuratedTab === "youth") return opp.category === "internship" || opp.category === "course";
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2. HERO SECTION */}
        <section className="w-full bg-[#FBFBFA] border-b border-[#D5E4E0]/60 pt-10 pb-16 lg:pt-16 lg:pb-24">
          <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Hero Left Content */}
              <div className="lg:col-span-7 flex flex-col items-start space-y-6">
                
                {/* Sovereign Trust Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D5E4E0] bg-white text-[#0F3832] shadow-subtle">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="text-xs font-semibold tracking-wide text-[#0F3832] uppercase">
                    Official Citizen Gateway
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-medium text-slate-600">
                    Verified Indian Opportunities
                  </span>
                </div>

                {/* Headline */}
                <h1 className="font-sora text-3xl sm:text-4xl lg:text-[46px] font-bold text-slate-900 tracking-tight leading-[1.2]">
                  Every Opportunity for Your{" "}
                  <span className="text-[#D97706] font-extrabold underline decoration-[#D97706]/40 decoration-wavy underline-offset-8">
                    Growth
                  </span>
                  . All in One Trusted Place.
                </h1>

                {/* Subhead */}
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                  Seamlessly search central &amp; state schemes, scholarships, public jobs, and free certified learning programs with gazette-backed authenticity.
                </p>

                {/* Search Bar Dock with Interactive Tabs */}
                <div className="w-full bg-white border border-[#D5E4E0] rounded-2xl p-2.5 shadow-dock mt-2">
                  {/* Tabs Navigation */}
                  <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-slate-100 text-xs font-semibold">
                    {[
                      { id: "all", label: "All Categories" },
                      { id: "scholarships", label: "Scholarships" },
                      { id: "schemes", label: "Govt Schemes" },
                      { id: "jobs", label: "Govt Jobs" },
                      { id: "courses", label: "Free Courses" },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveSearchTab(tab.id)}
                        className={`px-3 py-1.5 rounded-lg shrink-0 transition-colors cursor-pointer ${
                          activeSearchTab === tab.id
                            ? "bg-[#0F3832] text-white shadow-xs"
                            : "text-slate-600 hover:text-[#0F3832] hover:bg-slate-50"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Input Row */}
                  <form
                    action="/explore"
                    method="GET"
                    className="flex flex-col md:flex-row items-stretch md:items-center gap-2 pt-2.5"
                  >
                    {/* Search Input Field */}
                    <div className="flex-1 flex items-center px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
                      <span className="material-symbols-outlined text-slate-400 text-[20px] mr-2.5">
                        search
                      </span>
                      <input
                        name="q"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-0 p-0 text-slate-800 placeholder-slate-400 text-sm focus:ring-0 focus:outline-none"
                        placeholder="Search by scheme name, degree, caste, or skill..."
                        type="text"
                      />
                    </div>

                    {/* State Selector Dropdown */}
                    <div className="flex items-center px-3 py-2 border-b md:border-b-0 md:border-r border-slate-200">
                      <span className="material-symbols-outlined text-slate-400 text-[18px] mr-2">
                        location_on
                      </span>
                      <select
                        name="state"
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="bg-transparent border-0 p-0 pr-6 text-xs sm:text-sm font-medium text-slate-700 focus:ring-0 focus:outline-none cursor-pointer"
                      >
                        {INDIAN_STATES.map((st) => (
                          <option key={st} value={st === "All India (Central)" ? "" : st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Action Button */}
                    <button
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F3832] hover:bg-[#14493F] text-white font-semibold text-sm transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                      type="submit"
                    >
                      <span>Search</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </form>
                </div>

                {/* Quick Search Pills */}
                <div className="text-xs text-slate-600 flex flex-wrap items-center gap-2 pt-1">
                  <span className="font-semibold text-slate-800">Quick Searches:</span>
                  {[
                    "UPSC 2025",
                    "Post-Matric",
                    "PMKVY 4.0",
                    "AICTE Internships",
                    "National Apprenticeship",
                  ].map((item) => (
                    <Link
                      key={item}
                      href={`/explore?q=${encodeURIComponent(item)}`}
                      className="px-2.5 py-1 rounded-full bg-[#E8F1EE] text-[#0A2824] font-medium border border-[#D5E4E0]/80 hover:bg-[#E8F1EE]/80 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>

                {/* Hero Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="#categories"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0F3832] hover:bg-[#14493F] text-white text-sm font-semibold shadow-sm transition-all active:scale-[0.98]"
                  >
                    Explore Catalog
                  </Link>
                  <Link
                    href="/eligibility"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-lg bg-white border border-[#D5E4E0] text-slate-700 hover:bg-slate-50 text-sm font-semibold shadow-subtle transition-all active:scale-[0.98]"
                  >
                    <span>Check Eligibility in 60s</span>
                    <span className="material-symbols-outlined text-[18px] text-slate-400">chevron_right</span>
                  </Link>
                </div>
              </div>

              {/* Hero Right Preview: Live Verification Index Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow">
                  {/* Top Live Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                      <span className="text-xs font-bold tracking-wide uppercase text-[#0F3832] font-sora">
                        Live Verification Index
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E8F1EE] text-[#0A2824] text-xs font-bold border border-[#D5E4E0]">
                      9,480+ Live Verified
                    </span>
                  </div>

                  {/* Card Preview 1: High Fellowship */}
                  <Link
                    href="/opportunities/pm-research-fellowship-pmrf-2025"
                    className="block bg-[#FBFBFA] border border-[#D5E4E0]/70 rounded-xl p-4 mb-3 hover:border-[#0F3832]/40 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                          Ministry of Education
                        </span>
                        <h4 className="font-sora text-sm font-semibold text-slate-900 leading-snug">
                          PM Research Fellowship (PMRF)
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100/70 text-emerald-800 text-[10px] font-bold shrink-0 border border-emerald-200">
                        100% Verified
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                      <span className="font-semibold text-[#0F3832]">₹70,000 – ₹80,000 / mo</span>
                      <span className="text-[#D97706] font-medium">Closes 18 Nov</span>
                    </div>
                  </Link>

                  {/* Card Preview 2: Apprenticeship */}
                  <Link
                    href="/opportunities/national-apprenticeship-training-scheme-nats"
                    className="block bg-[#FBFBFA] border border-[#D5E4E0]/70 rounded-xl p-4 mb-4 hover:border-[#0F3832]/40 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">
                          Board of Practical Training
                        </span>
                        <h4 className="font-sora text-sm font-semibold text-slate-900 leading-snug">
                          National Apprenticeship (NATS)
                        </h4>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-100/70 text-emerald-800 text-[10px] font-bold shrink-0 border border-emerald-200">
                        Direct DBT
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-200/60">
                      <span className="font-semibold text-[#0F3832]">Stipend Support + Certificate</span>
                      <span>Pan India</span>
                    </div>
                  </Link>

                  {/* Quick 2-Click Eligibility Calculator Preview */}
                  <div className="p-4 rounded-xl bg-[#E8F1EE]/40 border border-[#D5E4E0]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#0F3832]">
                        Instant Eligibility Estimator
                      </span>
                      <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-[#D5E4E0] font-medium text-slate-600">
                        Step 1 of 2
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white p-2 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-400 block font-medium">Your Education</span>
                        <span className="font-semibold text-slate-800">Undergraduate / Diploma</span>
                      </div>
                      <div className="bg-white p-2 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-400 block font-medium">Eligible Matches</span>
                        <span className="font-bold text-[#0F3832]">148 Programs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. OPPORTUNITY CATEGORY GRID */}
        <section className="w-full bg-white py-20 border-b border-[#D5E4E0]/60" id="categories">
          <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1.5 font-sora">
                  Catalog Directory
                </span>
                <h2 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
                  Explore Opportunity Segments
                </h2>
                <p className="text-sm text-slate-600 mt-2">
                  Every program categorized, verified, and mapped for citizen growth.
                </p>
              </div>
              <Link
                href="/explore"
                className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F3832] hover:text-[#14493F] group transition-colors"
              >
                <span>View All Segments</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>

            {/* 6 Clean Spacious Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[#FBFBFA] hover:bg-white border border-[#D5E4E0] hover:border-[#0F3832]/40 rounded-xl p-6 shadow-subtle hover:shadow-card-hover transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#E8F1EE] text-[#0F3832] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform border border-[#D5E4E0]">
                      <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-sora text-base font-semibold text-slate-900">{cat.name}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                        {cat.count}+ Available
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {cat.desc}
                    </p>
                  </div>
                  <Link
                    href={`/explore?category=${cat.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F3832] group-hover:text-[#D97706] transition-colors"
                  >
                    <span>Explore opportunities</span>
                    <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CURATED OPPORTUNITIES SECTION */}
        <section className="w-full bg-[#FBFBFA] py-20 border-b border-[#D5E4E0]/60">
          <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
            {/* Section Header with Filter Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1.5 font-sora">
                  Curated Feed
                </span>
                <h2 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
                  Opportunities Worth Exploring
                </h2>
                <p className="text-sm text-slate-600 mt-1.5">
                  Hand-verified sovereign opportunities with approaching deadlines.
                </p>
              </div>

              {/* Clean Filter Tabs */}
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#D5E4E0] shadow-subtle overflow-x-auto">
                {[
                  { id: "all", label: "Most Popular" },
                  { id: "closing", label: "Closing Soon" },
                  { id: "high", label: "High Fellowship" },
                  { id: "youth", label: "Students & Youth" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCuratedTab(tab.id)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeCuratedTab === tab.id
                        ? "bg-[#0F3832] text-white"
                        : "text-slate-600 hover:text-[#0F3832] hover:bg-slate-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Opportunities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map((opp) => (
                <OpportunityCard
                  key={opp.id}
                  opportunity={opp}
                  onSaveToggle={handleSaveToggle}
                  isSaved={savedIds.includes(opp.id)}
                />
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-12 text-center">
              <Link
                href="/explore"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-[#D5E4E0] hover:border-[#0F3832] text-slate-800 hover:text-[#0F3832] font-semibold text-sm shadow-subtle transition-all"
              >
                <span>Browse All 9,480+ Indian Opportunities</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 5. ELIGIBILITY ENGINE CALLOUT */}
        <section className="w-full bg-[#0F3832] text-white py-20 border-b border-[#0A2824]">
          <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#D5E4E0] text-xs font-semibold tracking-wide uppercase border border-white/10">
                  Deterministic Rule-Based Matching
                </span>
                <h2 className="font-sora text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
                  Never miss an opportunity you were eligible for.
                </h2>
                <p className="text-[#D5E4E0] text-base max-w-2xl leading-relaxed">
                  Our smart eligibility checker matches your educational qualification, age, domicile state, and income against thousands of verified scheme criteria in 60 seconds.
                </p>
                <div className="flex flex-wrap gap-6 pt-3 text-sm text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-[#D97706] font-bold">✓</span>
                    <span>No registration required for guest check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D97706] font-bold">✓</span>
                    <span>Zero spam or document storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#D97706] font-bold">✓</span>
                    <span>Criteria-wise pass / fail breakdown</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <Link
                  href="/eligibility"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-slate-950 font-bold text-base shadow-lg transition-transform active:scale-[0.98]"
                >
                  <span>Launch Eligibility Checker</span>
                  <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                </Link>
                <span className="text-xs text-slate-300 mt-2 text-center lg:text-right">
                  Free · Instant Results · Explainable Matching
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
