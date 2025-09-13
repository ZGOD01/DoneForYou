import { motion } from "framer-motion";
import KeyBenefits from "./KeyBenefits";

export default function Hero() {
  const blurLeftToRight = (delay = 0) => ({
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      clipPath: "inset(0 100% 0 0)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 1.2, ease: "easeOut", delay },
    },
  });

  return (
    <div className="relative bg-white min-h-[80vh] flex items-start justify-center overflow-hidden">
      {/* 📱 Push down on mobile */}
      <div className="relative px-4 text-center max-w-5xl mt-1 md:mt-0">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight mx-auto">
          <motion.span
            variants={blurLeftToRight(0)}
            initial="hidden"
            animate="visible"
            className="block text-black"
          >
            Scale Your <span className="text-blue-600">Fat Loss</span> Coaching Business
          </motion.span>
          <motion.span
            variants={blurLeftToRight(0.4)}
            initial="hidden"
            animate="visible"
            className="block text-black"
          >
            From{" "}
            <span className="bg-yellow-100 px-2">
              <span className="text-blue-600">1L</span>{" "}
              <span className="text-blue-600">To</span>{" "}
              <span className="text-blue-600">10L/Month PROFIT</span>
            </span>
          </motion.span>
          <motion.span
            variants={blurLeftToRight(0.8)}
            initial="hidden"
            animate="visible"
            className="block underline underline-offset-4 text-blue-600"
          >
            Using Army Of A.I. Agents.
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.h2
          variants={blurLeftToRight(1.2)}
          initial="hidden"
          animate="visible"
          className="my-4 text-[15px] sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 leading-snug mx-auto pr-6 pl-6"
        >
          AI-Powered, Done-For-You Client Acquisition System That
          brings Ready-to-Invest Clients On 100% Autopilot.
        </motion.h2>

        {/* ✅ KeyBenefits section */}
        <KeyBenefits />
      </div>
    </div>
  );
}
