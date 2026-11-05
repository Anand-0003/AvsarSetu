"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [deadlineReminders, setDeadlineReminders] = useState(true);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-10 shadow-card space-y-8">
      <div>
        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
          Preferences &amp; Consent
        </span>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
          Account &amp; Privacy Settings
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Configure notification frequency, communication channels, and account data deletion.
        </p>
      </div>

      {savedSuccess && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
          <span>Preferences updated successfully.</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="border-b border-slate-100 pb-6 space-y-4">
          <h3 className="font-sora text-sm font-bold text-slate-900">
            Notification Channels
          </h3>

          <label className="flex items-center justify-between p-3 rounded-xl bg-[#FBFBFA] border border-slate-200 cursor-pointer">
            <div>
              <span className="text-xs font-semibold text-slate-800 block">Email Notifications</span>
              <span className="text-[11px] text-slate-500">Receive weekly digests of new matching schemes.</span>
            </div>
            <input
              type="checkbox"
              checked={emailAlerts}
              onChange={(e) => setEmailAlerts(e.target.checked)}
              className="w-4 h-4 text-[#0F3832] rounded border-slate-300 focus:ring-0 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 rounded-xl bg-[#FBFBFA] border border-slate-200 cursor-pointer">
            <div>
              <span className="text-xs font-semibold text-slate-800 block">Deadline Countdown Reminders</span>
              <span className="text-[11px] text-slate-500">Get alerted 7 days and 48 hours prior to opportunity closure.</span>
            </div>
            <input
              type="checkbox"
              checked={deadlineReminders}
              onChange={(e) => setDeadlineReminders(e.target.checked)}
              className="w-4 h-4 text-[#0F3832] rounded border-slate-300 focus:ring-0 cursor-pointer"
            />
          </label>
        </div>

        <div className="border-b border-slate-100 pb-6">
          <h3 className="font-sora text-sm font-bold text-slate-900 mb-2">
            Data Privacy &amp; Consent
          </h3>
          <p className="text-xs text-slate-600 mb-4">
            AvsarSetu retains only user-supplied demographic criteria to provide eligibility filtering. No documents or Aadhaar credentials are permanently stored.
          </p>
          <button
            type="button"
            className="px-4 py-2 border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50"
          >
            Download My Account Data (JSON)
          </button>
        </div>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-xl bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F]"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}

