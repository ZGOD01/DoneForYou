// src/pages/Terms.jsx
import { Shield, CreditCard, UserCheck, AlertTriangle, Scale } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      id: 1,
      title: "Services",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      content: (
        <p className="pl-0">
          We provide business growth, client acquisition, and digital solutions
          on a service model.
        </p>
      ),
    },
    {
      id: 2,
      title: "Payments",
      icon: <CreditCard className="w-6 h-6 text-green-400" />,
      content: (
        <ul className=" list-outside space-y-2 pl-5">
          <li>Payments are collected securely through UPI, debit/credit cards, and net banking.</li>
          <li>All charges and commissions are confirmed with the client before engagement.</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "User Obligations",
      icon: <UserCheck className="w-6 h-6 text-yellow-400" />,
      content: (
        <p className="pl-0">
          Clients must provide accurate information and comply with applicable
          laws. Misuse of our services may result in termination.
        </p>
      ),
    },
    {
      id: 4,
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6 text-red-400" />,
      content: (
        <p className="pl-0">
          We are not responsible for indirect, incidental, or consequential
          damages. Our liability is limited to the amount paid by the client for
          services.
        </p>
      ),
    },
    {
      id: 5,
      title: "Governing Law",
      icon: <Scale className="w-6 h-6 text-purple-400" />,
      content: (
        <p className="pl-0">These Terms shall be governed by the laws of India.</p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f2c] to-black text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-12">
          Terms & Conditions
        </h1>

        {/* Intro Text */}
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Welcome to <strong className="text-white">Scale100Million.com</strong>.
          By accessing or using our website and services, you agree to be bound
          by these Terms & Conditions.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                {section.icon}
                <h2 className="text-lg font-semibold text-white">
                  {section.id}. {section.title}
                </h2>
              </div>
              <div className="text-gray-300 leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
