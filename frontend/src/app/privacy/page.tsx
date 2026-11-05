import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[860px] mx-auto">
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-12 shadow-card space-y-6">
            <h1 className="font-sora text-3xl font-bold text-slate-900">
              Privacy &amp; Data Protection Policy
            </h1>
            <p className="text-xs text-slate-400">Last updated: November 2025</p>

            <div className="prose text-sm text-slate-700 leading-relaxed space-y-4">
              <h3 className="font-sora text-base font-bold text-slate-900">1. Principle of Minimum Data Collection</h3>
              <p>
                AvsarSetu adheres strictly to data minimization. We do not store sensitive identity credentials such as complete Aadhaar numbers, biometric data, or private bank account passwords. Guest visitors are free to use all search and eligibility tools anonymously.
              </p>

              <h3 className="font-sora text-base font-bold text-slate-900">2. Family Profile Data Isolation</h3>
              <p>
                Family profile parameters (education, age, district) are stored solely for client-side matching convenience and application tracking under your personal authenticated session. Adult members maintain individual revocation rights.
              </p>

              <h3 className="font-sora text-base font-bold text-slate-900">3. Zero Data Sale Guarantee</h3>
              <p>
                AvsarSetu will never sell, rent, or trade citizen data to commercial lenders, coaching aggregators, or third-party marketing brokers.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

