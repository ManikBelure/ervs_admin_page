import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import bgImage from "../assets/login-bg.jpg";

export default function LoginForm() {
  const staticUser = {
    email: "demo@gmail.com",
    password: "12345",
    name: "Demo",
    role: "Super Admin",
    priority: 1,
  };

  const [email] = useState(staticUser.email);
  const [password] = useState(staticUser.password);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    localStorage.setItem("user", JSON.stringify(staticUser));
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* MAIN LOGIN SECTION */}
      <div
        className="relative flex-1 w-full flex justify-center items-center bg-primary-light bg-cover bg-center bg-no-repeat px-3 sm:px-4 md:px-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* LOGIN CENTER BOX */}
        <div className="w-full flex justify-center">
          <div className="relative z-10 w-full max-w-sm mx-auto bg-white/95 backdrop-blur-md shadow-xl p-5 sm:p-6 rounded-lg">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-5 sm:mb-6">
              Login
            </h2>

            {error && <p className="text-red-600 text-center">{error}</p>}

            <form onSubmit={handleLogin} className="space-y-3">
              {/* Email */}
              <div>
                <label className="text-xs font-medium">User ID</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-100"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="text-xs font-medium">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  readOnly
                  className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 text-sm bg-gray-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[60%] -translate-y-1/2 text-gray-500 text-sm"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2.5 rounded-md text-sm font-semibold hover:bg-gray-900 transition"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
