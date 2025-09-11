import React, { useState } from "react";
import { Star, MessageCircle, Clock, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Bonuses() {
  const [openBonuses, setOpenBonuses] = useState({});

  const toggleBonus = (index) => {
    // Only toggle if the bonus is not already open
    if (!openBonuses[index]) {
      setOpenBonuses((prev) => ({
        ...prev,
        [index]: true,
      }));
    }
  };

  const bonuses = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Sales Script Vault",
      description: "Proven high-ticket closing scripts",
      note: "From Your Coach",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-cyan-500" />,
      title: "Follow-up Message Library",
      description: "Plug-and-play templates for WhatsApp/Email",
      note: "To Help You Close",
    },
    {
      icon: <Clock className="w-6 h-6 text-green-500" />,
      title: "90-Day Accountability Support",
      description: "We don’t leave until you hit ₹1L new sales",
      note: "Your Success Is Our Goal",
    },
    {
      icon: <Gift className="w-6 h-6 text-orange-500" />,
      title: "Referral Waiver",
      description: "Bring 1 qualified coach during setup → 50% balance waived",
      note: "A Little Something Extra",
    },
  ];

  return (
    <section className="relative py-16 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-2 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">
            Get INSANE Bonuses
          </span>
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 text-center mb-12">
          (Previously Sold For ₹29,997)
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
              className={`relative rounded-2xl p-6 shadow-lg transform transition-all duration-500 cursor-pointer h-56 flex flex-col items-center justify-center 
                ${
                  openBonuses[index]
                    ? "bg-gray-100 border border-gray-300"
                    : "bg-gradient-to-br from-yellow-500 to-orange-500 border border-yellow-300 hover:scale-105 hover:shadow-xl"
                }
              `}
              onClick={() => toggleBonus(index)}
            >
              <AnimatePresence mode="wait">
                {openBonuses[index] ? (
                  /* Bonus Content 'Open' State */
                  <motion.div
                    key="open-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-gray-200 p-3 rounded-full mb-4">
                      {bonus.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {bonus.title}
                    </h3>
                    <p className="text-gray-700">{bonus.description}</p>
                  </motion.div>
                ) : (
                  /* Gift Box 'Closed' State */
                  <motion.div
                    key="closed-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="absolute inset-y-0 left-1/2 -ml-[2px] w-1 bg-white transform -skew-x-12 opacity-80"></div>
                    <div className="absolute inset-x-0 top-1/2 -mt-[2px] h-1 bg-white transform -skew-y-12 opacity-80"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full p-2">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-center text-white font-bold absolute bottom-4 left-0 right-0">
                      {bonus.note}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}