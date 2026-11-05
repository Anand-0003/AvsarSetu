import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[860px] mx-auto">
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-12 shadow-card space-y-6">
            <h1 className="font-sora text-3xl font-bold text-slate-900">
              Terms of Service
            </h1>
            <div className="prose text-sm text-slate-700 leading-relaxed space-y-4">
              <p>
                By using AvsarSetu, you agree to access information responsibly and solely for legitimate civic discovery, educational pursuit, and lawful employment applications.
              </p>
              <h3 className="font-sora text-base font-bold text-slate-900">User Conduct</h3>
              <p>
                Users shall not scrape, flood, or attempt to compromise official verification registries or disrupt server availability. Automated submission bots are strictly prohibited.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

