import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[900px] mx-auto">
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-12 shadow-card space-y-8">
            <div>
              <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
                About the Platform
              </span>
              <h1 className="font-sora text-3xl font-bold text-slate-900">
                AvsarSetu: One Platform. Every Opportunity.
              </h1>
            </div>

            <div className="prose text-sm text-slate-700 leading-relaxed space-y-4">
              <p>
                AvsarSetu is an all-in-one Indian opportunity discovery platform designed to bring government and private opportunities together in one centralized, verified location.
              </p>
              <p>
                Currently, opportunity-related information is scattered across thousands of separate ministry portals, state government departments, recruitment boards, university websites, and CSR pages. Indian citizens repeatedly face confusion, miss strict application deadlines, or fall prey to fraudulent job solicitations.
              </p>
              <p>
                AvsarSetu eliminates this friction through:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Official Gazette Verification:</strong> Every listing is cross-checked against authoritative gazette notifications and official .gov.in endpoints.</li>
                <li><strong>Deterministic Eligibility Engine:</strong> Instant matching of qualifications, age, and state domicile without storing unnecessary Aadhaar or bank details.</li>
                <li><strong>Universal Free Access:</strong> Full guest browsing without compulsory registration or subscription barriers.</li>
                <li><strong>Family Profile Management:</strong> Manage applications and eligibility checks across parents, siblings, and dependents from a single free account.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#E8F1EE] border border-[#D5E4E0] text-xs text-[#0F3832]">
              <strong className="block text-sm font-bold mb-1">Our Core Commitment</strong>
              AvsarSetu will always remain free and accessible to all Indian citizens. Sponsored opportunities will never override authentic eligibility or relevance.
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

