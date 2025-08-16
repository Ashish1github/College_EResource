import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = process.env.REACT_APP_API_BASE;

export default function SkillResourcePage() {
  const { skillId } = useParams();
  const [resource, setResource] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setResource(null);

    fetch(`${API_BASE}/api/skills/${skillId.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch resources for ${skillId}`);
        return res.json();
      })
      .then((data) => {
        setResource(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [skillId]);

  if (loading) return <p className="text-gray-400">Loading resources...</p>;
  if (error) return <p className="text-red-500 font-semibold">{error}</p>;
  if (!resource) return <p>No resources found for {skillId}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 glass rounded-2xl">
      <h1 className="text-3xl font-bold mb-4">{skillId.toUpperCase()} — Resources</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Materials</h2>
        {resource.materials.length ? (
          <ul className="list-disc list-inside space-y-2">
            {resource.materials.map((m, idx) => (
              <li key={idx}>
                <a href={m.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                  {m.title}
                </a>
              </li>
            ))}
          </ul>
        ) : <p>No materials available.</p>}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Videos</h2>
        {resource.videos.length ? (
          <ul className="list-disc list-inside space-y-2">
            {resource.videos.map((v, idx) => (
              <li key={idx}>
                <a href={v.link} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
                  {v.title}
                </a>
              </li>
            ))}
          </ul>
        ) : <p>No videos available.</p>}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Tips</h2>
        <p className="text-gray-300">{resource.tips || "No tips available."}</p>
      </section>
    </div>
  );
}
