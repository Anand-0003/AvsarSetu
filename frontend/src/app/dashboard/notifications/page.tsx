"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_NOTIFICATIONS } from "../../../data/mockData";
import { NotificationItem } from "../../../types";

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(MOCK_NOTIFICATIONS);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const toggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: !n.isRead } : n))
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
            Alerts &amp; Dispatches
          </span>
          <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
            Personalized Notifications
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Deadline warnings, matching scheme alerts, and application status changes.
          </p>
        </div>

        <button
          onClick={markAllRead}
          className="text-xs font-semibold text-[#0F3832] hover:underline cursor-pointer"
        >
          Mark all as read
        </button>
      </div>

      {/* Notifications Feed */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 shadow-card divide-y divide-slate-100">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={`py-4 flex items-start justify-between gap-4 transition-colors ${
              !n.isRead ? "bg-[#E8F1EE]/30 -mx-6 px-6" : ""
            }`}
          >
            <div className="flex items-start gap-3.5">
              <span
                className={`material-symbols-outlined text-[20px] p-2 rounded-xl mt-0.5 ${
                  n.category === "deadline"
                    ? "bg-amber-100 text-amber-800"
                    : n.category === "scheme"
                    ? "bg-emerald-100 text-emerald-800"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {n.category === "deadline"
                  ? "alarm"
                  : n.category === "scheme"
                  ? "verified"
                  : "notifications"}
              </span>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-sora text-sm font-bold text-slate-900">{n.title}</h4>
                  {!n.isRead && (
                    <span className="w-2 h-2 rounded-full bg-[#0F3832]"></span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xl">{n.message}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-[11px] text-slate-400 font-medium">{n.date}</span>
                  {n.link && (
                    <Link
                      href={n.link}
                      className="text-[11px] font-semibold text-[#0F3832] hover:underline"
                    >
                      View details →
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={() => toggleRead(n.id)}
              className="text-slate-400 hover:text-slate-700 text-xs cursor-pointer"
              title={n.isRead ? "Mark unread" : "Mark read"}
            >
              {n.isRead ? "Unread" : "Done"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

