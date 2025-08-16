import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authHeader } from "../utils/auth";
import logo from "../assets/resource-logo.png"; // ✅ Put your uploaded logo in /src/assets and import it

const API_BASE = process.env.REACT_APP_API_BASE;

export default function ResourcePage() {
  const { deptName, semId, subjectName } = useParams();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadResources() {
      setLoading(true);
      setError(null);

      try {
        const url = new URL(`${API_BASE}/api/protected/resource`);
        url.searchParams.append("department", deptName);
        url.searchParams.append("semester", semId);
        url.searchParams.append("subjectName", subjectName);

        const res = await fetch(url, {
          headers: { ...authHeader() },
        });

        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message || "Failed to load resources");
        }

        const data = await res.json();
        setResources(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadResources();
  }, [deptName, semId, subjectName]);

  if (loading) return <p className="text-gray-400">Loading resources...</p>;
  if (error) return <p className="text-red-500 font-semibold">{error}</p>;
  if (!resources || resources.length === 0)
    return <p>No resources found for {subjectName}.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 glass rounded-2xl flex gap-8 items-start">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        {resources.map((resource, idx) => (
          <div key={idx} className="space-y-6">
            <h1 className="text-3xl font-bold mb-2">
              {resource.subjectName} — Resources
            </h1>

            {/* Drive Links */}
            <section>
              <h2 className="text-xl font-semibold mb-1">Drive Links:</h2>
              {resource.driveLinks.length ? (
                <ul className="list-disc list-inside space-y-1">
                  {resource.driveLinks.map((d, i) => (
                    <li key={i}>
                      <a
                        href={d.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {d.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No Drive links available.</p>
              )}
            </section>

            {/* Video Links */}
            <section>
              <h2 className="text-xl font-semibold mb-1">Video Links:</h2>
              {resource.videoLinks.length ? (
                <ul className="list-disc list-inside space-y-1">
                  {resource.videoLinks.map((v, i) => (
                    <li key={i}>
                      <a
                        href={v.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {v.title}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No Video links available.</p>
              )}
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-xl font-semibold mb-1">Tips:</h2>
              <p className="text-gray-300">
                {resource.tips || "No tips available."}
              </p>
            </section>
          </div>
        ))}
      </div>

      {/* Right Side Logo */}

<div className="w-96 flex-shrink-0 -ml-16">  
  <img
    src={logo}
    alt="Resource Logo"
    className="w-full h-auto opacity-90 drop-shadow-lg" 
  />
</div>

    </div>
  );
}
