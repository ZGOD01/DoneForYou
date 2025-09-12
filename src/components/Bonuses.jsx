import React, { useState, useEffect } from "react";
import ScratchCard from "react-scratchcard-v2";
import { Star, MessageCircle, Clock, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScratchMeImg from "../assets/scratch-me-1.png";

// Adjusting the size settings for a medium-sized component
const settings = {
  width: 250,
  height: 250,
  image: ScratchMeImg,
  finishPercent: 70,
  brushSize: 20,
  onComplete: () => console.log("🎉 Card cleared!"),
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

export default function Bonuses() {
  const [openBonuses, setOpenBonuses] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint in Tailwind
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleBonus = (index) => {
    if (isMobile && !openBonuses[index]) {
      setOpenBonuses((prev) => ({
        ...prev,
        [index]: true,
      }));
    }
  };

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
          // Centering the items on mobile using flexbox and reverting to grid on larger screens
          className="flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-12 md:gap-y-8 lg:gap-x-16 lg:gap-y-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 cursor-pointer h-56 flex flex-col items-center justify-center"
              style={{ width: settings.width, height: settings.height }}
              onClick={() => toggleBonus(index)}
            >
              <AnimatePresence mode="wait">
                {isMobile ? (
                  // Mobile view with flip effect
                  openBonuses[index] ? (
                    <motion.div
                      key="open-content"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gray-100"
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
                    // Mobile closed state with image
                    <motion.div
                      key="closed-content"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <img
                        src={ScratchMeImg}
                        alt="Scratch to reveal"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )
                ) : (
                  // Desktop view with ScratchCard
                  <>
                    <ScratchCard {...settings} />
                    <div className="absolute inset-0 flex flex-col justify-center items-center h-full bg-white p-5">
                      <div className="bg-gray-200 p-3 rounded-full mb-4">
                        {bonus.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                        {bonus.title}
                      </h3>
                      <p className="text-sm text-gray-700 text-center">
                        {bonus.description}
                      </p>
                    </div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}