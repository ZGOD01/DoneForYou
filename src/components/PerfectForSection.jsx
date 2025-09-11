import React from "react";
import { motion } from "framer-motion";

export default function PerfectForSection() {
  const listContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const listItem = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Perfect For */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-b from-white to-blue-50 border border-blue-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-2xl md:text-3xl font-bold text-blue-600 mb-6"
          >
            Who This Is Perfect For
          </motion.h2>

          <motion.ul
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-4 text-gray-700"
          >
            {[
              "Online fat loss coaches making ₹2L+/month",
              "Coaches selling structured programs (like 12-week offers)",
              "Those who want to scale fast without funnels/ads/tech teams",
              "Ready to take more sales calls & close more deals",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={listItem}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="text-blue-500 mt-1">✔️</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Not For */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="bg-gradient-to-b from-white to-blue-50 border border-blue-200 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-2xl md:text-3xl font-bold text-blue-600 mb-6"
          >
            This Is Not For
          </motion.h2>

          <motion.ul
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="space-y-4 text-gray-700"
          >
            {[
              "Beginners or general fitness trainers",
              "Coaches not ready to sell high-ticket",
              "Anyone just “testing”",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={listItem}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <span className="text-blue-500 mt-1">❌</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
