import React from "react";
import CallToActionButton from "./CallToActionButton";
import "./beforeAfterMarquee.css";

export default function BeforeAfterMarquee() {
  const cards = [
    { before: "https://picsum.photos/seed/before1/400/500", after: "https://picsum.photos/seed/after1/400/500" },
    { before: "https://picsum.photos/seed/before2/400/500", after: "https://picsum.photos/seed/after2/400/500" },
    { before: "https://picsum.photos/seed/before3/400/500", after: "https://picsum.photos/seed/after3/400/500" },
    { before: "https://picsum.photos/seed/before4/400/500", after: "https://picsum.photos/seed/after4/400/500" },
    { before: "https://picsum.photos/seed/before5/400/500", after: "https://picsum.photos/seed/after5/400/500" },
    { before: "https://picsum.photos/seed/before6/400/500", after: "https://picsum.photos/seed/after6/400/500" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          The Only System Top{" "}
          <span className="text-blue-600">1% Fat Loss Coaches</span> Need To
          Scale To <span className="text-blue-600">₹1 Cr+ This Year.</span>
        </h2>
      </div>

      {/* ✅ Marquee rows */}
      <div className="overflow-hidden space-y-8">
        {/* Top row - left to right */}
        <div className="before-after-row scroll-left">
          {cards.map((c, index) => (
            <div
              key={index}
              className="before-after-card relative flex w-64 h-80 rounded-xl overflow-hidden shadow-lg bg-gray-900"
            >
              <img src={c.before} alt="Before" className="w-1/2 h-full object-cover" />
              <img src={c.after} alt="After" className="w-1/2 h-full object-cover" />

              <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                Before
              </div>
              <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                After
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row - right to left */}
        <div className="before-after-row scroll-right">
          {cards.map((c, index) => (
            <div
              key={index}
              className="before-after-card relative flex w-64 h-80 rounded-xl overflow-hidden shadow-lg bg-gray-900"
            >
              <img src={c.before} alt="Before" className="w-1/2 h-full object-cover" />
              <img src={c.after} alt="After" className="w-1/2 h-full object-cover" />

              <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                Before
              </div>
              <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                After
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ CTA Button */}
      <div className="mt-12 flex justify-center">
        <CallToActionButton />
      </div>
    </section>
  );
}