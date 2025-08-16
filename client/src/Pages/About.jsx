import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-lg">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center">
          About This Project
        </h1>

        {/* Project Description */}
        <p className="mb-8 text-lg text-gray-300 leading-relaxed text-center">
          The <span className="text-blue-400 font-semibold">E-Resource Platform</span> 
          is a digital hub created to make academic preparation easier for students. 
          It allows browsing of <span className="text-blue-400">department & semester-wise study materials</span>, 
          exploring <span className="text-blue-400">skill-based resources</span>, 
          and quick access to FAQs, feedback, and other important information.
        </p>

        {/* Developer Info */}
        <div className="bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Developer</h2>
          <p className="mb-4 text-gray-200 leading-relaxed">
            <span className="font-medium text-white">Ashish Kumar</span> — Student at{" "}
            <span className="text-blue-400 font-semibold">National Institute of Technology Patna</span>, 
            Department of Computer Science & Engineering, Batch of 2026.  
            A passionate MERN stack developer who loves building clean, modern, and 
            user-friendly web applications.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://linkedin.com/in/ashishkumar"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} E-Resource Platform — Built with ❤️ using the MERN Stack
        </p>
      </div>
    </div>
  );
}
