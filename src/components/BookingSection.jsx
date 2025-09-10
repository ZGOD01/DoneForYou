import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { motion, AnimatePresence } from "framer-motion";
import 'react-calendar/dist/Calendar.css';

export default function BookingSection() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleBookClick = () => {
    setIsCalendarOpen(true);
    setIsPopupVisible(false);
  };

  const handleDateChange = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) {
      // Past dates not allowed → popup not shown
      alert("Please select a valid future date.");
      return;
    }

    // Valid date → show popup
    console.log("Valid date selected:", date);
    setIsCalendarOpen(false);
    setIsPopupVisible(true);

    // Auto-close popup after 3 seconds and reset to just button
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 3000);
  };

  return (
    <div>
      {/* Book Button */}
      <div className="flex justify-center py-2">
        <motion.button
          onClick={handleBookClick}
          className="relative px-6 py-3 bg-red-600 text-white font-semibold 
            rounded-full shadow-lg overflow-hidden w-max 
            transition transform hover:scale-105 duration-300 ease-out"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Strategy Call
          <span className="animate-cross-line"></span>
        </motion.button>
      </div>

      {/* Calendar */}
      <AnimatePresence>
        {isCalendarOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex justify-center p-4"
          >
            <Calendar
              onChange={handleDateChange}
              value={new Date()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Popup */}
      <AnimatePresence>
        {isPopupVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white text-black p-8 rounded-lg shadow-2xl text-center">
              <h2 className="text-xl font-bold">🎉 Thank you!</h2>
              <p className="mt-2">We will contact you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
