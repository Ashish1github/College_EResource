import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const API = "http://localhost:5001/api/feedbacks";

export default function Feedbacks() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then(setFeedbacks)
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Page Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          User Testimonials
        </h1>

        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-400">
            No feedbacks available yet.
          </p>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {feedbacks.map(({ _id, name, message }) => (
              <div
                key={_id}
                className="glass w-full sm:w-80 h-64 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-[1.03] transition-transform duration-300"
              >
                {/* Avatar */}
                <FaUserCircle className="text-6xl text-blue-400 mb-4" />

                {/* Name */}
                <h3 className="text-lg font-semibold mb-2">{name}</h3>

                {/* Message */}
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-5">
                  {message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
