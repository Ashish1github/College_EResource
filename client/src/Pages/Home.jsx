import React from "react";
import DepartmentSection from "../Components/DepartmentSection";
import SkillSection from "../Components/SkillSection";
import ContactSection from "../Components/ContactSection";
import logo from "../assets/logo.png"; // 

export default function Home() {
  return (
    <div id="home" className="space-y-12">
<section className="pt-6">
  <div className="glass rounded-2xl p-8 min-h-[400px] flex flex-col md:flex-row items-center justify-start gap-6">
    {/* Text Section */}
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold">
        Welcome to the E-Resource Platform
      </h1>
      <p className="text-gray-300 text-lg">
        Access department-wise study materials, past year questions, syllabus, and skill resources—all in one place.
      </p>
      <p className="text-gray-400 text-base">
        Plan your learning, explore skill tracks, and stay ahead in your academics effortlessly.
      </p>
    </div>

    {/* Logo Section */}
    <div className="flex-shrink-0">
      <img
        src={logo}
        alt="E-Resource Platform Logo"
        className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] object-contain"
      />
    </div>
  </div>
</section>



      <DepartmentSection />
      <SkillSection />
      <ContactSection />
    </div>
  );
}