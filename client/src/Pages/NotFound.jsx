import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col justify-center items-center text-white p-8">
      <h1 className="text-7xl font-extrabold mb-6">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg font-semibold"
      >
        Go Back Home
      </Link>
    </div>
  );
}
