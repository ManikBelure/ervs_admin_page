import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("⚠️ Please enter your email.");
      return;
    }

    // Simulate email submit
    setMessage("📧 Reset link sent to your email!");

    setTimeout(() => {
      navigate("/reset-password");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Forgot Password
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Enter your email to receive a reset link
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition"
        >
          Send Reset Link
        </button>

        {message && <p className="mt-3 text-gray-700 text-sm">{message}</p>}

        <p
          onClick={() => navigate("/")}
          className="mt-4 text-indigo-600 text-sm cursor-pointer hover:underline"
        >
          ← Back to Login
        </p>
      </form>
    </div>
  );
}
