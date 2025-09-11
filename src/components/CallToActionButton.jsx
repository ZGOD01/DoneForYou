import { motion } from "framer-motion";

export default function CallToActionButton() {
  return (
    <motion.div
      className="py-2 flex justify-center "
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        href="/book-strategy-call"
        className=" relative px-6 py-3 bg-red-600 text-white font-semibold 
          text-sm sm:text-base md:text-lg rounded-full shadow-lg overflow-hidden 
          w-max transition transform hover:scale-105 duration-300 ease-out"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Book a Strategy Call
        {/* Cross Line Effect */}
        <span className="animate-cross-line"></span>
      </motion.a>
    </motion.div>
  );
}
