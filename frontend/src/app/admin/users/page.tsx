"use client";

import { useState } from "react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([
    { id: "u-1", name: "Rahul Sharma", email: "rahul.sharma@example.in", role: "Citizen (Student)", state: "Rajasthan", status: "Active" },
    { id: "u-2", name: "Priya Patel", email: "priya.patel@example.in", role: "Citizen (Job Seeker)", state: "Gujarat", status: "Active" },
    { id: "u-3", name: "Amit Kumar", email: "amit.k@example.in", role: "Verification Officer", state: "Central", status: "Active" },
    { id: "u-4", name: "Suresh Meena", email: "suresh.m@example.in", role: "Citizen", state: "Rajasthan", status: "Blocked" },
  ]);

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" } : u
      )
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-bold text-[#D97706] uppercase tracking-wider block mb-1 font-sora">
          Citizen Directory &amp; RBAC
        </span>
        <h1 className="font-sora text-2xl sm:text-3xl font-bold text-slate-900">
          User Management
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Review registered accounts, assigned verification scopes, and status controls.
        </p>
      </div>

      <div className="overflow-x-auto bg-white border border-[#D5E4E0] rounded-2xl shadow-card">
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-[#FBFBFA] text-slate-500 font-bold uppercase text-[11px]">
              <th className="p-4">User</th>
              <th className="p-4">Role</th>
              <th className="p-4">State Scope</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-slate-50">
                <td className="p-4">
                  <div className="font-semibold text-slate-900">{u.name}</div>
                  <span className="text-xs text-slate-500">{u.email}</span>
                </td>
                <td className="p-4">{u.role}</td>
                <td className="p-4">{u.state}</td>
                <td className="p-4">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      u.status === "Active"
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {u.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => toggleStatus(u.id)}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold hover:bg-slate-50 cursor-pointer"
                  >
                    {u.status === "Active" ? "Block" : "Unblock"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

