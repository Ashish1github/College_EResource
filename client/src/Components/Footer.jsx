import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 py-8 glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* Logo & Tagline */}
          <div>
            <h4 className="font-bold text-lg">E-Resource</h4>
            <p className="text-sm text-gray-300">
              Department & skill-wise resources for students
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 items-center">
            <a
              href="https://forms.gle/"
              target="_blank"
              rel="noreferrer"
              className="text-sm hover:underline underline-offset-4"
            >
              Drop Resource (Google Form)
            </a>

            <Link
              to="/AboutUs"
              className="text-sm hover:underline underline-offset-4"
            >
              About Us
            </Link>

            <Link
              to="/Feedbacks"
              className="text-sm hover:underline underline-offset-4"
            >
              Feedback
            </Link>

            <Link
              to="/FAQs"
              className="text-sm hover:underline underline-offset-4"
            >
              FAQs
            </Link>
          </div>

          {/* Social Links with Icons */}
          <div className="flex gap-4 items-center text-lg">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} E-Resource
        </div>
      </div>
    </footer>
  );
}
