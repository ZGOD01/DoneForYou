import { CheckCircle } from "lucide-react";
import VideoSection from "./VideoSection";

export default function KeyBenefits() {
  const benefits = [
    { title: "Don’t need 100k Followers" },
    { title: "No Endless Content" },
    { title: "NO Begging in DMs" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-4">
        {/* Buttons container */}
        <div className="flex flex-col gap-3 md:flex-row md:gap-4 md:justify-between">
          {/* First two buttons */}
          <div className="flex flex-row justify-between gap-3 w-full md:flex-grow">
            {benefits.slice(0, 2).map((b, i) => (
              <div
                key={i}
                className={`
                  flex items-center gap-1.5 rounded-full py-2.5 sm:py-3
                  bg-gradient-to-br from-blue-50 via-white to-blue-100
                  backdrop-blur-xl border border-gray-200
                  shadow-md transition-all duration-300
                  px-3 sm:px-4 justify-center text-xs sm:text-sm
                  whitespace-nowrap flex-grow min-w-0 md:flex-1
                `}
                style={{
                  boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.25)",
                }}
              >
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0" />
                <span className="font-medium text-gray-800 truncate">
                  {b.title}
                </span>
              </div>
            ))}
          </div>

          {/* Third button (now equal width on desktop) */}
          <div className="w-full flex justify-center md:flex-1">
            <div
              className={`
                flex items-center gap-1.5 rounded-full py-2.5 sm:py-3
                bg-gradient-to-br from-blue-50 via-white to-blue-100
                backdrop-blur-xl border border-gray-200
                shadow-md transition-all duration-300
                px-3 sm:px-4 justify-center text-xs sm:text-sm
                whitespace-nowrap flex-grow min-w-0 md:flex-1
              `}
              style={{
                boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.25)",
              }}
            >
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0" />
              <span className="font-medium text-gray-800 truncate">
                {benefits[2].title}
              </span>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="mt-3 sm:mt-5 w-full">
          <VideoSection />
        </div>
      </div>
    </div>
  );
}
