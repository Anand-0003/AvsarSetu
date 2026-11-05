"use client";

import { useState } from "react";
import { MOCK_USER, INDIAN_STATES } from "../../../data/mockData";

export default function UserProfilePage() {
  const [profile, setProfile] = useState(MOCK_USER);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-10 shadow-subtle space-y-8">
      <div>
        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
          Account Identification
        </span>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
          Personal Profile &amp; Preferences
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          These details automatically pre-populate the deterministic eligibility engine to calculate matching grants and notifications.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          <span>Profile changes saved successfully in local frontend state.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: Basic Info */}
        <div className="border-b border-slate-100 pb-6">
          <h3 className="font-sora text-sm font-bold text-slate-900 mb-4">
            1. Personal Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                disabled
                value={profile.email}
                className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 text-sm cursor-not-allowed"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Domicile State
              </label>
              <select
                value={profile.state}
                onChange={(e) => setProfile({ ...profile, state: e.target.value })}
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
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                District / City
              </label>
              <input
                type="text"
                value={profile.district}
                onChange={(e) => setProfile({ ...profile, district: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Education */}
        <div className="border-b border-slate-100 pb-6">
          <h3 className="font-sora text-sm font-bold text-slate-900 mb-4">
            2. Academic Qualifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Education Level
              </label>
              <input
                type="text"
                value={profile.educationLevel}
                onChange={(e) => setProfile({ ...profile, educationLevel: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Degree / Course
              </label>
              <input
                type="text"
                value={profile.course}
                onChange={(e) => setProfile({ ...profile, course: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Percentage (%)
              </label>
              <input
                type="number"
                value={profile.percentage}
                onChange={(e) => setProfile({ ...profile, percentage: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Income & Social */}
        <div className="pb-4">
          <h3 className="font-sora text-sm font-bold text-slate-900 mb-4">
            3. Income &amp; Social Category
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Annual Family Income (INR)
              </label>
              <input
                type="number"
                step="25000"
                value={profile.annualIncome}
                onChange={(e) => setProfile({ ...profile, annualIncome: Number(e.target.value) })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Category
              </label>
              <select
                value={profile.casteCategory}
                onChange={(e) => setProfile({ ...profile, casteCategory: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832] cursor-pointer"
              >
                <option value="General">General Category</option>
                <option value="OBC (Non-Creamy Layer)">OBC (Non-Creamy Layer)</option>
                <option value="SC">Scheduled Caste (SC)</option>
                <option value="ST">Scheduled Tribe (ST)</option>
                <option value="EWS">EWS</option>
              </select>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-[#0F3832] hover:bg-[#14493F] text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
        >
          Save Profile Updates
        </button>
      </form>
    </div>
  );
}

