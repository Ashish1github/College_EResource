import React, { useEffect, useState, useCallback } from "react";

// Hardcoded backend URL
const API = "http://localhost:5001/api/faqs";

export default function AdminFaqManager() {
  const [faqs, setFaqs] = useState([]);
  const [form, setForm] = useState({ question: "", answer: "" });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");

  // Fetch all FAQs
  const fetchFaqs = useCallback(async () => {
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Failed to fetch FAQs");
      const data = await res.json();
      setFaqs(data);
    } catch (err) {
      console.error("Failed to fetch FAQs:", err);
      setError("Could not load FAQs. Please try again later.");
    }
  }, []);

  // Add or update FAQ
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editId ? `${API}/${editId}` : API;
    const method = editId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit FAQ");
      setForm({ question: "", answer: "" });
      setEditId(null);
      fetchFaqs();
    } catch (err) {
      console.error("Failed to submit FAQ:", err);
      setError("Could not submit FAQ. Please try again.");
    }
  };

  // Edit FAQ
  const handleEdit = (faq) => {
    setForm({ question: faq.question, answer: faq.answer });
    setEditId(faq._id);
  };

  // Delete FAQ
  const handleDelete = async (id) => {
    if (window.confirm("Delete this FAQ?")) {
      try {
        const res = await fetch(`${API}/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Failed to delete FAQ");
        fetchFaqs();
      } catch (err) {
        console.error("Failed to delete FAQ:", err);
        setError("Could not delete FAQ. Please try again.");
      }
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, [fetchFaqs]);

  return (
    <div className="p-6 bg-gray-950 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Manage FAQs</h1>

      {error && <div className="mb-4 text-red-400">{error}</div>}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4 bg-gray-800 p-4 rounded-lg">
        <input
          type="text"
          placeholder="Question"
          value={form.question}
          onChange={(e) => setForm({ ...form, question: e.target.value })}
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <textarea
          placeholder="Answer"
          value={form.answer}
          onChange={(e) => setForm({ ...form, answer: e.target.value })}
          required
          className="w-full p-2 rounded bg-gray-700 text-white"
        />
        <button type="submit" className="bg-blue-500 px-4 py-2 rounded text-white">
          {editId ? "Update FAQ" : "Add FAQ"}
        </button>
      </form>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq._id} className="bg-gray-800 p-4 rounded-lg flex justify-between">
            <div>
              <h3 className="font-semibold">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(faq)}
                className="bg-yellow-500 px-3 py-1 rounded text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(faq._id)}
                className="bg-red-500 px-3 py-1 rounded text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
