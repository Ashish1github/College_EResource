import React, { useEffect, useState } from "react";

const API = "http://localhost:5001/api/feedbacks";

export default function AdminFeedbackManager() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({ name: "", message: "" });
  const [editId, setEditId] = useState(null);

  // Fetch all feedbacks
  const fetchFeedbacks = async () => {
    try {
      const token = localStorage.getItem("token"); // For protected routes
      const res = await fetch(API, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const data = await res.json();
      setFeedbacks(data);
    } catch (err) {
      console.error("Failed to fetch feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []); // ✅ No missing dependency warning

  // Add or update feedback
  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? "PUT" : "POST";
    const url = editId ? `${API}/${editId}` : API;

    try {
      const token = localStorage.getItem("token"); // Admin token
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to submit feedback");
      }

      setForm({ name: "", message: "" });
      setEditId(null);
      fetchFeedbacks(); // Refresh list
    } catch (err) {
      console.error("Failed to submit feedback:", err);
    }
  };

  // Edit feedback
  const handleEdit = (fb) => {
    setForm({ name: fb.name, message: fb.message });
    setEditId(fb._id);
  };

  // Delete feedback
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: { Authorization: token ? `Bearer ${token}` : "" },
      });

      if (!res.ok) throw new Error("Failed to delete feedback");
      fetchFeedbacks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-gray-950 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">Manage Feedbacks</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-900 p-4 rounded-xl">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        >
          {editId ? "Update Feedback" : "Add Feedback"}
        </button>
      </form>

      {/* Feedback List */}
      <ul className="mt-6 space-y-4">
        {feedbacks.map((fb) => (
          <li
            key={fb._id}
            className="bg-gray-800 p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{fb.name}</h3>
              <p className="text-gray-400">{fb.message}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(fb)}
                className="bg-yellow-500 px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(fb._id)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
