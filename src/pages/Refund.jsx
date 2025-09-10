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

        {/* Policy Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md p-8 hover:bg-white/10 transition-all duration-300">

          {/* Intro */}
          <p className="text-gray-300 leading-relaxed mb-6">
            At <strong className="text-white">Scale100Million.com</strong>, we
            offer only service-based solutions. Due to the nature of our work:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside text-gray-300 space-y-3 pl-2">
            <li>
              <span className="text-white font-medium">
                No refunds are provided
              </span>{" "}
              under any circumstances once payment has been made.
            </li>
            <li>
              Clients are requested to carefully review service details before
              making payments.
            </li>
            <li>
              In case of duplicate transactions or incorrect deductions caused
              by a technical error, please contact us. If found valid,
              adjustments will be handled with the payment gateway/bank.
            </li>
          </ul>

          {/* Closing Note */}
          <p className="text-gray-300 leading-relaxed mt-6">
            By using our services, you acknowledge and agree to this{" "}
            <strong className="text-white">No Refund Policy</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
