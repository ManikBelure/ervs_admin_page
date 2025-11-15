import React, { useEffect, useState } from "react";
import { FaUser, FaUserShield } from "react-icons/fa";

export default function Dashboard() {
  const [userCount] = useState(12);
  const [rolesCount] = useState(2);

  useEffect(() => {
    // placeholder for future API calls
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6 lg:px-10 py-8">
      {/* PAGE HEADER */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          Uganda Elections Dashboard
        </h1>
        <p className="text-gray-500 mt-1 text-sm">
          Overview of system KPIs and statistics
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* TOTAL USERS CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div
            className="w-14 h-14 flex items-center justify-center 
            bg-indigo-100 text-indigo-600 rounded-2xl text-3xl shadow-inner"
          >
            <FaUser />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Total Users</p>
            <p className="text-4xl font-extrabold text-gray-800 mt-1">
              {userCount}
            </p>
          </div>
        </div>

        {/* TOTAL ROLES CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-5 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div
            className="w-14 h-14 flex items-center justify-center 
            bg-purple-100 text-purple-600 rounded-2xl text-3xl shadow-inner"
          >
            <FaUserShield />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Total Roles</p>
            <p className="text-4xl font-extrabold text-gray-800 mt-1">
              {rolesCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
