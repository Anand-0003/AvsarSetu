"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { MOCK_OPPORTUNITIES, INDIAN_STATES } from "../../data/mockData";

export default function EligibilityCheckerPage() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    age: 22,
    educationLevel: "Undergraduate",
    course: "BCA / B.Sc / B.Tech",
    state: "Rajasthan",
    percentage: 75,
    annualIncome: 250000,
    casteCategory: "OBC",
    gender: "All",
  });

  const [hasEvaluated, setHasEvaluated] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, 3));
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1));

  const handleEvaluate = (e: React.FormEvent) => {
    e.preventDefault();
    setHasEvaluated(true);
  };

  // Rule-based deterministic evaluation against sample opportunities
  const evaluationResults = MOCK_OPPORTUNITIES.map((opp) => {
    const checks: { name: string; status: "PASS" | "FAIL" | "UNKNOWN"; note: string }[] = [];

    // Age check
    if (opp.minAge && opp.maxAge) {
      if (formData.age >= opp.minAge && formData.age <= opp.maxAge) {
        checks.push({ name: "Age Limit", status: "PASS", note: `Age ${formData.age} falls within ${opp.minAge}–${opp.maxAge} yrs` });
      } else {
        checks.push({ name: "Age Limit", status: "FAIL", note: `Requires ${opp.minAge}–${opp.maxAge} yrs (You entered ${formData.age})` });
      }
    } else {
      checks.push({ name: "Age Limit", status: "PASS", note: "No rigid age barrier" });
    }

    // State check
    if (opp.state && opp.state !== "Central" && opp.locationScope === "State") {
      if (opp.state.toLowerCase() === formData.state.toLowerCase()) {
        checks.push({ name: "Domicile", status: "PASS", note: `Matches ${formData.state} resident criterion` });
      } else {
        checks.push({ name: "Domicile", status: "FAIL", note: `Specific to ${opp.state} residents only` });
      }
    } else {
      checks.push({ name: "Domicile", status: "PASS", note: "Pan-India / All States Eligible" });
    }

    // Income check
    if (opp.incomeLimit) {
      if (formData.annualIncome <= opp.incomeLimit) {
        checks.push({ name: "Income Limit", status: "PASS", note: `₹${(formData.annualIncome / 100000).toFixed(1)}L is below ₹${(opp.incomeLimit / 100000).toFixed(1)}L ceiling` });
      } else {
        checks.push({ name: "Income Limit", status: "FAIL", note: `Exceeds ₹${(opp.incomeLimit / 100000).toFixed(1)}L limit (Gap analysis)` });
      }
    } else {
      checks.push({ name: "Income Limit", status: "PASS", note: "No income threshold required" });
    }

    // Education check
    const eduPass = opp.educationLevel.some((lvl) =>
      lvl.toLowerCase().includes(formData.educationLevel.toLowerCase()) || lvl === "Any"
    );
    if (eduPass) {
      checks.push({ name: "Education", status: "PASS", note: `Qualifies with ${formData.educationLevel}` });
    } else {
      checks.push({ name: "Education", status: "FAIL", note: `Requires ${opp.educationLevel.join(" / ")}` });
    }

    const fails = checks.filter((c) => c.status === "FAIL");
    const isEligible = fails.length === 0;

    return {
      opportunity: opp,
      checks,
      isEligible,
      statusLabel: isEligible
        ? "Eligible Based on Provided Information"
        : fails.length === 1
        ? "Potentially Eligible (Single Criteria Gap)"
        : "Not Eligible",
    };
  });

  const eligibleList = evaluationResults.filter((r) => r.isEligible);
  const gapList = evaluationResults.filter((r) => !r.isEligible);

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Deterministic Matching Engine
            </span>
            <h1 className="font-sora text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Instant Opportunity Eligibility Checker
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Answer 3 quick steps to evaluate your qualification against official gazetted scheme rules. Completely anonymous &amp; free for all citizens.
            </p>
          </div>

          {!hasEvaluated ? (
            /* Multi-step Form Card */
            <div className="max-w-2xl mx-auto bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-10 shadow-card">
              {/* Stepper indicator */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                {[
                  { num: 1, title: "Personal & State" },
                  { num: 2, title: "Education & Scores" },
                  { num: 3, title: "Income & Category" },
                ].map((s) => (
                  <div key={s.num} className="flex items-center gap-2">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                        step === s.num
                          ? "bg-[#0F3832] text-white"
                          : step > s.num
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {step > s.num ? "✓" : s.num}
                    </span>
                    <span className="hidden sm:inline text-xs font-semibold text-slate-700">
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleEvaluate} className="space-y-6">
                {/* Step 1: Personal & State */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-sora text-base font-bold text-slate-900 mb-2">
                      Step 1: Age &amp; Geographic Domicile
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Your Age (Years)
                      </label>
                      <input
                        type="number"
                        min="10"
                        max="80"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: Number(e.target.value) })}
                        className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Domicile State / UT
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
                      >
                        {INDIAN_STATES.filter((s) => s !== "All India (Central)").map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Gender
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {["All", "Male", "Female"].map((g) => (
                          <button
                            key={g}
                            type="button"
                            onClick={() => setFormData({ ...formData, gender: g })}
                            className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                              formData.gender === g
                                ? "bg-[#0F3832] text-white border-[#0F3832]"
                                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                            }`}
                          >
                            {g}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Education & Scores */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-sora text-base font-bold text-slate-900 mb-2">
                      Step 2: Educational Qualifications
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Current Education Level
                      </label>
                      <select
                        value={formData.educationLevel}
                        onChange={(e) => setFormData({ ...formData, educationLevel: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
                      >
                        <option value="10th Pass">10th Pass</option>
                        <option value="12th Pass">12th Pass</option>
                        <option value="Diploma">Diploma / Polytechnic</option>
                        <option value="Undergraduate">Undergraduate (BCA / B.Sc / B.Tech / B.A / B.Com)</option>
                        <option value="Graduate">Graduate / Degree Holder</option>
                        <option value="Postgraduate">Postgraduate (M.Tech / M.Sc / MCA / PhD)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Marks / Academic Percentage (%)
                      </label>
                      <input
                        type="number"
                        min="30"
                        max="100"
                        value={formData.percentage}
                        onChange={(e) => setFormData({ ...formData, percentage: Number(e.target.value) })}
                        className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Income & Category */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-sora text-base font-bold text-slate-900 mb-2">
                      Step 3: Family Income &amp; Category
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Total Annual Family Income (INR)
                      </label>
                      <input
                        type="number"
                        step="25000"
                        value={formData.annualIncome}
                        onChange={(e) => setFormData({ ...formData, annualIncome: Number(e.target.value) })}
                        className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                      />
                      <span className="text-[11px] text-slate-500 mt-1 block">
                        Current: ₹{(formData.annualIncome / 100000).toFixed(2)} Lakh per year
                      </span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        Beneficiary / Social Category
                      </label>
                      <select
                        value={formData.casteCategory}
                        onChange={(e) => setFormData({ ...formData, casteCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
                      >
                        <option value="General">General Category</option>
                        <option value="OBC">OBC (Other Backward Classes)</option>
                        <option value="SC">Scheduled Caste (SC)</option>
                        <option value="ST">Scheduled Tribe (ST)</option>
                        <option value="EWS">Economically Weaker Section (EWS)</option>
                        <option value="Minority">Minority Community</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                    >
                      Back
                    </button>
                  ) : <div></div>}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-lg bg-[#0F3832] hover:bg-[#14493F] text-white text-xs font-semibold shadow-xs cursor-pointer"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-7 py-3 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-slate-950 text-xs font-bold shadow-md cursor-pointer"
                    >
                      Analyze My Eligibility
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            /* Evaluation Results View */
            <div className="space-y-8">
              {/* Summary Banner */}
              <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 uppercase tracking-wide">
                    Evaluation Complete
                  </span>
                  <h2 className="font-sora text-2xl font-bold text-slate-900 mt-2">
                    Found {eligibleList.length} Matching Opportunities
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Based on Age {formData.age}, {formData.educationLevel}, {formData.state} Domicile, and Family Income ₹{(formData.annualIncome / 100000).toFixed(1)}L.
                  </p>
                </div>
                <button
                  onClick={() => setHasEvaluated(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold shrink-0 cursor-pointer"
                >
                  Adjust Parameters
                </button>
              </div>

              {/* Matching Opportunities List */}
              <div className="space-y-4">
                <h3 className="font-sora text-lg font-bold text-slate-900">
                  Fully Matching Opportunities ({eligibleList.length})
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eligibleList.map((res) => (
                    <div
                      key={res.opportunity.id}
                      className="bg-white border-2 border-emerald-500/30 rounded-2xl p-6 shadow-subtle flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-[11px] font-bold text-slate-500 uppercase">
                            {res.opportunity.organization}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            100% Eligible
                          </span>
                        </div>
                        <h4 className="font-sora text-base font-bold text-slate-900 mb-2">
                          {res.opportunity.title}
                        </h4>
                        <p className="text-xs text-slate-600 mb-4 line-clamp-2">
                          {res.opportunity.shortDescription}
                        </p>

                        {/* Criteria matrix */}
                        <div className="space-y-1.5 mb-4 text-xs">
                          {res.checks.map((chk, idx) => (
                            <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100">
                              <span className="text-slate-600">{chk.name}</span>
                              <span className="font-semibold text-emerald-700 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">check</span>
                                {chk.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0F3832]">
                          {res.opportunity.benefits}
                        </span>
                        <Link
                          href={`/opportunities/${res.opportunity.slug}`}
                          className="px-4 py-2 rounded-lg bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F]"
                        >
                          View &amp; Apply
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility Gap Analysis */}
              {gapList.length > 0 && (
                <div className="space-y-4 pt-6">
                  <h3 className="font-sora text-lg font-bold text-slate-900">
                    Eligibility Gap Analysis ({gapList.length})
                  </h3>
                  <p className="text-xs text-slate-500 -mt-2">
                    Opportunities where you satisfy some criteria, with transparent explanation of missing parameters.
                  </p>

                  <div className="space-y-4">
                    {gapList.map((res) => (
                      <div
                        key={res.opportunity.id}
                        className="bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-subtle"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="font-sora text-base font-semibold text-slate-900">
                            {res.opportunity.title}
                          </h4>
                          <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 text-xs font-semibold border border-amber-200 self-start sm:self-auto">
                            {res.statusLabel}
                          </span>
                        </div>

                        {/* Criteria checks list */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 py-3 border-t border-b border-slate-100 text-xs my-3">
                          {res.checks.map((chk, idx) => (
                            <div key={idx} className="p-2.5 rounded-lg bg-[#FBFBFA]">
                              <span className="text-slate-400 block text-[10px] uppercase font-bold">
                                {chk.name}
                              </span>
                              <span
                                className={`font-bold block mt-0.5 ${
                                  chk.status === "PASS" ? "text-emerald-700" : "text-red-600"
                                }`}
                              >
                                {chk.status === "PASS" ? "✓ Satisfied" : "✗ Gap Detected"}
                              </span>
                              <span className="text-[11px] text-slate-600 block mt-1">
                                {chk.note}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <span className="text-xs text-slate-500">
                            Alternative: Check state-level or open merit categories.
                          </span>
                          <Link
                            href={`/opportunities/${res.opportunity.slug}`}
                            className="text-xs font-semibold text-[#0F3832] hover:underline"
                          >
                            Inspect Rule Details →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
