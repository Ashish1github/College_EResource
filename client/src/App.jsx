import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AboutUs from "./Pages/About";
import Feedbacks from "./Pages/FeedbackPage";
import FAQs from "./Pages/FAQPage";
import DepartmentPage from "./Pages/DepartmentPage";
import SemesterPage from "./Pages/SemesterPage";
import SubjectPage from "./Pages/SubjectPage";
import ResourcePage from "./Pages/ResourcePage";
import SkillPage from "./Pages/SkillPage";
import SkillResource from "./Pages/SkillResource";
import AdminPanel from "./Pages/AdminDashboard";
import AdminFaqManager from "./Pages/Admin/AdminFaqManager";
import AdminFeedbackManager from "./Pages/Admin/AdminFeedbackManager";
import ProtectedRoute from "./Components/ProtectedRoute"; // updated
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const API_BASE = process.env.REACT_APP_API_BASE;

export default function App() {
  const location = useLocation();

  // Only show header/footer on home page
  const showHeaderFooter = location.pathname === "/";

  useEffect(() => {
    fetch(`${API_BASE}/api/visits/increment`, { method: "POST" })
      .catch((err) => console.error("Failed to increment visits:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {showHeaderFooter && <Header />}

      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Feedbacks" element={<Feedbacks />} />
          <Route path="/FAQs" element={<FAQs />} />

          {/* Department & Resource Navigation */}
          <Route path="/department" element={<DepartmentPage />} />
          <Route path="/department/:deptName" element={<SemesterPage />} />
          <Route
            path="/department/:deptName/semester/:semId"
            element={<SubjectPage />}
          />

          {/* Protected Resource Page (user or admin can access) */}
          <Route
            path="/department/:deptName/semester/:semId/subject/:subjectName"
            element={
              <ProtectedRoute>
                <ResourcePage />
              </ProtectedRoute>
            }
          />

          {/* Skills Pages */}
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/skills/:skillId" element={<SkillResource />} />

          {/* Admin-only Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminPanel />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/faqsManager"
            element={
              <ProtectedRoute role="admin">
                <AdminFaqManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/feedbacksManager"
            element={
              <ProtectedRoute role="admin">
                <AdminFeedbackManager />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {showHeaderFooter && <Footer />}
    </div>
  );
}
