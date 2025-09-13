import React from "react";
import CallToActionButton from "./CallToActionButton";
import PipelineBackground from "./PipelineBackground"; // ✅ Import the new component

export default function BeforeAfterMarquee() {
  return (
    <section className="bg-white py-16">
      <div className="text-center mb-12 pr-5 pl-5">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          The Only System Top{" "}
          <span className="text-blue-600">1% Fat Loss Coaches</span> Need To
          Scale To <span className="text-blue-600">₹1 Cr+ This Year.</span>
        </h2>
      </div>

      {/* ✅ Replaced marquee with PipelineBackground */}
      <PipelineBackground />

      {/* ✅ CTA Button */}
      <div className="mt-12 flex justify-center">
        <CallToActionButton />
      </div>
    </section>
  );
}
