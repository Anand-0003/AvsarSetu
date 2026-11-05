"use client";

import { useState } from "react";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("AvsarSetu");
  const [primaryColor, setPrimaryColor] = useState("#0F3832");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [guestChecking, setGuestChecking] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-10 shadow-card space-y-8">
      <div>
        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
          Master Parameters
        </span>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
          Website Settings &amp; Control Centre
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Super Admin controls for branding, language support, maintenance mode, and guest access rules.
        </p>
      </div>

      {saved && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          <span>Website settings updated successfully.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6 text-xs sm:text-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Platform Name
            </label>
            <input
              type="text"
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
              Primary Brand Hex
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="w-10 h-10 rounded-lg border border-slate-200 cursor-pointer"
              />
              <input
                type="text"
                value={primaryColor}
                onChange={(e) => setPrimaryColor(e.target.value)}
                className="flex-1 px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm font-mono focus:outline-none focus:border-[#0F3832]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-slate-100">
          <label className="flex items-center justify-between p-4 rounded-xl bg-[#FBFBFA] border border-slate-200 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-900 block">Guest Anonymous Eligibility Access</span>
              <span className="text-[11px] text-slate-500">
                Allow citizens to check opportunity eligibility without registration. (Core PRD Mandate)
              </span>
            </div>
            <input
              type="checkbox"
              checked={guestChecking}
              onChange={(e) => setGuestChecking(e.target.checked)}
              className="w-4 h-4 text-[#0F3832] rounded border-slate-300 focus:ring-0 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-4 rounded-xl bg-[#FBFBFA] border border-slate-200 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-900 block">Maintenance Mode</span>
              <span className="text-[11px] text-slate-500">
                Put the public platform in read-only maintenance window for gazette sync.
              </span>
            </div>
            <input
              type="checkbox"
              checked={maintenanceMode}
              onChange={(e) => setMaintenanceMode(e.target.checked)}
              className="w-4 h-4 text-[#0F3832] rounded border-slate-300 focus:ring-0 cursor-pointer"
            />
          </label>
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F] cursor-pointer"
        >
          Save Portal Settings
        </button>
      </form>
    </div>
  );
}

