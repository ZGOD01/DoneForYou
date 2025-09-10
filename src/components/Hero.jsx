import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SampleVideo from "../assets/moon.mp4";
import CallToActionButton from "./CallToActionButton";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.25;
    }
  }, []);

  const blurLeftToRight = (delay = 0) => ({
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      clipPath: "inset(0 100% 0 0)"
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 1.2, ease: "easeOut", delay }
    }
  });

  return (
    <div className="relative bg-black min-h-screen flex items-start justify-center overflow-hidden">
      <motion.video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <source src={SampleVideo} type="video/mp4" />
      </motion.video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />

      <div className="relative z-10 px-6 text-center max-w-4xl pt-2 -mt-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-white leading-snug tracking-tight mx-auto">
          <motion.span
            variants={blurLeftToRight(0)}
            initial="hidden"
            animate="visible"
            className="block"
          >
            The Secret AI Automation System
          </motion.span>
          <motion.span
            variants={blurLeftToRight(0.4)}
            initial="hidden"
            animate="visible"
            className="block"
          >
            Top 1% Fat Loss Coaches Use
          </motion.span>
          <motion.span
            variants={blurLeftToRight(0.8)}
            initial="hidden"
            animate="visible"
            className="block"
          >
            to Scale from 2L/month to 10L/month{" "}
            <span className="text-white">
              Without the DM Grind, Referrals, or Daily Reels
            </span>
          </motion.span>
        </h1>

        <motion.h2
          variants={blurLeftToRight(1.2)}
          initial="hidden"
          animate="visible"
          className="mt-5 text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300 leading-snug mx-auto"
        >
          This Proven AI-Powered, Done-For-You Client Acquisition System brings
          you ready-to-invest clients on autopilot with no burnout, no chasing
          leads, 100% Autopilot.
        </motion.h2>

        {/* Supporting Paragraph */}
        <motion.div
          variants={blurLeftToRight(1.6)}
          initial="hidden"
          animate="visible"
          className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed tracking-wide mx-auto"
        >
          <CallToActionButton />
        </motion.div>
      </div>
    </div>
  );
}
