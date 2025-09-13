import React from "react";
import { motion } from "framer-motion";
import { FaFire, FaLightbulb, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

export default function PainTruthSection() {
  const painPoints = [
    "Hustling in DMs until midnight",
    "Posting reels daily hoping for a viral hit",
    "Relying on referrals that dry up",
    "Getting attention but not conversions",
  ];

  const truthPoints = [
    "6-figure businesses are built on hustle.",
    "7-figure businesses are built on systems.",
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-white py-20 px-6">
      {/* Main Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          <span className="text-black">Why 98% of Coaches</span> Stay Stuck at{" "}
          <span className="text-sky-500">6 Figures</span>
        </motion.h2>
      </div>

      {/* Side-by-Side Panels */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Pain Panel - Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-200 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corner Element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-red-200 opacity-20 rounded-bl-full transform rotate-45"></div>
          
          <div className="flex items-center space-x-4 mb-8 relative z-10">
            <FaFire className="text-5xl text-red-500" />
            <h3 className="text-3xl font-bold text-red-600">The Problem</h3>
          </div>
          
          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 text-lg relative z-10"
          >
            {painPoints.map((point, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <FaTimesCircle className="text-red-400 text-2xl mt-1 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Truth Panel - Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-tl from-sky-50 to-sky-100 border-4 border-sky-200 rounded-3xl p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corner Element */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-sky-200 opacity-20 rounded-br-full transform -rotate-45"></div>

          <div className="flex items-center space-x-4 mb-8 relative z-10">
            <FaLightbulb className="text-5xl text-sky-500" />
            <h3 className="text-3xl font-bold text-sky-600">The Truth</h3>
          </div>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 text-gray-700 text-lg relative z-10"
          >
            {truthPoints.map((truth, idx) => (
              <motion.li
                key={idx}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <FaCheckCircle className="text-sky-400 text-2xl mt-1 flex-shrink-0" />
                <span className="font-semibold">{truth}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}