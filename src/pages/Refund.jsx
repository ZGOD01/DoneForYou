// src/pages/Refund.jsx
import { Ban } from "lucide-react";

export default function Refund() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f2c] to-black text-gray-200">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Refund Policy
        </h1>

        {/* Intro Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md p-8 text-center hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-center mb-4">
            <Ban className="w-10 h-10 text-red-500" />
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            We follow a strict{" "}
            <strong className="text-white">No Refund Policy</strong>. <br />
            Once payment is made, it <span className="text-red-400 font-semibold">cannot be refunded</span>{" "}
            under any circumstances. Please ensure you review all details
            before making a payment.
          </p>
        </div>
      </div>
    </div>
  );
}
