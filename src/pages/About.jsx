// src/pages/About.jsx
import { Info } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f2c] to-black text-gray-200 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          About Us
        </h1>

        {/* Info Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md p-8 text-gray-300 text-lg leading-relaxed hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <Info className="w-10 h-10 text-blue-500" />
          </div>
          <p className="text-center">
            Scale100Million helps entrepreneurs grow their businesses with
            proven systems, client acquisition strategies, and digital
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
