import React from "react";
import ugandaFlag from "../assets/uganda-flag.png";
import DashboardDropdown from "../pages/DashboardDropdown";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <img src={ugandaFlag} alt="Uganda Flag" className="w-10 h-8" />
          <div>
            <h1 className="text-sm font-bold leading-tight">Elections</h1>
            <h2 className="text-sm font-bold leading-tight">Results Portal</h2>
          </div>
        </div>
      </div>

      {/* Right: Menu Dropdown only */}
      <div className="flex items-center px-10 justify-end">
        <DashboardDropdown />
      </div>
    </header>
  );
}
