// src/pages/Terms.jsx
export default function Terms() {
  const allSections = [
    {
      id: 1,
      title: "Services",
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
      content: (
        <ul className="list-outside space-y-2 pl-5">
          <li>
            Payments are collected securely through UPI, debit/credit cards, and
            net banking.
          </li>
          <li>
            All charges and commissions are confirmed with the client before
            engagement.
          </li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "Refund Policy",
      content: (
        <p className="pl-0">
          We follow a strict <strong>No Refund Policy</strong>. Once payment is
          made, it cannot be refunded under any circumstances. Please review our{" "}
          <span className="text-blue-400 underline cursor-pointer">
            Refund Policy
          </span>{" "}
          page for details.
        </p>
      ),
    },
    {
      id: 4,
      title: "User Obligations",
      content: (
        <p className="pl-0">
          Clients must provide accurate information and comply with applicable
          laws. Misuse of our services may result in termination.
        </p>
      ),
    },
    {
      id: 5,
      title: "Limitation of Liability",
      content: (
        <p className="pl-0">
          We are not responsible for indirect, incidental, or consequential
          damages. Our liability is limited to the amount paid by the client for
          services.
        </p>
      ),
    },
    {
      id: 6,
      title: "Governing Law",
      content: (
        <p className="pl-0">
          These Terms shall be governed by the laws of India.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f2c] to-black text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-12 text-left">
          Terms & Conditions
        </h1>

        {/* Intro Text */}
        <p className="text-gray-300 max-w-2xl mb-12 text-left">
          Welcome to <strong className="text-white">Scale100Million.com</strong>. By
          accessing or using our website and services, you agree to be bound by
          these Terms & Conditions.
        </p>

        {/* All sections in one simple box */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-md p-6 hover:bg-white/10 transition-all duration-300 space-y-6 text-left">
          {allSections.map((section) => (
            <div key={section.id}>
              <h2 className="text-lg font-semibold text-white mb-2">
                {section.id}. {section.title}
              </h2>
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
