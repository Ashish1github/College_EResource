import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearAuth, getUser } from "../utils/auth";
import { HiMenu, HiX } from "react-icons/hi"; // for hamburger icon

function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <button
      className="px-3 py-1 border rounded-md hover:bg-gray-700 transition"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const user = getUser();

  return (
    <header className="w-full sticky top-0 z-50 glass backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex-shrink-0">
          E-Resource
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#departments" className="hover:underline">
            Departments
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* Desktop Login/Logout */}
        <div className="hidden md:flex flex-shrink-0">
          {user ? (
            <LogoutButton />
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 border rounded-md hover:bg-gray-700 transition"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-900 bg-opacity-80 glass backdrop-blur-md w-full px-4 py-4 flex flex-col gap-4">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#departments" className="hover:underline">
            Departments
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          {user ? (
            <LogoutButton />
          ) : (
            <Link
              to="/login"
              className="px-3 py-1 border rounded-md hover:bg-gray-700 transition"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
} 