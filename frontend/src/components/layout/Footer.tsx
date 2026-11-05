import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-[#090D16] text-slate-300 border-t border-slate-800 pt-16 pb-12 mt-auto">
      <div className="w-full px-6 lg:px-12 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#0F3832] flex items-center justify-center text-white border border-[#14493F]">
                <span className="text-[#D97706] text-lg font-bold select-none font-sora">✦</span>
              </div>
              <span className="font-sora font-bold text-xl tracking-tight text-white">
                Avsar<span className="text-[#D5E4E0]">Setu</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              India&apos;s centralized opportunity discovery platform bringing verified government schemes, scholarships, jobs, apprenticeships, and free learning programs together.
            </p>
            <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>100% Free &amp; Sovereign Access for All Citizens</span>
            </div>
          </div>

          {/* Column 1: Opportunities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-sora">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/schemes" className="hover:text-white transition-colors">
                  Government Schemes
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="hover:text-white transition-colors">
                  Scholarships &amp; Grants
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-white transition-colors">
                  Government Jobs
                </Link>
              </li>
              <li>
                <Link href="/jobs?type=private" className="hover:text-white transition-colors">
                  Private Careers
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors">
                  Free Skill Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Tools & Guides */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-sora">
              Citizen Tools
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/eligibility" className="hover:text-white transition-colors">
                  Eligibility Checker
                </Link>
              </li>
              <li>
                <Link href="/tools" className="hover:text-white transition-colors">
                  Calculators Directory
                </Link>
              </li>
              <li>
                <Link href="/compare" className="hover:text-white transition-colors">
                  Compare Schemes
                </Link>
              </li>
              <li>
                <Link href="/explorer" className="hover:text-white transition-colors">
                  State &amp; District Map
                </Link>
              </li>
              <li>
                <Link href="/fraud-awareness" className="hover:text-white transition-colors">
                  Fraud Awareness
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-sora">
              Platform &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About AvsarSetu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Help &amp; Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-white transition-colors">
                  Gazette Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} AvsarSetu. Public Demonstration &amp; Discovery Portal.</p>
          <div className="flex items-center gap-6">
            <span>Verified Gazette Sources</span>
            <span>•</span>
            <span>Zero Data Monitization</span>
            <span>•</span>
            <span>PWA Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

