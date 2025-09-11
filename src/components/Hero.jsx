import { motion } from "framer-motion";
import CallToActionButton from "./CallToActionButton";
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
    <div className="relative z-[999] bg-white min-h-[80vh] flex items-start justify-center overflow-hidden">
      {/* 📱 Push down on mobile */}
      <div className="relative px-6 text-center max-w-5xl mt-1 md:mt-0">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug tracking-tight mx-auto">
          <motion.span
            variants={blurLeftToRight(0)}
            initial="hidden"
            animate="visible"
            className="block"
          >
            Scale Your Coaching Business To{" "}
            <span className="bg-yellow-100 px-1">5</span>
          </motion.span>
          <motion.span
            variants={blurLeftToRight(0.4)}
            initial="hidden"
            animate="visible"
            className="block"
          >
            <span className="bg-yellow-100 px-1">
              Lakhs/Month PROFIT
            </span>{" "}
            Using Army Of
          </motion.span>
          <motion.span
            variants={blurLeftToRight(0.8)}
            initial="hidden"
            animate="visible"
            className="block underline underline-offset-4"
          >
            A.I. Agents.
          </motion.span>
        </h1>

        {/* Subheading */}
        <motion.h2
          variants={blurLeftToRight(1.2)}
          initial="hidden"
          animate="visible"
          className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-700 leading-snug mx-auto"
        >
          AI-Powered, Done-For-You Client Acquisition System That
          brings Ready-to-Invest Clients On 100% Autopilot.
        </motion.h2>

        {/* Call to Action Button */}
        <motion.div
          variants={blurLeftToRight(1.6)}
          initial="hidden"
          animate="visible"
          className="mt-6"
        >
          <CallToActionButton />
        </motion.div>

        {/* ✅ KeyBenefits section */}
        <KeyBenefits />
      </div>
    </div>
  );
}
