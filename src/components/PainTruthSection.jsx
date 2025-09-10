import { motion } from "framer-motion";

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

  return (
    <section className="relative bg-black py-20 px-6 overflow-hidden">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          <span className="text-red-500">Why 98% of Coaches</span> Stay Stuck at{" "}
          <span className="text-blue-400">6 Figures</span>
        </motion.h2>
      </div>

      {/* Split Layout */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* Pain Section */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="bg-red-900/20 border-l-4 border-red-500 rounded-r-2xl p-8 flex flex-col justify-start h-full"
        >
          <h3 className="text-2xl font-bold text-red-400 mb-6">❌ Pain Points</h3>
          <ul className="space-y-4 text-gray-200 text-lg">
            {painPoints.map((point, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: false }}
                className="flex items-center gap-3"
              >
                <span className="text-red-400 text-2xl">❌</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Truth Section */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false }}
          className="bg-blue-900/20 border-r-4 border-blue-400 rounded-l-2xl p-8 flex flex-col justify-start h-full"
        >
          {/* Animated Heading */}
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-2xl font-bold text-blue-400 mb-6"
          >
            💡 Truth
          </motion.h3>

          {/* Animated Points */}
          <ul className="space-y-4 text-gray-200 text-lg">
            {truthPoints.map((truth, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.3 }}
                viewport={{ once: false }}
                className="flex items-center gap-3"
              >
                <span className="text-blue-400 text-2xl">✔️</span>
                <span>{truth}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
