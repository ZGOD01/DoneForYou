import { Star } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });

    return controls.stop; // cleanup
  }, [value, duration, count]);

  return <span>{display.toLocaleString()}+</span>;
};

const Review = () => {
  return (
    <div className="w-full flex justify-center bg-white py-12">
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full shadow-md">
        {/* Avatar group */}
        <div className="flex -space-x-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <img
            src="https://randomuser.me/api/portraits/men/65.jpg"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
          <img
            src="https://randomuser.me/api/portraits/women/12.jpg"
            alt="user"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* Review Text */}
        <div className="flex items-center gap-1 text-sm text-black">
          <Star
            className="text-yellow-400 fill-yellow-400"
            size={16}
            strokeWidth={2.2}
          />
          <span className="font-medium">4.9 Review</span>
          <span className="mx-1">|</span>
          <span>
            <AnimatedNumber value={12000} /> Clients
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
