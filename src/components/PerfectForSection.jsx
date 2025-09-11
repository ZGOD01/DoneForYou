import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaLightbulb, FaTools, FaChartLine, FaDollarSign, FaUsers, FaMinusCircle, FaQuestionCircle } from "react-icons/fa";

export default function PerfectForSection() {
  const leftColumnVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const rightColumnVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5, // Delay right column for a staggered reveal
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const connectingLineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const perfectForItems = [
    { text: "Online fat loss coaches making ₹2L+/month", icon: <FaLightbulb /> },
    { text: "Coaches selling structured programs (like 12-week offers)", icon: <FaTools /> },
    { text: "Those who want to scale fast without funnels/ads/tech teams", icon: <FaChartLine /> },
    { text: "Ready to take more sales calls & close more deals", icon: <FaDollarSign /> },
  ];

  const notForItems = [
    { text: "Beginners or general fitness trainers", icon: <FaUsers /> },
    { text: "Coaches not ready to sell high-ticket", icon: <FaMinusCircle /> },
    { text: "Anyone just “testing”", icon: <FaQuestionCircle /> },
  ];

  return (
    <section className="bg-white py-16 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Is This Program Your Path to Success?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Understand who truly thrives with our unique approach and who might need a different direction.
        </p>
      </div>

      <div className="relative flex justify-center mt-16">
        {/* Absolute positioning for the connecting lines */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-300 to-green-300 z-0"
          variants={connectingLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          style={{ originY: 0 }}
        ></motion.div>

        <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 lg:gap-x-24 relative z-10">
          {/* Left Column (The "Not For" Path) */}
          <motion.div
            className="flex flex-col items-end space-y-12"
            variants={leftColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-right -mr-4 md:-mr-8">
              <span className="inline-block px-4 py-2 bg-red-100 text-red-700 font-semibold rounded-full shadow-sm text-sm whitespace-nowrap">
                Not Your Path
              </span>
            </motion.div>
            
            {notForItems.map((item, index) => (
              <motion.div key={`not-${index}`} variants={itemVariants} className="relative group w-full max-w-xs sm:max-w-sm">
                <div className="relative bg-red-50 border-2 border-red-300 rounded-xl p-4 shadow-md flex items-center space-x-3 transition-transform duration-300 hover:scale-105 group-hover:shadow-lg">
                  <FaTimesCircle className="text-red-500 text-2xl flex-shrink-0" />
                  <p className="text-gray-800 font-medium text-left">{item.text}</p>
                </div>
                <div className="absolute top-1/2 right-[-2.5rem] md:right-[-4.5rem] transform -translate-y-1/2 bg-red-500 rounded-full p-2 text-white shadow-lg z-20">
                  <FaTimesCircle className="text-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column (The "Perfect For" Path) */}
          <motion.div
            className="flex flex-col items-start space-y-12 mt-16 md:mt-20" // Offset right column to create a staggered effect
            variants={rightColumnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="text-left -ml-4 md:-ml-8">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 font-semibold rounded-full shadow-sm text-sm whitespace-nowrap">
                Your Ideal Path
              </span>
            </motion.div>

            {perfectForItems.map((item, index) => (
              <motion.div key={`perfect-${index}`} variants={itemVariants} className="relative group w-full max-w-xs sm:max-w-sm">
                <div className="relative bg-green-50 border-2 border-green-300 rounded-xl p-4 shadow-md flex items-center space-x-3 transition-transform duration-300 hover:scale-105 group-hover:shadow-lg">
                  <FaCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                  <p className="text-gray-800 font-medium text-left">{item.text}</p>
                </div>
                <div className="absolute top-1/2 left-[-2.5rem] md:left-[-4.5rem] transform -translate-y-1/2 bg-green-500 rounded-full p-2 text-white shadow-lg z-20">
                  <FaCheckCircle className="text-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}