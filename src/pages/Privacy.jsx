// src/pages/Privacy.jsx
import { Shield } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-600">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-center text-black mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 text-center mb-8">
          We respect your privacy and are committed to protecting your personal data.
        </p>

        {/* Policy Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-black/40 shadow-md p-8 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-semibold text-black">Our Commitment</h2>
          </div>

          <div className="space-y-6 text-left">
            {/* Section 1 */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                1. Information We Collect
              </h3>
              <p className="text-gray-600">
                Name, email, phone number, and billing details when you engage our services.
              </p>
              <p className="text-gray-600">
                Payment details (processed securely via payment gateway; we do not store UPI or card data).
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                2. How We Use Information
              </h3>
              <p className="text-gray-600">To provide and improve services.</p>
              <p className="text-gray-600">To process secure payments.</p>
              <p className="text-gray-600">
                To communicate updates, invoices, and service information.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                3. Data Protection
              </h3>
              <p className="text-gray-600">
                We use appropriate security measures and{" "}
                <span className="font-semibold text-black">never sell your data</span>{" "}
                to third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
