import { CheckCircle2 } from "lucide-react";
import VideoSection from "./VideoSection";

export default function KeyBenefits() {
  const benefits = [
    { title: "Don’t need 100k Followers" },
    { title: "No Endless Content" },
    { title: "NO Begging in DMs" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto px-4">
        {/* Main container for the benefit boxes */}
        {/* Mobile: flex-col, Desktop: flex-row, justify-between */}
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          {/* Container for the first two benefits. 
              Mobile: flex-row, Desktop: flex-grow to fill space */}
          <div className="flex flex-row justify-between gap-4 w-full md:flex-grow">
            {benefits.slice(0, 2).map((b, i) => (
              <div
                key={i}
                className={`
                  flex items-center gap-2 rounded-full py-4
                  bg-white shadow-md border border-gray-200
                  transition-all duration-300
                  px-4
                  justify-center
                  text-sm
                  whitespace-nowrap
                  flex-1
                  min-w-0
                  md:flex-1 👈
                `}
              >
                <span className="font-medium text-gray-800 text-sm">
                  {b.title}
                </span>
              </div>
            ))}
          </div>

          {/* Third benefit box. 
              Mobile: w-full, Desktop: no width constraint, auto-aligned */}
          <div className="w-full flex justify-center md:w-auto">
            <div
              className={`
                flex items-center gap-2 rounded-full py-4
                bg-white shadow-md border border-gray-200
                transition-all duration-300
                px-4
                justify-center
                text-sm
                whitespace-nowrap
                flex-1
                min-w-0
                md:flex-1 👈
              `}
            >
              <span className="font-medium text-gray-800 text-sm">
                {benefits[2].title}
              </span>
            </div>
          </div>
        </div>

        {/* Video section */}
        <div className="mt-4 sm:mt-6 w-full">
          <VideoSection />
        </div>
      </div>
    </div>
  );
}