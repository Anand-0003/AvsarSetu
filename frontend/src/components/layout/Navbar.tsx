"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"en" | "hi">("en");

  const navLinks = [
    { href: "/explore", label: "Explore" },
    { href: "/schemes", label: "Schemes" },
    { href: "/scholarships", label: "Scholarships" },
    { href: "/jobs", label: "Jobs" },
    { href: "/courses", label: "Courses" },
    { href: "/tools", label: "Tools" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    return pathname.startsWith(href) && href !== "/";
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-md border-b border-[#D5E4E0]/80 sticky top-0 z-50 transition-all">
      <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto flex items-center justify-between h-[70px]">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group active:scale-[0.99] transition-transform">
          <div className="w-10 h-10 rounded-xl bg-[#0F3832] flex items-center justify-center text-white shadow-sm border border-[#14493F]">
            <span className="text-[#D97706] text-xl font-bold select-none font-sora">✦</span>
          </div>
          <div className="flex flex-col">
            <span className="font-sora font-bold text-xl tracking-tight text-[#0F3832] leading-tight">
              Avsar<span className="text-slate-900">Setu</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 font-inter">
              National Opportunity Gateway
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14.5px]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-colors ${
                isLinkActive(link.href)
                  ? "text-[#0F3832] font-semibold border-b-2 border-[#0F3832] pb-0.5"
                  : "text-slate-600 hover:text-[#0F3832]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/dashboard"
            className={`font-medium transition-colors ${
              pathname.startsWith("/dashboard")
                ? "text-[#0F3832] font-semibold border-b-2 border-[#0F3832] pb-0.5"
                : "text-slate-600 hover:text-[#0F3832]"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/admin"
            className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold"
          >
            Admin
          </Link>
        </nav>

        {/* Trailing Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Language Selector Pill - Desktop */}
          <button
            onClick={() => setLanguage(language === "en" ? "hi" : "en")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-700 text-xs font-medium hover:border-[#0F3832]/40 hover:bg-white transition-all cursor-pointer"
            type="button"
            title="Toggle Language"
          >
            <span className="material-symbols-outlined text-[16px] text-slate-500">translate</span>
            <span>{language === "en" ? "English / हिन्दी" : "हिन्दी / English"}</span>
          </button>

          {/* Login Link - Desktop */}
          <Link
            href="/auth/login"
            className="hidden sm:inline-block text-sm font-medium text-slate-700 hover:text-[#0F3832] px-2 py-1.5 transition-colors"
          >
            Login
          </Link>

          {/* Solid Deep Emerald CTA */}
          <Link
            href="/eligibility"
            className="inline-flex items-center justify-center px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-[#0F3832] hover:bg-[#14493F] text-white text-xs sm:text-sm font-semibold shadow-sm active:scale-[0.98] transition-all border border-[#0A2824] whitespace-nowrap"
          >
            Check Eligibility
          </Link>

          {/* Mobile Menu Button with clear touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 active:bg-slate-200 cursor-pointer"
            aria-label="Toggle menu"
            type="button"
          >
            <span className="material-symbols-outlined text-[26px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="md:hidden relative z-50 bg-white border-b border-slate-200 px-5 py-4 space-y-3 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto">
            {/* Mobile Language Switcher */}
            <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">Language / भाषा:</span>
              <button
                onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold"
                type="button"
              >
                <span className="material-symbols-outlined text-[15px] text-[#0F3832]">translate</span>
                <span>{language === "en" ? "हिन्दी में बदलें" : "Switch to English"}</span>
              </button>
            </div>

            {/* Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-slate-800 hover:text-[#0F3832] font-semibold py-2 px-2 rounded-lg text-sm ${
                    isLinkActive(link.href) ? "bg-[#E8F1EE] text-[#0F3832]" : "hover:bg-slate-50"
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 hover:text-[#0F3832] py-2 px-2 rounded-lg hover:bg-slate-50"
              >
                <span className="material-symbols-outlined text-[18px] text-[#0F3832]">dashboard</span>
                <span>My Citizen Dashboard</span>
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-sm font-semibold text-slate-800 hover:text-[#0F3832] py-2 px-2 rounded-lg hover:bg-slate-50"
              >
                <span className="material-symbols-outlined text-[18px] text-[#D97706]">admin_panel_settings</span>
                <span>Admin Console</span>
              </Link>
              <Link
                href="/auth/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-[#0F3832] bg-[#E8F1EE] hover:bg-[#D5E4E0] py-2.5 px-3 rounded-xl mt-1 text-center"
              >
                <span className="material-symbols-outlined text-[18px]">login</span>
                <span>Sign In / Register</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

