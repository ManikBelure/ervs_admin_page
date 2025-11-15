import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", { hour12: true }).toUpperCase()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", { hour12: true }).toUpperCase()
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex w-full h-screen overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Right section */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center bg-white px-6 py-3 shadow-sm border-b w-full">
          <div className="text-gray-500 text-[15px]">
            <p>
              {new Date().toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              , {currentTime}
            </p>
          </div>

          <div className="flex items-center gap-5">
            {user?.priority && (
              <span className="text-[13px] px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded-full">
                Priority: {user.priority}
              </span>
            )}

            <div className="text-right leading-tight">
              <p className="font-bold text-gray-800 text-lg">{user?.name}</p>
              <p className="text-[15px] text-gray-500">{user?.role}</p>
            </div>

            <img
              src={`https://ui-avatars.com/api/?name=${user?.name || "User"}`}
              className="w-10 h-10 rounded-full border shadow"
              alt="avatar"
            />
          </div>
        </div>

        {/* Content Area - No scrolling */}
        <div className="flex-1 overflow-hidden p-6 w-full">{children}</div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
