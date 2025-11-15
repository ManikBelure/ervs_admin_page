import React from "react";
import { FaLock, FaUserShield, FaUsers } from "react-icons/fa";

export default function AccessManagement() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        {/* Page Title */}
        <div className="flex items-center gap-3 mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
          <FaLock className="text-indigo-600 text-3xl" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Access Management
          </h1>
        </div>

        {/* Info section */}
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          Manage user access levels, permissions, and secure resources within
          the application. Here you can assign roles, update permissions, and
          control access for sensitive modules.
        </p>

        {/* Example content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Roles Summary */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <FaUserShield className="text-indigo-500 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Role-Based Access
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Assign users to specific roles and define which actions they are
              allowed to perform. Easily manage roles and permissions in one
              place.
            </p>
          </div>

          {/* Users Summary */}
          <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <FaUsers className="text-green-500 text-2xl" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                User Permissions
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Review and modify individual user permissions. Temporarily disable
              or permanently restrict access when necessary.
            </p>
          </div>
        </div>

        {/* Placeholder for future table or controls */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
            Permission Matrix (Coming Soon)
          </h3>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-10 text-center text-gray-500 dark:text-gray-400">
            🚧 Under Development — Permission table and management tools will
            appear here.
          </div>
        </div>
      </div>
    </section>
  );
}
