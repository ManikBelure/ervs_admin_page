import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function PermissionPage() {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 w-full p-8">
      {/* ---------- HEADER (LEFT TOP) ---------- */}
      <div className="flex items-center gap-3 mb-10">
        <button
          onClick={() => navigate("/dashboard/role-management")}
          className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium transition"
        >
          <FaArrowLeft className="text-lg" />
          Back
        </button>

        <h1 className="text-2xl font-bold text-gray-800">Role Permissions</h1>
      </div>

      {/* ---------- CENTERED CARD ---------- */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Permissions for
          </h2>

          {/* Example Permission Row */}
          <div className="flex items-center justify-between pb-4 border-b">
            <span className="px-4 py-1 bg-indigo-100 text-indigo-600 rounded-lg font-semibold">
              Publisher
            </span>

            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="publisher" />
                <span>Enable</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="publisher" />
                <span>Disable</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
