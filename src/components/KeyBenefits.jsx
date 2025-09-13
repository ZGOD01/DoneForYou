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
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          {/* First two benefits */}
          <div className="flex flex-row justify-between gap-4 w-full md:flex-grow">
            {benefits.slice(0, 2).map((b, i) => (
              <div
                key={i}
                className={`
                  flex items-center gap-2 rounded-full py-4
                  bg-gradient-to-br from-blue-50 via-white to-blue-100
                  backdrop-blur-xl border border-gray-200
                  shadow-md transition-all duration-300
                  px-4 justify-center text-sm whitespace-nowrap flex-grow min-w-0 
                  md:flex-1
                `}
                style={{
                  boxShadow: "inset 0 0 25px rgba(59, 130, 246, 0.25)",
                }}
              >
                <span className="font-medium text-gray-800 text-sm text-glow-effect">
                  {b.title}
                </span>
              </div>
            ))}
          </div>

          {/* Third benefit */}
          <div className="w-full flex justify-center md:w-auto md:flex-1">
            <div
              className={`
                flex items-center gap-2 rounded-full py-4
                bg-gradient-to-br from-blue-50 via-white to-blue-100
                backdrop-blur-xl border border-gray-200
                shadow-md transition-all duration-300
                px-4 justify-center text-sm whitespace-nowrap flex-grow min-w-0
              `}
              style={{
                boxShadow: "inset 0 0 25px rgba(59, 130, 246, 0.25)",
                width: "100%", // ✅ make third button equal width on desktop
              }}
            >
              <span className="font-medium text-gray-800 text-sm text-glow-effect">
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
