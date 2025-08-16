import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Semester() {
  const { deptName } = useParams();
  const navigate = useNavigate();

  const semesters = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{deptName} — Select Semester</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {semesters.map((s) => (
          <div
            key={s}
            onClick={() => navigate(`/department/${deptName}/semester/${s}`)}
            className="glass p-6 rounded-xl cursor-pointer hover:scale-105 transition"
          >
            <h2 className="text-lg font-semibold">Semester {s}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
