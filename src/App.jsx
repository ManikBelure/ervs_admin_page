import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import RoleManagement from "./components/RoleManagement";
import UserManagement from "./components/UserManagement";
import ErrorPage from "./pages/ErrorPage";
import MainLayout from "./Layout/MainLayout";
import PermissionPage from "./pages/PermissionPage";

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Dashboard Layout Routes */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/dashboard/user-management"
          element={
            <MainLayout>
              <UserManagement />
            </MainLayout>
          }
        />

        <Route
          path="/dashboard/role-management"
          element={
            <MainLayout>
              <RoleManagement />
            </MainLayout>
          }
        />

        {/* Permission Page (IMPORTANT: wrap inside MainLayout) */}
        <Route
          path="/dashboard/role-management/:id/permission"
          element={
            <MainLayout>
              <PermissionPage />
            </MainLayout>
          }
        />

        {/* Error Route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
