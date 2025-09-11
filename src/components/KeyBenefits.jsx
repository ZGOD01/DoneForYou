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
      {/* Cards */}
      <div
        className="
          max-w-4xl w-full
          mx-auto 
          grid grid-cols-2 gap-2 
          md:flex md:flex-row md:justify-center md:gap-3
          px-4
        "
      >
        {benefits.map((b, i) => (
          <div
            key={i}
            className={`
              flex items-center gap-2 rounded-full px-4 py-2.5 
              bg-white shadow-md border border-gray-200
              transition-all duration-300
              ${
                i === 2 ? "col-span-2 justify-center" : "justify-center"
              }
            `}
          >
            {/* <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"> 
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div> */}
            
            <span className="font-medium text-gray-800 text-xs sm:text-base whitespace-nowrap"> 
              {b.title}
            </span>
          </div>
        ))}
      </div>

      {/* This container will now be full-width, allowing the video to fill it */}
      <div className="mt-2 sm:mt-4 w-full max-w-3xl">
        <VideoSection />
      </div>
    </div>
  );
}