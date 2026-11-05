"use client";

import { useState } from "react";
import { MOCK_CATEGORIES } from "../../../data/mockData";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState(MOCK_CATEGORIES);
  const [showAdd, setShowAdd] = useState(false);
  const [newCat, setNewCat] = useState({ name: "", desc: "", icon: "category" });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setCategories([
      ...categories,
      {
        id: newCat.name.toLowerCase().replace(/\s+/g, "_"),
        name: newCat.name,
        desc: newCat.desc,
        icon: newCat.icon,
        count: 0,
      },
    ]);
    setShowAdd(false);
    setNewCat({ name: "", desc: "", icon: "category" });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
            Taxonomy &amp; Segments
          </span>
          <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
            Category Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Organize main civic categories, subcategories, eligibility tags, and opportunity types.
          </p>
        </div>

        <button
          onClick={() => setShowAdd(!showAdd)}
          className="px-4 py-2 bg-[#0F3832] text-white rounded-xl text-xs font-semibold hover:bg-[#14493F]"
        >
          + Add Category
        </button>
      </div>

      {showAdd && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-2xl border border-[#D5E4E0] space-y-4">
          <h3 className="font-sora font-bold text-sm">Create New Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Category Name"
              value={newCat.name}
              onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
              className="px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-sm"
            />
            <input
              type="text"
              required
              placeholder="Description"
              value={newCat.desc}
              onChange={(e) => setNewCat({ ...newCat, desc: e.target.value })}
              className="px-3.5 py-2.5 bg-[#FBFBFA] border border-slate-200 rounded-lg text-sm"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowAdd(false)}
              className="px-3 py-1.5 border rounded-lg text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-[#0F3832] text-white rounded-lg text-xs font-semibold"
            >
              Save
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((c) => (
          <div key={c.id} className="bg-white p-6 rounded-2xl border border-[#D5E4E0] shadow-subtle flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E8F1EE] text-[#0F3832] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">{c.icon}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-sora text-sm font-bold text-slate-900">{c.name}</h3>
                <span className="text-xs font-semibold text-slate-500">{c.count} items</span>
              </div>
              <p className="text-xs text-slate-600">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

