import { CheckCircle2 } from "lucide-react";

export default function KeyBenefits() {
  const benefits = [
    { title: "NO Sales Calls" },
    { title: "NO Endless Content" },
    { title: "NO Begging In DMs" },
  ];

  return (
    <div className="mt-8">
      <div 
        className="
          max-w-4xl mx-auto 
          grid grid-cols-2 gap-4 px-4
          md:flex md:flex-row md:justify-center md:gap-6
        "
      >
        {benefits.map((b, i) => (
          <div
            key={i}
            className={`
              flex items-center gap-3 rounded-full px-5 py-3
              bg-white shadow-md border border-gray-200
              transition-all duration-300
              ${i === 2 
                ? "col-span-2 justify-center w-[85%] mx-auto md:w-auto md:flex-1" // ✅ Equal width on desktop
                : "w-full md:w-auto md:flex-1"}                               // ✅ Equal width on desktop
            `}
          >
            {/* Blue circular icon */}
            <div className="flex items-center justify-center w-8 h-8 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-blue-500 to-blue-600">
              <CheckCircle2 className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-white" />
            </div>

            <span className="font-medium text-gray-800 text-sm sm:text-base">
              {b.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
