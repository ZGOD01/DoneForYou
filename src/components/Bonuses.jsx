// Bonuses.jsx
import React from "react";
import { Star, MessageCircle, Clock, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function Bonuses() {
  const bonuses = [
    {
      icon: <Star className="w-6 h-6 text-yellow-300" />,
      title: "Sales Script Vault",
      description: "Proven high-ticket closing scripts",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-cyan-300" />,
      title: "Follow-up Message Library",
      description: "Plug-and-play templates for WhatsApp/Email",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-300" />,
      title: "90-Day Accountability Support",
      description: "We don’t leave until you hit ₹1L new sales",
    },
    {
      icon: <Gift className="w-6 h-6 text-orange-300" />,
      title: "Referral Waiver",
      description: "Bring 1 qualified coach during setup → 50% balance waived",
    },
  ];

  return (
    <section className="relative py-16 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Bonuses You Receive
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          These bonuses are carefully curated to help you scale faster and smarter.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gray-900 border border-gray-700 rounded-2xl p-6 flex flex-col justify-between hover:bg-gray-800 transition-all duration-300 shadow-md cursor-pointer"
            >
              {/* Accent geometric shape */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gray-800 rounded-lg rotate-12 opacity-50"></div>

              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-800 p-3 rounded-full">{bonus.icon}</div>
                <h3 className="text-xl font-semibold">{bonus.title}</h3>
              </div>
              <p className="text-gray-300">{bonus.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
