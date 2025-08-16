 import React from "react";
import Card from "./Card";
import { Cpu, Zap, Settings, Home, Layers } from "lucide-react"; // Correct icons

const DEPARTMENTS = [
  { title: "CSE", description: "Computer Science & Engineering", to: "/department/CSE", Icon: Cpu },
  { title: "ECE", description: "Electronics & Communication", to: "/department/ECE", Icon: Cpu },
  { title: "EE", description: "Electrical Engineering", to: "/department/EE", Icon: Zap },
  { title: "ME", description: "Mechanical Engineering", to: "/department/ME", Icon: Settings },
  { title: "CE", description: "Civil Engineering", to: "/department/CE", Icon: Home },
  { title: "MNC", description: "MNC & Interdisciplinary", to: "/department/MNC", Icon: Layers },
];

export default function DepartmentSection() {
  return (
    <section id="departments" className="py-12">
      <h2 className="text-2xl font-bold mb-10 text-white text-center">Departments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {DEPARTMENTS.map((dept) => (
          <Card
            key={dept.title}
            title={dept.title}
            description={dept.description}
            to={dept.to}
            Icon={dept.Icon}
          />
        ))}
      </div>
    </section>
  );
} 