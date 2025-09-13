import React from 'react';

const Pipeline = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 md:p-12 bg-white font-sans">
      <div className="mb-8 md:mb-10 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black drop-shadow-lg">
          The Coach's Journey
        </h1>
      </div>

      {/* Centered container with max width */}
      <div className="flex w-full justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1100px]">
          
          {/* BEFORE Card */}
          <div className="w-32 sm:w-40 md:w-48 p-3 sm:p-4 mr-3 sm:mr-5 md:mr-8 rounded-lg shadow-md bg-yellow-400">
            <h4 className="mb-1 text-sm sm:text-lg font-bold">BEFORE</h4>
            <ul className="list-none p-0 m-0 text-xs sm:text-sm">
              <li className="mb-1">Unpredictable ₹1.2L/month</li>
              <li className="mb-1">Clients only when you chase</li>
              <li className="mb-1">Time trapped in DMs instead of coaching</li>
            </ul>
          </div>

          {/* Pipeline Diagram */}
          <div className="flex items-center">
            {/* STEP 1 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-orange-500 text-white font-bold text-sm sm:text-lg shadow-md">
                01
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none">
                Meta Ads
              </p>
            </div>
            <div className="flex-shrink-0 w-7 h-3 sm:w-10 sm:h-4 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-orange-500 rounded-tr-lg"></div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-red-500 text-white font-bold text-sm sm:text-lg shadow-md">
                02
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none">
                VSL Funnel
              </p>
            </div>
            <div className="flex-shrink-0 w-7 h-3 sm:w-10 sm:h-4 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-red-500 rounded-br-lg"></div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-pink-600 text-white font-bold text-sm sm:text-lg shadow-md">
                03
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none">
                Automater
              </p>
            </div>
            <div className="flex-shrink-0 w-7 h-3 sm:w-10 sm:h-4 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-pink-600 rounded-tr-lg"></div>

            {/* STEP 4 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-purple-600 text-white font-bold text-sm sm:text-lg shadow-md">
                04
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none text-center max-w-[70px] leading-tight">
                High-ticket Follow-ups
              </p>
            </div>
            <div className="flex-shrink-0 w-7 h-3 sm:w-10 sm:h-4 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-purple-600 rounded-br-lg"></div>

            {/* STEP 5 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-indigo-600 text-white font-bold text-sm sm:text-lg shadow-md">
                05
              </div>
              <p className="mt-4 text-[10px] sm:text-xs md:text-sm text-gray-700 blur-[2px] select-none">
                Payment Collection
              </p>
            </div>
            <div className="flex-shrink-0 w-7 h-3 sm:w-10 sm:h-4 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-indigo-600 rounded-tr-lg"></div>

            {/* STEP 6 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-700 text-white font-bold text-sm sm:text-lg shadow-md">
                06
              </div>
            </div>
          </div>

          {/* AFTER Card */}
          <div className="w-32 sm:w-40 md:w-48 p-3 sm:p-4 ml-3 sm:ml-5 md:ml-8 rounded-lg shadow-md bg-blue-400">
            <h4 className="mb-1 text-sm sm:text-lg font-bold">AFTER</h4>
            <ul className="list-none p-0 m-0 text-xs sm:text-sm">
              <li className="mb-1">₹1.1L/month predictable revenue</li>
              <li className="mb-1">Qualified clients booking calls daily</li>
              <li className="mb-1">You focus only on coaching + closing</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pipeline;
