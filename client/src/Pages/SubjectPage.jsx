import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaBook } from "react-icons/fa"; // Subject icon
import Card from "../Components/Card"; // Reusable Card component

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

export default function SubjectPage() {
  const { deptName, semId } = useParams();

  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSubjects() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${API_BASE}/api/subjects?department=${encodeURIComponent(
            deptName
          )}&semester=${encodeURIComponent(semId)}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch subjects: ${response.statusText}`);
        }
        const data = await response.json();
        setSubjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSubjects();
  }, [deptName, semId]);

  // 🔄 Skeleton Loader
  if (loading)
    return (
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-gray-100 text-center">
          {deptName} — Semester {semId} Subjects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="glass rounded-2xl h-40 animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );

  // ❌ Error State
  if (error)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="glass p-6 rounded-2xl text-red-400 shadow-lg">
          <p className="text-lg font-medium">⚠️ {error}</p>
        </div>
      </div>
    );

  // 📭 Empty State
  if (subjects.length === 0)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="glass p-6 rounded-2xl text-gray-300 shadow-lg">
          <p className="text-lg font-medium">
            📭 No subjects found for {deptName} semester {semId}.
          </p>
        </div>
      </div>
    );

  // ✅ Success State
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-gray-100 text-center">
        {deptName} — Semester {semId} Subjects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
        {subjects.map((subject) => (
          <Card
            key={subject._id}
            title={subject.name}
            description={subject.description || ""}
            Icon={FaBook}
            to={`/department/${deptName}/semester/${semId}/subject/${encodeURIComponent(
              subject.name
            )}`}
            className="hover:shadow-xl hover:scale-105 transition-transform duration-300 w-full"
          />
        ))}
      </div>
    </div>
  );
}
