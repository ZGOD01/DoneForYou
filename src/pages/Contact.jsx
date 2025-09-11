// src/pages/Contact.jsx
import emailIcon from "../assets/email.svg";
import callIcon from "../assets/call.svg";
import instagramIcon from "../assets/instagram.svg";
import clockIcon from "../assets/clock.svg";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-600 flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-black mb-2">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm md:text-base">
          We’re here to help! Reach out to us through the following:
        </p>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Email Card */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
            <img src={emailIcon} alt="Email Icon" className="w-12 h-12 mb-3" />
            <h3 className="text-base font-semibold text-black mb-1">Email</h3>
            <a
              href="mailto:scale100million@gmail.com"
              className="bg-gray-200 text-black px-3 py-1.5 rounded-lg text-xs hover:bg-gray-300 transition"
            >
              scale100million@gmail.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
            <img src={callIcon} alt="Phone Icon" className="w-12 h-12 mb-3" />
            <h3 className="text-base font-semibold text-black mb-1">Phone</h3>
            <a
              href="tel:+919325847844"
              className="bg-gray-200 text-black px-3 py-1.5 rounded-lg text-xs hover:bg-gray-300 transition"
            >
              +91 9325847844
            </a>
          </div>

          {/* Instagram Card */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
            <img
              src={instagramIcon}
              alt="Instagram Icon"
              className="w-20 h-20 mb-3"
            />
            <h3 className="text-base font-semibold text-black mb-1">Instagram</h3>
            <a
              href="https://instagram.com/scale100million"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 text-black px-3 py-1.5 rounded-lg text-xs hover:bg-gray-300 transition"
            >
              @scale100million
            </a>
          </div>

          {/* Working Hours Card */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-md p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg">
            <img src={clockIcon} alt="Clock Icon" className="w-12 h-12 mb-3" />
            <h3 className="text-base font-semibold text-black mb-1">
              Working Hours
            </h3>
            <p className="text-gray-600 text-sm">Monday – Sunday</p>
            <p className="bg-gray-200 text-black px-3 py-1.5 rounded-lg text-xs mt-1">
              10:00 AM – 10:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}