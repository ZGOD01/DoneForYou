import { Mail, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/scale100million logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-[#0a0f2c] text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 mt-6">
        {/* Left - Logo + Contact Us */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Logo */}
          <img
            src={logo}
            alt="Scale100Million Logo"
            className="h-6 w-auto"
          />

          {/* Contact Us Heading */}
          <h3 className="text-lg font-semibold">Contact Us</h3>

          {/* Contact Info */}
          <div className="flex flex-col space-y-3 text-sm text-gray-300">
            <a
              href="mailto:scale100million@gmail.com"
              className="flex items-center gap-3 hover:underline"
            >
              <Mail size={16} className="shrink-0" />
              <span>scale100million@gmail.com</span>
            </a>
            <a
              href="tel:+919325847844"
              className="flex items-center gap-3 hover:underline"
            >
              <Phone size={16} className="shrink-0" />
              <span>+91 9325847844</span>
            </a>
            <a
              href="https://instagram.com/scale100million"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:underline"
            >
              <Instagram size={16} className="shrink-0" />
              <span>@scale100million</span>
            </a>
          </div>
        </div>

        {/* Right - Quick Links */}
        <div className="flex flex-col items-center md:items-end w-full">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="flex flex-col items-start md:items-end space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/terms" className="hover:underline block">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/refund" className="hover:underline block">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline block">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-12 text-center text-xs text-gray-400">
        Mon – Sun, 10:00 AM – 10:00 PM
      </div>
      <div className="mt-2 text-center text-xs text-gray-500">
        © 2025 Scale100Million.com. All rights reserved.
      </div>
    </footer>
  );
}
