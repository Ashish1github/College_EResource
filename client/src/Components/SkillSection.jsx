 import React from "react"; 
import Card from "./Card";
import { Monitor, Code, Cpu } from "lucide-react";

const SKILLS = [
  { title: "Web Development", description: "Frontend + Backend resources", to: "/skills/WebDev", Icon: Monitor },
  { title: "DSA", description: "Data Structures & Algorithms", to: "/skills/DSA", Icon: Code },
  { title: "AI/ML", description: "Machine Learning resources", to: "/skills/AI-ML", Icon: Cpu },
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-12">
      <h2 className="text-2xl font-bold mb-10 text-white text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {SKILLS.map((skill) => (
          <Card
            key={skill.title}
            title={skill.title}
            description={skill.description}
            to={skill.to}
            Icon={skill.Icon}
          />
        ))}
      </div>
    </section>
  );
} 