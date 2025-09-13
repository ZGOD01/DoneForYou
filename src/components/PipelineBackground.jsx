import React from 'react';

const Pipeline = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 md:p-12 bg-white font-sans">
      

      {/* Container with responsive layout */}
      <div className="flex w-full justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1100px]">

          {/* BEFORE Card */}
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 sm:p-6 mb-6 md:mb-0 md:mr-8 rounded-lg shadow-md bg-yellow-400">
            <h4 className="mb-2 text-sm sm:text-lg font-bold">BEFORE</h4>
            <ul className="list-disc list-outside text-xs sm:text-sm space-y-2 ml-4">
              <li>Unpredictable ₹1L/month revenue</li>
              <li>Clients only when you chase</li>
              <li>Time trapped in DMs instead of coaching</li>
            </ul>
          </div>

          {/* Pipeline Diagram */}
          <div className="flex flex-col md:flex-row items-center w-full">

            {/* STEP 1 */}
            <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full bg-orange-500 text-white font-bold text-sm sm:text-lg shadow-md">
                01
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none">
                Meta Ads
              </p>
              {/* Mobile arrow */}
              <div className="w-1 h-6 bg-orange-500 md:hidden"></div>
            </div>
            {/* Horizontal arrows for desktop */}
            <div className="hidden md:flex flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-orange-500 rounded-tr-lg"></div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full bg-red-500 text-white font-bold text-sm sm:text-lg shadow-md">
                02
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none">
                VSL Funnel
              </p>
              <div className="w-1 h-6 bg-red-500 md:hidden"></div>
            </div>
            <div className="hidden md:flex flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-red-500 rounded-br-lg"></div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full bg-pink-600 text-white font-bold text-sm sm:text-lg shadow-md">
                03
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none">
                Automater
              </p>
              <div className="w-1 h-6 bg-pink-600 md:hidden"></div>
            </div>
            <div className="hidden md:flex flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-pink-600 rounded-tr-lg"></div>

            {/* STEP 4 */}
            <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full bg-purple-600 text-white font-bold text-sm sm:text-lg shadow-md">
                04
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none text-center max-w-[70px] leading-tight">
                High-ticket Follow-ups
              </p>
              <div className="w-1 h-6 bg-purple-600 md:hidden"></div>
            </div>
            <div className="hidden md:flex flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-purple-600 rounded-br-lg"></div>

            {/* STEP 5 */}
            <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-4">
              <div className="flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full bg-indigo-600 text-white font-bold text-sm sm:text-lg shadow-md">
                05
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none">
                Payment Collection
              </p>
              <div className="w-1 h-6 bg-indigo-600 md:hidden"></div>
            </div>
            <div className="hidden md:flex flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-indigo-600 rounded-tr-lg"></div>

            {/* STEP 6 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 md:w-8 md:h-8 rounded-full bg-blue-700 text-white font-bold text-sm sm:text-lg shadow-md">
                06
              </div>
            </div>
          </div>

          {/* AFTER Card */}
          <div className="w-40 sm:w-48 md:w-56 h-auto p-4 sm:p-6 mt-6 md:mt-0 md:ml-8 rounded-lg shadow-md bg-blue-400">
            <h4 className="mb-2 text-sm sm:text-lg font-bold">AFTER</h4>
            <ul className="list-disc list-outside text-xs sm:text-sm space-y-2 ml-4">
              <li>₹10L/month predictable revenue</li>
              <li>Qualified clients booking calls daily</li>
              <li>You focus only on coaching + closing</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pipeline;
