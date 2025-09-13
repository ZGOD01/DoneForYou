import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Do I need a big following?",
    answer:
      "Not at all. Many of our top clients scaled to 7 figures with fewer than 1,000 followers. We focus on systems, not vanity metrics.",
  },
  {
    question: "What if I’m just starting out?",
    answer:
      "This program is only for coaches already making 1–2L/month who want to scale fast.",
  },
  {
    question: "Who is this for?",
    answer:
      "This program is designed for Fat Loss coaches already earning ₹1–2L/month who are ready to scale to the next level, fast.",
  },
  {
    question: "How is this different from other products?",
    answer:
      "Simple—it delivers results. This is a done-for-you system with a proven track record, used successfully by us and our private clients. No need for you to be an expert—we handle everything.",
  },
  {
    question: "Is there a guarantee?",
    answer:
      "Yes. You get a 30-day, no-questions-asked money-back guarantee. If it’s not for you, you’ll still keep the bonuses.",
  },
  {
    question: "When can I access the bonuses?",
    answer:
      "You’ll get access to the bonuses right after your 1:1 strategy call.",
  },
];

export default function QASection() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Ensure maxHeight is updated dynamically
  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (el) {
        el.style.maxHeight =
          openIndex === i ? `${el.scrollHeight}px` : "0px";
      }
    });
  }, [openIndex]);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-white opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-indigo-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Centralized Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="md:w-3/4 lg:w-2/3 mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-gray-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                  style={{ maxHeight: openIndex === index ? "none" : "0px" }}
                  ref={(el) => (contentRefs.current[index] = el)}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
