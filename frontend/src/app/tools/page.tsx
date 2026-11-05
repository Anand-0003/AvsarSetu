import Link from "next/link";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function ToolsDirectoryPage() {
  const tools = [
    {
      title: "Percentage Calculator",
      desc: "Convert total marks and maximum marks into standard academic percentage required for scholarship forms.",
      href: "/tools/percentage-calculator",
      icon: "percent",
      badge: "Academic"
    },
    {
      title: "CGPA to Percentage Converter",
      desc: "Convert 10-point and 4-point CGPA into university-standard percentage according to AICTE / CBSE conversion formulas.",
      href: "/tools/cgpa-calculator",
      icon: "calculate",
      badge: "University"
    },
    {
      title: "Age Eligibility Calculator",
      desc: "Calculate precise age as of application cut-off date to check UPSC, SSC, and recruitment notification limits.",
      href: "/tools/age-calculator",
      icon: "event",
      badge: "Recruitment"
    },
    {
      title: "Eligibility Checker",
      desc: "Multi-parameter matching engine comparing your age, domicile, qualifications, and income against scheme rules.",
      href: "/eligibility",
      icon: "rule",
      badge: "Matching"
    },
    {
      title: "Opportunity Comparison Matrix",
      desc: "Compare up to 3 opportunities side-by-side across benefits, eligibility conditions, and application deadlines.",
      href: "/compare",
      icon: "compare_arrows",
      badge: "Analytics"
    },
    {
      title: "Fraud Awareness & Verification",
      desc: "Learn how to verify gazette notifications and protect yourself from fake recruitment portals and fake fee claims.",
      href: "/fraud-awareness",
      icon: "shield",
      badge: "Safety"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Citizen Utilities
            </span>
            <h1 className="font-sora text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Tools &amp; Calculators Directory
            </h1>
            <p className="text-base text-slate-600 mt-2">
              Free, browser-based utilities to help students and job-seekers evaluate eligibility, calculate accurate academic scores, and verify authentic schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((t) => (
              <div
                key={t.title}
                className="bg-white border border-[#D5E4E0] hover:border-[#0F3832]/40 rounded-2xl p-6 shadow-subtle hover:shadow-card-hover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E8F1EE] text-[#0F3832] flex items-center justify-center border border-[#D5E4E0]">
                      <span className="material-symbols-outlined text-[24px]">{t.icon}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                      {t.badge}
                    </span>
                  </div>

                  <h3 className="font-sora text-base font-bold text-slate-900 mb-2 group-hover:text-[#0F3832] transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {t.desc}
                  </p>
                </div>

                <Link
                  href={t.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0F3832] group-hover:text-[#D97706] transition-colors"
                >
                  <span>Launch Tool</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

