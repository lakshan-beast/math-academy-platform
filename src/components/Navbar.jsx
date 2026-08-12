import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-8 shadow-sm h-25 rounded-b-3xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* brand name */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-exo font-semibold tracking-tight text-emerald-600">
            Edu.<span className="text-gray-900">Stream</span>
          </span>
        </div>
        {/* nav-links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-lg font-medium font-exo text-gray-600 hover:text-emerald-600 transition-colors">
            Home
          </a>
          <a
            href="#"
            className="text-lg font-medium font-exo text-gray-600 hover:text-emerald-600 transition-colors">
            All Courses
          </a>
          <a
            href="#"
            className="text-lg font-medium font-exo text-gray-600 hover:text-emerald-600 transition-colors">
            About
          </a>
        </div>
        {/* actions buttons */}
        <div className="flex items-center space-x-6">
          <button
            type="button"
            className="text-sm font-semibold font-exo text-gray-700 hover:text-emerald-600 transition-colors">
            Sign in
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-semibold font-exo text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-all">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
