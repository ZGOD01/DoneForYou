import React from "react";
import { motion } from "framer-motion";
import CallToActionButton from "./CallToActionButton"; // Import the CTA button

const reasons = [
  {
    title: "We Build It For You",
    description: "We build everything so you don’t have to. You just show up, close, and scale.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 13h6m-3-3v6m5 5a2 2 0 11-4 0 2 2 0 014 0zM12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
    ),
  },
  {
    title: "Qualified Sales Calls",
    description: "You get qualified sales calls on autopilot.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Stress-Free Scaling",
    description: "No tech headaches, no ads learning curve, no stress.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "D-F-Y System",
    description: "We win when you win.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-indigo-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

// Box animation (for the overall container)
const boxVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function WhyCoachesChooseUs() {
  return (
    <motion.div
      className="relative max-w-6xl mx-auto px-6 mt-20 z-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={boxVariants}
    >
      {/* Container for the CTA button */}
      <div className="text-center mb-10">
        <CallToActionButton />
      </div>

      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Why Coaches Choose Us
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We provide a seamless experience so you can focus on what you do best: coaching.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { delay: idx * 0.2, duration: 0.6 } }
            }}
            className="relative bg-white rounded-xl shadow-lg border border-gray-200 p-8 flex flex-col items-center text-center transform transition-all duration-300 hover:shadow-2xl hover:scale-105 z-0 hover:z-20"
          >
            <div className="p-3 bg-indigo-50 rounded-full mb-4">
              {reason.icon}
            </div>
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {reason.title}
            </h4>
            <p className="text-gray-600 text-base">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}