import React from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      {/* Error Icon or Illustration */}
      <div className="text-5xl font-bold text-indigo-600 mb-4">404</div>

      {/* Error Text */}
      <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
        Page Not Found
      </h1>
      <p className="text-gray-500 text-center font-semibold mb-8 max-w-lg">
        The page you’re looking for doesn’t exist or has been moved. Please
        check the URL or go back to the dashboard.
      </p>

      {/* Back to Dashboard Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-3 rounded-lg shadow-md transition-transform transform hover:scale-[1.03]"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
