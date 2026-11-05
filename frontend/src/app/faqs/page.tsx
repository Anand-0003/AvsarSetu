import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function FaqsPage() {
  const faqs = [
    {
      q: "Is AvsarSetu free to use?",
      a: "Yes, 100% free. Any Indian citizen can search schemes, check eligibility, and compare opportunities without paying any fee or subscription."
    },
    {
      q: "Do I need to create an account to browse?",
      a: "No. Guest browsing is fully supported. Accounts are only needed if you wish to bookmark opportunities, maintain family member profiles, or log application statuses."
    },
    {
      q: "How does the Eligibility Checker work?",
      a: "It runs a deterministic rule-matching comparison between your entered details (age, state domicile, qualification, income) and the mandatory criteria specified in official scheme notifications."
    },
    {
      q: "Can I manage opportunities for my family members?",
      a: "Yes! AvsarSetu's Family Profile feature allows you to maintain separate profiles for parents, siblings, or dependents and evaluate their eligibility separately."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[860px] mx-auto">
          <div className="mb-8">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Knowledge Base
            </span>
            <h1 className="font-sora text-3xl font-bold text-slate-900">
              Frequently Asked Questions (FAQs)
            </h1>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <div key={idx} className="bg-white border border-[#D5E4E0] rounded-xl p-6 shadow-subtle">
                <h3 className="font-sora text-base font-bold text-slate-900 mb-2">{f.q}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

