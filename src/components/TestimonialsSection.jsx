import React, { useState } from "react";
import "./marquee.css";
import snehaProtrait from "../assets/sneha-protrait.jpg";
import sourav from "../assets/sourav.jpg";
import prashant from "../assets/prashant.jpg";
import sula from "../assets/sula.jpg";

export default function TestimonialsMarquee() {
  const [isMarqueePaused, setIsMarqueePaused] = useState(false);

  const testimonials = [
    {
      name: "Sneha",
      text: "Their data-driven approach gave me clarity and confidence, proving they are truly the best at what they do.",
      result: "Scaled 4X in under 6 months with zero backend stress.",
      image: snehaProtrait,
    },
    {
      name: "Sourav",
      text: "The Scale100Million team feels like an extension of my business, handling the backend so I can focus fully on coaching.",
      result: "Hit 5X growth in Revenue in only 3 months.",
      image: sourav, 
    },
    {
      name: "Prashant",
      text: "Scale100Million turned my overwhelm into stress-free systems, making scaling smooth, predictable, and backed by the best partners.",
      result: "I scaled my revenue to ₹8 lakh/month in just 3.5 months.",
      image: prashant, 
    },
    {
      name: "Sula",
      text: "The Scale100Million team transformed my chaos into simple, reliable systems, making growth smooth and stress-free.",
      result: "Hit 5X growth in Revenue in just 3 months.",
      image: sula, 
    },
  ];

  return (
    <section className="bg-white text-black pt-0 pb-4 md:py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold px-2">
          See How Coaches Just Like You{" "}
          <span className="text-blue-600">Scaled to 7 Figures</span>
        </h2>
      </div>

      {/* Testimonials Marquee */}
      <div className="marquee-wrapper overflow-hidden mb-12">
        <div className="marquee-track flex gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-[220px] sm:w-[240px] md:w-[260px] bg-gradient-to-br from-blue-50 via-white to-blue-100 backdrop-blur-xl border border-gray-200 p-4 rounded-xl shadow-md text-center flex-shrink-0"
            >
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 mx-auto rounded-full object-cover mb-3"
                />
              ) : (
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-white to-blue-100 border border-gray-300 mb-3"></div>
              )}
              <h3 className="text-base font-bold text-gray-800">{t.name}</h3>
              <div className="flex justify-center text-yellow-500 mb-1">
                {"★".repeat(5)}
              </div>
              <p className="text-xs italic mb-3 text-gray-600">"{t.text}"</p>
              <span className="inline-block bg-blue-100 text-blue-900 font-semibold px-3 py-1 rounded-full text-xs border border-blue-200">
                {t.result}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Videos Marquee */}
      <div className="marquee-wrapper overflow-hidden">
        <div
          className={`marquee-track flex gap-6 ${isMarqueePaused ? "paused" : ""}`}
          onMouseEnter={() => setIsMarqueePaused(true)}
          onMouseLeave={() => setIsMarqueePaused(false)}
        >
          <video
            className="w-[260px] sm:w-[300px] md:w-[300px] h-[300px] object-cover rounded-xl shadow-lg flex-shrink-0"
            controls
            src="/path-to-video1.mp4"
          />
          <video
            className="w-[260px] sm:w-[300px] md:w-[300px] h-[300px] object-cover rounded-xl shadow-lg flex-shrink-0"
            controls
            src="/path-to-video2.mp4"
          />
        </div>
      </div>
    </section>
  );
}