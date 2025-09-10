// src/pages/Privacy.jsx
import { Shield, Database, CreditCard, Lock } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      content: (
        <div className="space-y-2">
          <p>
            Name, email, phone number, and billing details when you engage our
            services.
          </p>
          <p>
            Payment details (processed securely via payment gateway; we do not
            store UPI or card data).
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "How We Use Information",
      icon: <CreditCard className="w-6 h-6 text-green-400" />,
      content: (
        <div className="space-y-2">
          <p>To provide and improve services.</p>
          <p>To process secure payments.</p>
          <p>To communicate updates, invoices, and service information.</p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Data Protection",
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      content: (
        <p>
          We use appropriate security measures and{" "}
          <strong className="text-white">never sell your data</strong> to third
          parties.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f2c] to-black text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Privacy Policy
        </h1>

        {/* Intro Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md p-6 mb-10 text-center hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center justify-center mb-3">
            <Shield className="w-10 h-10 text-blue-500" />
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            We respect your privacy and are committed to protecting your
            personal data.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                {section.icon}
                <h2 className="text-lg font-semibold text-white">
                  {section.title}
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
