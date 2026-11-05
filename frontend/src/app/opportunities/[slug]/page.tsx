"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { MOCK_OPPORTUNITIES } from "../../../data/mockData";

export default function OpportunityDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = use(params);
  const opportunity = MOCK_OPPORTUNITIES.find((opp) => opp.slug === resolvedParams.slug);

  const [isSaved, setIsSaved] = useState(false);

  if (!opportunity) {
    return notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-8 md:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1200px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#0F3832]">Home</Link>
            <span>/</span>
            <Link href="/explore" className="hover:text-[#0F3832]">Opportunities</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-md">
              {opportunity.title}
            </span>
          </nav>

          {/* Main Card Header */}
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-card mb-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {opportunity.organization}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                    <span className="material-symbols-outlined text-[14px] text-emerald-600">verified</span>
                    {opportunity.verificationStatus}
                  </span>
                  {opportunity.isClosingSoon && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[#D97706] text-xs font-semibold border border-amber-200">
                      Closing Soon
                    </span>
                  )}
                </div>

                <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                  {opportunity.title}
                </h1>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    isSaved
                      ? "bg-[#E8F1EE] text-[#0F3832] border-[#D5E4E0]"
                      : "bg-white text-slate-700 hover:bg-slate-50 border-slate-200"
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {isSaved ? "bookmark" : "bookmark_border"}
                  </span>
                  <span>{isSaved ? "Saved" : "Save Opportunity"}</span>
                </button>

                <a
                  href={opportunity.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#0F3832] hover:bg-[#14493F] text-white text-xs font-semibold shadow-sm transition-all active:scale-[0.98]"
                >
                  <span>Apply on Official Portal</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                  Financial Benefit / Grant
                </span>
                <span className="font-sora text-sm sm:text-base font-bold text-[#0F3832]">
                  {opportunity.benefits}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                  Application Deadline
                </span>
                <span className="font-sora text-sm sm:text-base font-bold text-[#D97706]">
                  {opportunity.deadline}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                  Eligible Education
                </span>
                <span className="font-sora text-sm sm:text-base font-bold text-slate-800">
                  {opportunity.educationLevel.join(", ")}
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                  Geographic Scope
                </span>
                <span className="font-sora text-sm sm:text-base font-bold text-slate-800">
                  {opportunity.state ? `${opportunity.state} (` : ""}{opportunity.locationScope}{opportunity.state ? ")" : ""}
                </span>
              </div>
            </div>
          </div>

          {/* Details Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Detailed Description */}
              <section className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-subtle">
                <h2 className="font-sora text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  Opportunity Overview &amp; Objective
                </h2>
                <div className="prose text-sm text-slate-600 leading-relaxed space-y-3">
                  <p>{opportunity.fullDescription || opportunity.shortDescription}</p>
                  <p>
                    All notifications and grant distributions are backed by gazetted guidelines issued by {opportunity.organization}. Eligible beneficiaries can submit direct claims without third-party commission.
                  </p>
                </div>
              </section>

              {/* Eligibility Criteria Breakdown */}
              <section className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-subtle">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
                  <h2 className="font-sora text-lg font-bold text-slate-900">
                    Eligibility Criteria Matrix
                  </h2>
                  <Link
                    href={`/eligibility?opp=${opportunity.id}`}
                    className="text-xs font-semibold text-[#0F3832] hover:text-[#D97706] flex items-center gap-1"
                  >
                    <span>Check with your profile</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFBFA] border border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <strong className="text-slate-900 block">Education Qualification</strong>
                      <span className="text-xs text-slate-600">
                        Candidate must be pursuing or completed: {opportunity.educationLevel.join(" / ")}.
                      </span>
                    </div>
                  </div>

                  {opportunity.minAge && (
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFBFA] border border-slate-100">
                      <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Age Restrictions</strong>
                        <span className="text-xs text-slate-600">
                          Between {opportunity.minAge} and {opportunity.maxAge} years as on deadline date.
                        </span>
                      </div>
                    </div>
                  )}

                  {opportunity.incomeLimit && (
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFBFA] border border-slate-100">
                      <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5">
                        check_circle
                      </span>
                      <div>
                        <strong className="text-slate-900 block">Annual Income Ceiling</strong>
                        <span className="text-xs text-slate-600">
                          Total annual family income must not exceed ₹{(opportunity.incomeLimit / 100000).toFixed(1)} Lakh from all sources.
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-[#FBFBFA] border border-slate-100">
                    <span className="material-symbols-outlined text-emerald-600 text-[20px] mt-0.5">
                      check_circle
                    </span>
                    <div>
                      <strong className="text-slate-900 block">Gender &amp; Domicile</strong>
                      <span className="text-xs text-slate-600">
                        {opportunity.gender || "All citizens"} eligible. Scope: {opportunity.state || "Pan India"}.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Documents Required Checklist */}
              <section className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-subtle">
                <h2 className="font-sora text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  Required Application Documents
                </h2>
                <ul className="space-y-3">
                  {opportunity.documentsRequired.map((doc, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#FBFBFA] border border-slate-100 text-xs sm:text-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 text-[18px]">
                          description
                        </span>
                        <span className="font-medium text-slate-800">{doc}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-600">
                        Mandatory
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Step-by-Step Application Guide */}
              <section className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-subtle">
                <h2 className="font-sora text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  Step-by-Step Application Guide
                </h2>
                <ol className="space-y-4 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0F3832] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </span>
                    <div>
                      <strong className="block text-slate-900">Verify Your Eligibility</strong>
                      <span>Check all mandatory criteria (age, income, qualifications) before proceeding.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0F3832] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </span>
                    <div>
                      <strong className="block text-slate-900">Prepare Supporting Documents</strong>
                      <span>Keep scanned PDF copies of marksheets, identity proof, and income certificates ready.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0F3832] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </span>
                    <div>
                      <strong className="block text-slate-900">Open Official Portal Link</strong>
                      <span>Navigate directly to the authenticated portal ({opportunity.officialSourceUrl}).</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#0F3832] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      4
                    </span>
                    <div>
                      <strong className="block text-slate-900">Submit Online &amp; Save Acknowledgement</strong>
                      <span>Download your application receipt and track application status in your AvsarSetu dashboard.</span>
                    </div>
                  </li>
                </ol>
              </section>

            </div>

            {/* Right Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Application Card */}
              <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-subtle">
                <h3 className="font-sora font-semibold text-slate-900 text-sm mb-4">
                  Official Gazette Source
                </h3>
                <div className="space-y-3 text-xs text-slate-600 mb-6">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-400">Issuing Authority:</span>
                    <span className="font-medium text-slate-800 text-right truncate max-w-[180px]">
                      {opportunity.organization}
                    </span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-400">Official URL:</span>
                    <a
                      href={opportunity.officialSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0F3832] font-semibold hover:underline truncate max-w-[180px]"
                    >
                      {opportunity.officialSourceUrl}
                    </a>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Last Verified:</span>
                    <span className="font-medium text-emerald-700">Nov 2025 (Active)</span>
                  </div>
                </div>

                <a
                  href={opportunity.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F3832] hover:bg-[#14493F] text-white text-xs font-semibold shadow-sm transition-all"
                >
                  <span>Launch Official Portal</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              </div>

              {/* Free Eligibility Calculator Pill */}
              <div className="bg-[#E8F1EE] border border-[#D5E4E0] rounded-2xl p-6">
                <span className="text-[11px] font-bold text-[#0F3832] uppercase tracking-wider block mb-1">
                  Instant Assessment
                </span>
                <h4 className="font-sora text-sm font-bold text-slate-900 mb-2">
                  Check if you satisfy all criteria
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  Run this opportunity through our 60-second eligibility rule analyzer with zero registration needed.
                </p>
                <Link
                  href={`/eligibility?opp=${opportunity.id}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-white border border-[#D5E4E0] text-[#0F3832] text-xs font-semibold hover:bg-slate-50 transition-all shadow-subtle"
                >
                  Run Eligibility Engine
                </Link>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
