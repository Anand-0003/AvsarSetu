"use client";

import { useState } from "react";
import { MOCK_FAMILY_MEMBERS } from "../../../data/mockData";
import { FamilyMember } from "../../../types";

export default function FamilyProfilesPage() {
  const [members, setMembers] = useState<FamilyMember[]>(MOCK_FAMILY_MEMBERS);
  const [selectedMember, setSelectedMember] = useState<FamilyMember>(members[0]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    relationship: "Brother" as FamilyMember["relationship"],
    age: 18,
    educationLevel: "12th Pass",
    employmentStatus: "Student",
    state: "Rajasthan",
    district: "Jaipur",
    annualIncome: 0,
  });

  const handleAddMember = (e: React.FormEvent) => {
    e.preventDefault();
    const created: FamilyMember = {
      id: `fam-${Date.now()}`,
      ...newMember,
      savedCount: 0,
      applicationsCount: 0,
    };
    setMembers([...members, created]);
    setSelectedMember(created);
    setShowAddModal(false);
    setNewMember({
      name: "",
      relationship: "Brother",
      age: 18,
      educationLevel: "12th Pass",
      employmentStatus: "Student",
      state: "Rajasthan",
      district: "Jaipur",
      annualIncome: 0,
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-subtle flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
            Household Opportunity Network
          </span>
          <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
            Family Profile Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Manage scheme matching and application tracking for your entire family from one centralized account.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F] transition-all cursor-pointer shrink-0"
        >
          <span className="material-symbols-outlined text-[16px]">person_add</span>
          <span>Add Family Member</span>
        </button>
      </div>

      {/* Member Selection Pills */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2">
        {members.map((m) => (
          <button
            key={m.id}
            onClick={() => setSelectedMember(m)}
            className={`px-4 py-3 rounded-2xl border text-left shrink-0 transition-all cursor-pointer ${
              selectedMember.id === m.id
                ? "bg-[#0F3832] text-white border-[#0F3832] shadow-sm"
                : "bg-white text-slate-700 border-[#D5E4E0] hover:bg-slate-50"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold">{m.name}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  selectedMember.id === m.id
                    ? "bg-white/20 text-white"
                    : "bg-[#E8F1EE] text-[#0F3832]"
                }`}
              >
                {m.relationship}
              </span>
            </div>
            <span className="text-[11px] opacity-80 block">
              Age {m.age} · {m.educationLevel}
            </span>
          </button>
        ))}
      </div>

      {/* Active Selected Member Profile Details */}
      <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 shadow-card">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div>
            <h2 className="font-sora text-xl font-bold text-slate-900">
              {selectedMember.name}&apos;s Profile Overview
            </h2>
            <span className="text-xs text-slate-500">
              Relationship: {selectedMember.relationship} · Domicile: {selectedMember.state}
            </span>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#E8F1EE] text-[#0F3832] text-xs font-semibold">
            {selectedMember.savedCount} Saved Schemes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold mb-1">
              Education Level
            </span>
            <span className="font-sora font-semibold text-slate-800">
              {selectedMember.educationLevel}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold mb-1">
              Employment Status
            </span>
            <span className="font-sora font-semibold text-slate-800">
              {selectedMember.employmentStatus}
            </span>
          </div>

          <div className="p-4 rounded-xl bg-[#FBFBFA] border border-slate-100">
            <span className="text-slate-400 block text-[11px] uppercase font-bold mb-1">
              Annual Income
            </span>
            <span className="font-sora font-semibold text-slate-800">
              ₹{(selectedMember.annualIncome / 100000).toFixed(1)} Lakh / yr
            </span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#E8F1EE] border border-[#D5E4E0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-sora text-sm font-bold text-[#0F3832]">
              Check Opportunities Specifically for {selectedMember.name}
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Run eligibility matching using {selectedMember.name}&apos;s age and educational qualification.
            </p>
          </div>
          <a
            href={`/eligibility`}
            className="px-5 py-2.5 rounded-xl bg-[#0F3832] text-white text-xs font-semibold hover:bg-[#14493F] shrink-0"
          >
            Run Eligibility Check
          </a>
        </div>
      </div>

      {/* Add Member Modal Dialog */}
      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-[#D5E4E0] rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-5">
              <h3 className="font-sora text-lg font-bold text-slate-900">
                Add Family Member
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddMember} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Member Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={newMember.name}
                  onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Relationship
                  </label>
                  <select
                    value={newMember.relationship}
                    onChange={(e) => setNewMember({ ...newMember, relationship: e.target.value as FamilyMember["relationship"] })}
                    className="w-full px-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  >
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Brother">Brother</option>
                    <option value="Sister">Sister</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Child">Child</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={newMember.age}
                    onChange={(e) => setNewMember({ ...newMember, age: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Highest Education
                </label>
                <input
                  type="text"
                  placeholder="e.g. 10th Pass, B.Sc, Diploma"
                  value={newMember.educationLevel}
                  onChange={(e) => setNewMember({ ...newMember, educationLevel: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-slate-900 text-sm focus:outline-none focus:border-[#0F3832]"
                />
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
                  Save Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
