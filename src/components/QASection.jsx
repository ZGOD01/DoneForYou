// QASection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do I need a big following?",
    answer:
      "Not at all. Many of our top clients scaled to 7 figure with fewer than 1,000 followers. We focus on systems, not vanity metrics.",
  },
  {
    question: "What if I’m just starting out?",
    answer:
      "This program is only for coaches already making 1–2L/month who want to scale fast.",
  },
];

const reasons = [
  "We build everything so you don’t have to.",
  "You get qualified sales calls on autopilot.",
  "You just show up, close, and scale.",
  "No tech headaches, no ads learning curve, no stress.",
  "D-F-Y SYSTEM - we win when you win.",
];

// Line-by-line animation
const listVariants = {
  hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.3 + 0.5, duration: 0.6, ease: "easeOut" },
  }),
};

// Box animation
const boxVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function QASection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Left side heading */}
        <div className="text-left">
          <h2 className="text-4xl font-medium leading-snug mb-4">
            We simulated what questions <br />
            you need answering
          </h2>
          <p className="text-gray-400 text-lg">
            Explore quick solutions to common questions. <br />
            Need more? Feel free to contact our{" "}
            <a href="#" className="underline">
              support team
            </a>.
          </p>
        </div>

        {/* Right side accordion */}
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/20">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-base font-normal hover:bg-white/5 transition"
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm font-light"
                >
                  ▾
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Why Coaches Choose Us (Box with Animation) */}
      <motion.div
        className="max-w-3xl mx-auto px-6 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={boxVariants}
      >
        <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-10 text-center shadow-lg">
          <h3 className="text-2xl font-semibold mb-8">Why Coaches Choose Us</h3>
          <ul className="space-y-4 text-gray-300 text-lg">
            {reasons.map((reason, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={listVariants}
              >
                {reason}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
