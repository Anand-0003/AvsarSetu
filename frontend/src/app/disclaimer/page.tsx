import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[860px] mx-auto">
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-12 shadow-card space-y-6">
            <h1 className="font-sora text-3xl font-bold text-slate-900">
              Official Gazette &amp; Authenticity Disclaimer
            </h1>
            <div className="prose text-sm text-slate-700 leading-relaxed space-y-4">
              <p>
                AvsarSetu is an independent discovery facilitator and aggregator. While our team performs rigorous source verification against government gazettes and ministry orders, the final authority on eligibility rules, deadline extensions, and grant distribution rests solely with the competent government ministry or issuing institution.
              </p>
              <p>
                Users are always directed to the official authenticated portal (.gov.in / .nic.in / verified corporate website) before submitting personal documents or fee payments.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

