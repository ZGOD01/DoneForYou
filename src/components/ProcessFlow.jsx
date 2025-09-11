import React from 'react';
import island from '../assets/island.png';

const Flowchart = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center mb-8 drop-shadow-lg">
        The Coach's Journey
      </h1>
      <div 
        className="relative w-full max-w-4xl h-[400px] sm:h-[500px] bg-cover bg-center bg-no-repeat rounded-xl shadow-2xl p-6 md:p-8 border-2 border-yellow-400"
        style={{ backgroundImage: `url(${island})` }}
      >
        {/* This div remains to hold the background image and define its boundaries */}
      </div>
      
      {/* Container for the boxes, now positioned to slightly overlap the bottom of the image */}
      <div className="flex justify-between w-full max-w-4xl -mt-20 sm:-mt-24 z-10 relative"> 
        {/* Island 1 data box */}
        <div className="w-[30%] text-left p-2 flex">
          <div className="bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-sm p-3 rounded-lg shadow-xl border border-gray-300 flex-grow"> 
            <p className="text-gray-800 text-xs sm:text-sm md:text-base font-bold">Unpredictable ₹1-2L/month</p>
            <p className="text-gray-800 text-xs sm:text-sm md:text-base font-bold mt-1">Clients only when you chase</p>
            <p className="text-gray-800 text-xs sm:text-sm md:text-base font-bold mt-1">Time trapped in DMs instead of coaching</p>
          </div>
        </div>

        {/* The Boat data box */}
        <div className="w-[30%] text-center p-2 flex">
          <div className="bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-sm p-3 rounded-lg shadow-xl border border-gray-300 flex-grow">
            <div className="space-y-1">
              <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium">Meta Ads</p>
              <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium">VSL Funnel</p>
              <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium">Automated Follow-ups</p>
              <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium">High-ticket Sales</p>
              <p className="text-gray-800 text-xs sm:text-sm md:text-base font-medium">Payment Collection</p>
            </div>
          </div>
        </div>

        {/* Island 2 data box */}
        <div className="w-[30%] text-left p-2 flex">
          <div className="bg-gray-100 bg-opacity-80 backdrop-filter backdrop-blur-sm p-3 rounded-lg shadow-xl border border-gray-300 flex-grow">
            <p className="text-gray-800 text-xs sm:text-sm md:text-base font-bold">₹10L/month predictable revenue</p>
            <p className="text-gray-800 text-xs sm:text-sm md:text-base font-bold mt-1">Qualified clients booking calls daily</p>
            <p className="text-gray-800 text-xs sm:text-sm md:text-base font-bold mt-1">You focus only on coaching + closing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flowchart;