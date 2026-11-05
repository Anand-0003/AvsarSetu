"use client";

import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { OpportunityCard } from "../../components/opportunity/OpportunityCard";
import { MOCK_OPPORTUNITIES } from "../../data/mockData";

export default function CoursesPage() {
  const courses = MOCK_OPPORTUNITIES.filter((opp) => opp.category === "course" || opp.category === "internship");

  return (
    <div className="flex flex-col min-h-screen bg-[#FBFBFA]">
      <Navbar />

      <main className="flex-1 w-full py-10 md:py-14">
        <div className="w-full px-4 sm:px-6 lg:px-12 max-w-[1360px] mx-auto">
          {/* Header */}
          <div className="mb-10 max-w-3xl">
            <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
              Free Sovereign Education &amp; Training
            </span>
            <h1 className="font-sora text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Free Certified Courses &amp; Apprenticeships
            </h1>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              Govt.-certified industry 4.0 courses, AI/ML credentials from IITs on SWAYAM, and paid technical apprenticeships under NATS.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

