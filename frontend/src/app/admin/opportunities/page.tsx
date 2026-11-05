"use client";

import { useState } from "react";
import { MOCK_OPPORTUNITIES } from "../../../data/mockData";
import { Opportunity } from "../../../types";

export default function AdminOpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(MOCK_OPPORTUNITIES);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);

  const [newOpp, setNewOpp] = useState({
    title: "",
    organization: "",
    category: "scheme" as Opportunity["category"],
    benefits: "",
    deadline: "",
    locationScope: "All India" as Opportunity["locationScope"],
    officialSourceUrl: "",
    applicationUrl: "",
    shortDescription: "",
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to archive or remove this opportunity?")) {
      setOpportunities(opportunities.filter((o) => o.id !== id));
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Opportunity = {
      id: `opp-${Date.now()}`,
      slug: newOpp.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: newOpp.title,
      organization: newOpp.organization,
      category: newOpp.category,
      categoryLabel: newOpp.category.toUpperCase(),
      benefits: newOpp.benefits,
      deadline: newOpp.deadline,
      locationScope: newOpp.locationScope,
      officialSourceUrl: newOpp.officialSourceUrl,
      applicationUrl: newOpp.applicationUrl,
      shortDescription: newOpp.shortDescription,
      verificationStatus: "Source Confirmed",
      educationLevel: ["Undergraduate", "Graduate"],
      tags: ["Admin Created"],
      documentsRequired: ["Identity Proof", "Academic Marksheet"],
    };
    setOpportunities([created, ...opportunities]);
    setShowAddModal(false);
  };

  const filtered = opportunities.filter((o) => {
    const matchesSearch =
      o.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      o.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = categoryFilter === "all" || o.category === categoryFilter;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
            Registry Control
          </span>
          <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
            Opportunity Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Publish, edit, verify, or archive government schemes and verified recruitment drives.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F] transition-all cursor-pointer shrink-0"
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          <span>Add New Listing</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-[#D5E4E0] shadow-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-80 relative">
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search by title or ministry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0F3832]"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F3832] cursor-pointer"
          >
            <option value="all">All Segments</option>
            <option value="scheme">Government Schemes</option>
            <option value="scholarship">Scholarships</option>
            <option value="govt_job">Govt Jobs</option>
            <option value="private_job">Private Jobs</option>
            <option value="internship">Internships</option>
            <option value="course">Free Courses</option>
          </select>

          <span className="text-xs text-slate-500 font-medium">
            Total: {filtered.length} listings
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border border-[#D5E4E0] rounded-2xl shadow-card">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-[#FBFBFA] text-slate-500 font-bold uppercase text-[11px]">
              <th className="p-4">Title &amp; Authority</th>
              <th className="p-4">Category</th>
              <th className="p-4">Deadline</th>
              <th className="p-4">Verification</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {filtered.map((opp) => (
              <tr key={opp.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-4">
                  <div className="font-sora font-semibold text-slate-900 line-clamp-1">
                    {opp.title}
                  </div>
                  <span className="text-xs text-slate-500 block truncate max-w-sm">
                    {opp.organization}
                  </span>
                </td>
                <td className="p-4 uppercase font-semibold text-xs text-[#0F3832]">
                  {opp.category}
                </td>
                <td className="p-4 font-semibold text-[#D97706]">{opp.deadline}</td>
                <td className="p-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200">
                    {opp.verificationStatus}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button
                    onClick={() => handleDelete(opp.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 rounded transition-colors"
                    title="Archive listing"
                  >
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 max-w-xl w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
              <h3 className="font-sora text-lg font-bold text-slate-900">
                Add New Opportunity
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Opportunity Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. National Merit Scholarship 2025"
                  value={newOpp.title}
                  onChange={(e) => setNewOpp({ ...newOpp, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Authority / Organization
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ministry of Education"
                    value={newOpp.organization}
                    onChange={(e) => setNewOpp({ ...newOpp, organization: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    value={newOpp.category}
                    onChange={(e) => setNewOpp({ ...newOpp, category: e.target.value as Opportunity["category"] })}
                    className="w-full px-3 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  >
                    <option value="scheme">Government Scheme</option>
                    <option value="scholarship">Scholarship &amp; Grant</option>
                    <option value="govt_job">Government Job</option>
                    <option value="private_job">Private Job</option>
                    <option value="internship">Internship</option>
                    <option value="course">Free Course</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Financial Benefit / Grant
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ₹50,000 / year + Tuition waiver"
                  value={newOpp.benefits}
                  onChange={(e) => setNewOpp({ ...newOpp, benefits: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Application Deadline
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 31 Dec 2025"
                    value={newOpp.deadline}
                    onChange={(e) => setNewOpp({ ...newOpp, deadline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Geographic Scope
                  </label>
                  <select
                    value={newOpp.locationScope}
                    onChange={(e) => setNewOpp({ ...newOpp, locationScope: e.target.value as Opportunity["locationScope"] })}
                    className="w-full px-3 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  >
                    <option value="All India">All India</option>
                    <option value="State">State Specific</option>
                    <option value="District">District Specific</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Official Gazette / Notification URL
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://..."
                  value={newOpp.officialSourceUrl}
                  onChange={(e) => setNewOpp({ ...newOpp, officialSourceUrl: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Short Description
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Summary of objectives and criteria..."
                  value={newOpp.shortDescription}
                  onChange={(e) => setNewOpp({ ...newOpp, shortDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                ></textarea>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-slate-600 text-xs font-semibold hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0F3832] text-white rounded-lg text-xs font-semibold hover:bg-[#14493F]"
                >
                  Publish to Platform
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
