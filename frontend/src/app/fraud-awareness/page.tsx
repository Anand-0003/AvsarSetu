import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function FraudAwarenessPage() {
  const tips = [
    {
      title: "1. Official Government Scheme Authenticity",
      rule: "No Central or State Government scheme asks for upfront registration fees via UPI or personal QR codes.",
      action: "All authentic schemes process applications on official .gov.in or .nic.in domain portals."
    },
    {
      title: "2. Verify DBT Bank Account Requests",
      rule: "Legitimate scholarships deposit money directly via PFMS / DBT linked to your Aadhaar-seeded bank account.",
      action: "Never share ATM PINs, OTPs, or passwords under the pretext of 'activating your scholarship'."
    },
    {
      title: "3. Spotting Fake Job Offers & Exam Letters",
      rule: "Government recruitment (UPSC, SSC, Railways, State PSC) publishes notices in the Employment News and official gazettes.",
      action: "Reject private WhatsApp or Telegram appointment letters demanding security deposits."
    },
    {
      title: "4. Report Suspicious Portals",
      rule: "If an opportunity looks fabricated or charges unauthorized fees, report it directly to cybercrime.gov.in.",
      action: "AvsarSetu's policy verification team immediately takes down reported fraudulent links."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Citizen Vigilance &amp; Verification
            </span>
            <h1 className="font-sora text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Fraud Awareness &amp; Verification Centre
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Guidelines to identify fake recruitment, fraudulent scholarship ads, and unauthorized fee solicitations.
            </p>
          </div>

          <div className="space-y-6">
            {tips.map((t, idx) => (
              <div key={idx} className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-subtle">
                <h3 className="font-sora text-lg font-bold text-slate-900 mb-2">{t.title}</h3>
                <p className="text-sm text-slate-700 font-medium mb-3">{t.rule}</p>
                <div className="p-4 rounded-xl bg-[#E8F1EE] border border-[#D5E4E0] text-xs text-[#0F3832] font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  <span>{t.action}</span>
                </div>
              </div>
            ))}

            {/* Helpline banner */}
            <div className="p-8 rounded-2xl bg-[#0F3832] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-sora text-lg font-bold">Suspect a Fake Opportunity?</h3>
                <p className="text-xs text-[#D5E4E0] mt-1">
                  National Cyber Crime Reporting Portal: Dial 1930 or submit details on cybercrime.gov.in
                </p>
              </div>
              <a
                href="https://cybercrime.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#D97706] text-slate-950 font-bold text-xs hover:bg-[#B45309] shrink-0"
              >
                Report to Cyber Crime Cell
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
