import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaUserShield, FaSignOutAlt } from "react-icons/fa";
import { FaChevronDown, FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import ugandaFlag from "../assets/uganda-flag.png"; // adjust path if needed

export default function Sidebar({ collapsed, setCollapsed }) {
  const [openMenus, setOpenMenus] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // ⭐ Detect active parent menu
  const isUserManagementActive = location.pathname.includes(
    "/dashboard/user-management"
  );

  const isRoleManagementActive = location.pathname.includes(
    "/dashboard/role-management"
  );

  // ⭐ Helper to apply color based on active route
  const isActive = (path) =>
    location.pathname === path ? "text-white font-semibold" : "text-gray-300";

  return (
    <div
      className={`relative flex flex-col h-[calc(100vh-3rem)] bg-gray-700 text-white font-extrabold shadow-xl transition-all duration-300 ease-in-out ${
        collapsed ? "w-20" : "w-70"
      }`}
    >
      {/* Header / Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-700 relative">
        <img src={ugandaFlag} alt="Uganda Flag" className="w-11 h-10 mb-3" />
        {!collapsed && (
          <div>
            <h1 className="font-bold text-md leading-tight">
              Elections
              <br />
              <span className="font-bold text-md leading-tigh">
                Results Portal
              </span>
            </h1>
          </div>
        )}

        {/* Floating Collapse Button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`absolute top-1/2 -right-3 transform -translate-y-1/2 
          bg-black text-white p-1.5 rounded-full shadow-md 
          hover:bg-gray-800  transition-all duration-300 ease-in-out`}
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Menu */}
      <nav className="px-3 py-4 space-y-2">
        {/* Dashboard */}
        <button
          onClick={() => navigate("/dashboard")}
          title="DashBoard"
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition ${
            location.pathname === "/dashboard"
              ? "text-white font-semibold"
              : "text-gray-200"
          }`}
        >
          <MdDashboard className="text-lg" />
          {!collapsed && <span>Dashboard</span>}
        </button>

        {/* User Management */}
        <div className="mt-2">
          <button
            onClick={() => toggleMenu("user")}
            title="User Management"
            className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition ${
              isUserManagementActive
                ? "text-white font-semibold"
                : "text-gray-200"
            }`}
          >
            <span className="flex items-center gap-3">
              <FaUsers className="text-lg" />
              {!collapsed && "User Management"}
            </span>
            {!collapsed &&
              (openMenus.user ? <FaChevronDown /> : <FaChevronRight />)}
          </button>

          {!collapsed && openMenus.user && (
            <div className="ml-9 mt-1 space-y-1 text-sm transition-all duration-300 ease-in-out">
              <button
                onClick={() => navigate("/dashboard/user-management")}
                className={`block w-full text-left ${
                  isUserManagementActive
                    ? "text-white font-semibold"
                    : "text-gray-300"
                }`}
              >
                View Users
              </button>
            </div>
          )}
        </div>

        {/* Role Management */}
        <div className="mt-2">
          <button
            onClick={() => toggleMenu("role")}
            title="Role Management"
            className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition ${
              isRoleManagementActive
                ? "text-white font-semibold"
                : "text-gray-200"
            }`}
          >
            <span className="flex items-center gap-3">
              <FaUserShield className="text-lg" />
              {!collapsed && "Role Management"}
            </span>
            {!collapsed &&
              (openMenus.role ? <FaChevronDown /> : <FaChevronRight />)}
          </button>

          {!collapsed && openMenus.role && (
            <div className="ml-9 mt-1 space-y-1 text-sm transition-all duration-300 ease-in-out">
              <button
                onClick={() => navigate("/dashboard/role-management")}
                className={`block w-full text-left ${
                  isRoleManagementActive
                    ? "text-white font-semibold"
                    : "text-gray-300"
                }`}
              >
                View Roles
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Logout */}
      <div className="px-4 py-3">
        <button
          onClick={handleLogout}
          title="Logout"
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-gray-200 transition"
        >
          <FaSignOutAlt className="text-lg" />
          {!collapsed && "Logout"}
        </button>
      </div>
    </div>
  );
}
