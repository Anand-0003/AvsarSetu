"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const adminLinks = [
    { href: "/admin", label: "Dashboard", icon: "monitoring" },
    { href: "/admin/opportunities", label: "Opportunities", icon: "format_list_bulleted" },
    { href: "/admin/verification", label: "Verification Centre", icon: "verified" },
    { href: "/admin/categories", label: "Categories", icon: "category" },
    { href: "/admin/users", label: "User Management", icon: "manage_accounts" },
    { href: "/admin/audit-logs", label: "Audit Logs", icon: "history" },
    { href: "/admin/settings", label: "Portal Settings", icon: "tune" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      {/* Top Admin Header */}
      <header className="w-full bg-[#090D16] text-white border-b border-slate-800 sticky top-0 z-50">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0F3832] flex items-center justify-center text-white border border-[#14493F]">
                <span className="text-[#D97706] text-sm font-bold font-sora">✦</span>
              </div>
              <span className="font-sora font-bold text-lg text-white">
                AvsarSetu <span className="text-[#D97706] text-xs font-mono font-normal">ADMIN</span>
              </span>
            </Link>
            <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[11px] font-semibold">
              Super Admin Console
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/" className="text-slate-400 hover:text-white transition-colors">
              View Public Website ↗
            </Link>
            <div className="flex items-center gap-2 pl-4 border-l border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-slate-200">System Healthy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Content Body */}
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto py-6 sm:py-8 flex-1">
        
        {/* Mobile Admin Navigation Bar (lg:hidden) */}
        <div className="lg:hidden mb-6 bg-white border border-[#D5E4E0] rounded-2xl p-3 shadow-subtle">
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-100">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Admin Modules
            </span>
            <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
              Super Admin
            </span>
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {adminLinks.map((link) => {
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
          
          {/* Admin Sidebar (3 cols - Desktop Only) */}
          <aside className="hidden lg:block lg:col-span-3 bg-white border border-[#D5E4E0] rounded-2xl p-4 shadow-subtle sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Control Modules
            </div>

            <nav className="space-y-1">
              {adminLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#0F3832] text-white shadow-xs"
                        : "text-slate-700 hover:text-[#0F3832] hover:bg-[#E8F1EE]"
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
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 block">Current Role: Super Admin</span>
                <span>Scope: All India (Central &amp; All 36 States/UTs)</span>
              </div>
            </div>
          </aside>

          {/* Admin Center Work Pane (9 cols on desktop, 12 on mobile) */}
          <main className="w-full lg:col-span-9 min-h-[600px]">
            {children}
          </main>

        </div>
      </div>
    </div>
  );
}

