"use client";

export default function AdminAuditLogsPage() {
  const logs = [
    { id: "log-1", actor: "admin@avsarsetu.in", action: "Approved Gazette Verification", target: "PMRF 2025 (pmrf-2025)", time: "10 mins ago" },
    { id: "log-2", actor: "system-crawler", action: "Detected Deadline Update", target: "NATS 2.0 Apprenticeship", time: "1 hour ago" },
    { id: "log-3", actor: "admin@avsarsetu.in", action: "Published New Scheme", target: "Mukhyamantri Anuprati (Rajasthan)", time: "3 hours ago" },
    { id: "log-4", actor: "officer-rj@avsarsetu.in", action: "Updated State Domicile Rules", target: "Rajasthan Post-Matric", time: "Yesterday" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
          Compliance &amp; History
        </span>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
          Platform Audit Logs
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Immutable audit trail recording verification actions, privilege allocations, and database modifications.
        </p>
      </div>

      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-card divide-y divide-slate-100 text-xs sm:text-sm">
        {logs.map((l) => (
          <div key={l.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-semibold text-slate-900 block">{l.action}</span>
              <span className="text-xs text-slate-500">
                Target: <strong className="text-slate-700">{l.target}</strong> · Actor: {l.actor}
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono shrink-0">{l.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

