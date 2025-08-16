import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipboardList, MessageSquare, Eye } from "lucide-react";
import Visits from "../Components/admin/Visits";
import { clearAuth, getUser } from "../utils/auth";

// LogoutButton only for dashboard
function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuth();
    navigate("/login", { replace: true }); // Replace history so user can't go back
  };

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 transition text-white font-semibold shadow-md"
    >
      Logout
    </button>
  );
}

export default function AdminDashboard() {
  const user = getUser();

  return (
    <div className="max-w-7xl mx-auto p-6 text-white space-y-10">
      
      {/* Header / Navbar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-4xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>

        {/* Navbar Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            to="/admin/faqsManager"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition shadow-md"
          >
            <ClipboardList size={20} /> Manage FAQs
          </Link>
          <Link
            to="/admin/feedbacksManager"
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-green-600 hover:bg-green-700 transition shadow-md"
          >
            <MessageSquare size={20} /> Manage Feedbacks
          </Link>
          {user && <LogoutButton />}
        </div>
      </div>

      {/* Stats Card */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div className="glass p-6 rounded-2xl flex items-center gap-4 shadow-lg hover:shadow-xl transition">
          <Eye size={40} className="text-blue-400" />
          <div>
            <h2 className="text-lg font-semibold text-gray-200">Total Site Visits</h2>
            <Visits />
          </div>
        </div>
      </div>
    </div>
  );
}
