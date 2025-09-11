// src/pages/Refund.jsx

export default function Refund() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Page Heading */}
        <h1 className="text-4xl font-extrabold text-center text-black mb-8">
          Refund Policy
        </h1>

        {/* Policy Card */}
        <div className="bg-white/5 backdrop-blur-md rounded-xl border border-black/40 shadow-md p-8 hover:bg-white/10 transition-all duration-300">

          {/* Intro */}
          <p className="text-gray-600 leading-relaxed mb-6 text-left">
            At <strong className="text-black">Scale100Million.com</strong>, we
            offer only service-based solutions. Due to the nature of our work:
          </p>

          {/* Policy Text - Replaced list with paragraphs */}
          <div className="text-gray-600 space-y-3">
            <p className="text-left">
              <span className="text-black font-medium">
                No refunds are provided
              </span>{" "}
              under any circumstances once payment has been made.
            </p>
            <p className="text-left">
              Clients are requested to carefully review service details before
              making payments.
            </p>
            <p className="text-left">
              In case of duplicate transactions or incorrect deductions caused
              by a technical error, please contact us. If found valid,
              adjustments will be handled with the payment gateway/bank.
            </p>
          </div>

          {/* Closing Note */}
          <p className="text-gray-600 leading-relaxed mt-6 text-left">
            By using our services, you acknowledge and agree to this{" "}
            <strong className="text-black">No Refund Policy</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}