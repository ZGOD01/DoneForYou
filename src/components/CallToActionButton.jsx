import { motion } from "framer-motion";

export default function CallToActionButton() {
  const handleClick = (e) => {
    // Prevent the default link behavior to handle it programmatically
    e.preventDefault();

    // Check if the Zoho PageSense object is loaded before pushing the event
    if (window.pagesense) {
      window.pagesense.push(['trackEvent', 'cta_button_click']);
    } else {
      console.error("Zoho PageSense not loaded. Unable to track custom event.");
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
        // Call the handleClick function when the user clicks the button
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