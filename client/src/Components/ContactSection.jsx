import React, { useState } from "react";
const API_BASE = process.env.REACT_APP_API_BASE;

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    branch: "",
    email: "",
    sem: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Form submitted successfully! We will contact you soon.");
        setForm({ name: "", branch: "", email: "", sem: "", message: "" });
      } else {
        alert("❌ Error: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 px-4">
      <div className="max-w-2xl mx-auto glass rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Contact / Ask Query
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Branch */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 rounded-xl bg-transparent border border-white/30 focus:border-white/60 outline-none text-white placeholder-white/60"
              required
            />
            <input
              name="branch"
              value={form.branch}
              onChange={handleChange}
              placeholder="Branch"
              className="p-3 rounded-xl bg-transparent border border-white/30 focus:border-white/60 outline-none text-white placeholder-white/60"
              required
            />
          </div>

          {/* Email & Semester */}
          <div className="grid md:grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 rounded-xl bg-transparent border border-white/30 focus:border-white/60 outline-none text-white placeholder-white/60"
              required
            />
            <input
              name="sem"
              value={form.sem}
              onChange={handleChange}
              placeholder="Semester"
              className="p-3 rounded-xl bg-transparent border border-white/30 focus:border-white/60 outline-none text-white placeholder-white/60"
              required
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Feedback / Query"
            rows="5"
            className="p-3 rounded-xl bg-transparent border border-white/30 focus:border-white/60 outline-none w-full text-white placeholder-white/60"
            required
          />

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className={`px-6 py-2 rounded-xl border border-white/30 hover:border-white/60 transition text-white ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}  