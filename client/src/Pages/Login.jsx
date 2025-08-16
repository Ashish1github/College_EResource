import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const API_BASE = process.env.REACT_APP_API_BASE;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const setAuth = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      setAuth(data);

      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="w-full max-w-md glass p-8 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Login</h2>
        {error && <div className="mb-4 text-red-400">{error}</div>}

        <form onSubmit={submit} className="space-y-4">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md bg-transparent border text-white"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleChange}
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md bg-transparent border text-white"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 border rounded-md w-full hover:bg-white hover:text-black transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-center text-white">
          Don't have an account? <Link to="/register" className="underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
