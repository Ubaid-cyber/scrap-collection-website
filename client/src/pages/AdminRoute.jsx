/**
 * FILE: AdminRoute.jsx
 * PURPOSE: Protects the Admin Dashboard from unauthorized users.
**/

import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const isAdmin = !!localStorage.getItem("adminToken");

  // Redirect to login if token is missing
  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}