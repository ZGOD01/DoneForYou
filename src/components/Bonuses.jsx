import React from "react";
import ScratchCard from "react-scratchcard-v2";
import { Star, MessageCircle, Clock, Gift } from "lucide-react";
import ScratchMeImg from "../assets/scratch-me.jpg";

const settings = {
  width: 280,
  height: 280,
  image: ScratchMeImg,
  finishPercent: 85,
  brushSize: 10,
  onComplete: () => console.log("🎉 Card cleared!"),
};

const data = [
  {
    title: "Sales Script Vault",
    desc: "Proven high-ticket closing scripts",
    icon: <Star className="w-7 h-7 text-yellow-500 mb-3" />,
  },
  {
    title: "Follow-up Message Library",
    desc: "Plug-and-play templates for WhatsApp/Email",
    icon: <MessageCircle className="w-7 h-7 text-blue-500 mb-3" />,
  },
  {
    title: "90-Day Accountability Support",
    desc: "We don’t leave until you hit ₹1L new sales",
    icon: <Clock className="w-7 h-7 text-purple-500 mb-3" />,
  },
  {
    title: "Referral Waiver",
    desc: "Bring 1 qualified coach during setup → 50% balance waived",
    icon: <Gift className="w-7 h-7 text-green-500 mb-3" />,
  },
];

export default function Bonuses() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* 🔥 New Orange Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-400 mb-12">
          Get{" "}
          <span className="text-orange-500">
            INSANE Bonuses
          </span>{" "}
          <span className="block text-lg sm:text-xl font-semibold text-orange-400 mt-2">
            Previously Sold For ₹29,997
          </span>
        </h2>

        {/* Scratch Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
              style={{ width: settings.width, height: settings.height }}
            >
              <ScratchCard {...settings}>
                <div className="flex flex-col justify-center items-center h-full bg-white p-5">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 text-center mt-2">
                    {item.desc}
                  </p>
                </div>
              </ScratchCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
