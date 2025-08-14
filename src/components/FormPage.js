import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FormPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-md">
        <div className="container mx-auto px-4 py-4 text-white text-2xl font-bold">
          Aqualine Form
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 py-10">
         <button
      onClick={() => navigate("/")}
      className="flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full shadow-md transition-all duration-300"
    >
      <FaArrowLeft />
      <span>Back</span>
    </button>
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Fill Your Information
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="space-y-2">
                <label className="block font-semibold text-blue-700">
                  Label {i + 1}
                </label>
                <input
                  type="text"
                  placeholder="Enter text"
                  className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
                <select className="w-full p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-400">
                  <option>Select an option</option>
                  <option>Option A</option>
                  <option>Option B</option>
                </select>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center"
              >
                <label className="sm:col-span-1 font-semibold text-blue-700">
                  Label {i + 1}
                </label>
                <input
                  type="text"
                  placeholder="Small input"
                  className="sm:col-span-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-400"
                />
                <label className="sm:col-span-1 font-semibold text-blue-700">
                  Label
                </label>
                <select className="sm:col-span-1 p-2 border border-blue-300 rounded-md focus:ring-2 focus:ring-blue-400">
                  <option>Select</option>
                  <option>Option A</option>
                  <option>Option B</option>
                </select>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} Aqualine. All rights reserved.
      </footer>
    </div>
  );
}
