import React from "react";
import "./marquee.css";

export default function TestimonialsMarquee() {
  const testimonials = [
    {
      name: "Sarina",
      text: "Sula taught me everything I need to know about fitness in simple steps; it was really nice experience. I lost 7 kg in just 4 months.",
      result: "Lost 7 kg in just 4 months.",
    },
    {
      name: "Abimnaya",
      text: "Sula Didi was my strong supporter throughout my journey. She helped me with my diet plan and workouts. I lost 10 kg in just 3.5 months.",
      result: "Lost 10 kg in just 3.5 months.",
    },
    {
      name: "Ekamalakshmi",
      text: "Sula was an amazing coach to me - She guided me really well in my fitness journey. She is great and inspiring. I lost 12 kg in just 4 months.",
      result: "Lost 12 kg in just 4 months.",
    },
    {
      name: "Priya",
      text: "Training with Sula was a wonderful experience. Her approach made all concerns easy to understand. Highly recommend!",
      result: "Improved strength & stamina.",
    },
  ];

  return (
    <section className="bg-white text-black py-16 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          See How Coaches Just Like You{" "}
          <span className="text-blue-600">Scaled to 7 Figures</span>
        </h2>
      </div>

      {/* ✅ Marquee wrapper */}
      <div className="marquee-container">
        <div className="marquee-content">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="w-[220px] sm:w-[240px] md:w-[260px] 
              bg-gradient-to-br from-blue-50 via-white to-blue-100
              backdrop-blur-xl border border-gray-200
              p-4 rounded-xl shadow-md text-center"
            >
              {/* Avatar circle */}
              <div
                className="w-12 h-12 mx-auto rounded-full 
                bg-gradient-to-br from-white to-blue-100
                border border-gray-300 mb-3"
              ></div>

              {/* Name */}
              <h3 className="text-base font-bold text-gray-800">{t.name}</h3>

              {/* Stars */}
              <div className="flex justify-center text-yellow-500 mb-1">
                {"★".repeat(5)}
              </div>

              {/* Testimonial */}
              <p className="text-xs italic mb-3 text-gray-600">"{t.text}"</p>

              {/* Result badge */}
              <span
                className="inline-block bg-blue-100 text-blue-900 font-semibold 
                px-3 py-1 rounded-full text-xs border border-blue-200"
              >
                {t.result}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
