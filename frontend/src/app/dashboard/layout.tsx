"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navbar } from "../../components/layout/Navbar";
import { MOCK_USER } from "../../data/mockData";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const sidebarLinks = [
    { href: "/dashboard", label: "Overview", icon: "dashboard" },
    { href: "/dashboard/profile", label: "My Profile", icon: "person" },
    { href: "/dashboard/family", label: "Family Profiles", icon: "group" },
    { href: "/dashboard/saved", label: "Saved Items", icon: "bookmarks" },
    { href: "/dashboard/applications", label: "Application Tracker", icon: "assignment" },
    { href: "/dashboard/calendar", label: "Deadline Calendar", icon: "calendar_month" },
    { href: "/dashboard/notifications", label: "Notifications", icon: "notifications" },
    { href: "/dashboard/settings", label: "Settings", icon: "settings" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto py-6 sm:py-8 flex-1">
        
        {/* Mobile Dashboard Top Bar with Horizontal Navigation (lg:hidden) */}
        <div className="lg:hidden mb-6 bg-white border border-[#D5E4E0] rounded-2xl p-3.5 shadow-subtle">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2.5">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#0F3832] text-white flex items-center justify-center font-sora font-bold text-xs shrink-0">
                RS
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-sora text-xs font-bold text-slate-900 truncate">
                  {MOCK_USER.name}
                </span>
                <span className="text-[10px] text-slate-500 truncate">
                  Citizen Dashboard
                </span>
              </div>
            </div>
            <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Verified
            </span>
          </div>

          {/* Smooth Horizontal Nav Carousel */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                    isActive
                      ? "bg-[#0F3832] text-white shadow-xs"
                      : "text-slate-700 bg-slate-50 hover:bg-[#E8F1EE] hover:text-[#0F3832]"
                  }`}
                >
                  <span className="material-symbols-outlined text-[15px]">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* User Dashboard Sidebar (3 cols - Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white border border-[#D5E4E0] rounded-2xl p-5 shadow-subtle sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
            {/* User Mini Profile Header */}
            <div className="flex items-center gap-3 pb-5 border-b border-slate-100 mb-4">
              <div className="w-11 h-11 rounded-full bg-[#0F3832] text-white flex items-center justify-center font-sora font-bold text-sm">
                RS
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-sora text-sm font-bold text-slate-900 truncate">
                  {MOCK_USER.name}
                </span>
                <span className="text-[11px] text-slate-500 truncate">
                  {MOCK_USER.educationLevel} · {MOCK_USER.state}
                </span>
              </div>
            </div>

            {/* Sidebar Navigation */}
            <nav className="space-y-1">
              {sidebarLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#0F3832] text-white"
                        : "text-slate-600 hover:text-[#0F3832] hover:bg-[#E8F1EE]"
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {link.icon}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <div className="p-3 rounded-xl bg-[#E8F1EE] border border-[#D5E4E0] text-[11px] text-[#0F3832]">
                <strong className="block font-bold">Free Citizen Account</strong>
                Full access to all eligibility engines and trackers.
              </div>
            </div>
          </aside>

          {/* Main Content Pane (9 cols on desktop, 12 on mobile) */}
          <main className="w-full lg:col-span-9 min-h-[500px]">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
}

