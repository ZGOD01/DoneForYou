import { motion } from "framer-motion";

export default function CallToActionButton() {
  const handleClick = (e) => {
    // Prevent the default link behavior
    e.preventDefault();

    // Check if the Zoho PageSense custom event tracker is available
    if (window._vis_opt_goal_conversions) {
      // Send the custom event with the exact name you used in Zoho
      // In this example, 'cta_button_click'
      window._vis_opt_goal_conversions.push(['cta_button_click']);
    }

    // Now, perform the original action: redirect the user to the home page
    window.location.href = "/";
  };

  return (
    <motion.div
      className="py-2 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        // Use the onClick handler instead of just href
        onClick={handleClick}
        className="relative w-full sm:max-w-md px-12 py-8 bg-red-600 text-white font-semibold 
          text-sm sm:text-base md:text-lg rounded-full shadow-lg overflow-hidden 
          transition transform hover:scale-105 duration-300 ease-out"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Book Your 7-Figure Strategy Call Now
        {/* Cross Line Effect */}
        <span className="animate-cross-line"></span>
      </motion.a>
    </motion.div>
  );
}