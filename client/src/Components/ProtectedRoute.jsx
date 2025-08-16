// src/Components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  // Get token and user from localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // If not logged in, redirect to login
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // If role is specified, check user's role
  if (role && user.role !== role) {
    // Unauthorized access
    return <Navigate to="/" replace />;
  }

  // Authorized, render children
  return children;
}
