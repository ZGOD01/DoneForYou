import React from 'react';

const Pipeline = () => {
  return (
    <div className="flex flex-col items-center p-4 sm:p-8 md:p-12 bg-white font-sans">
      <div className="mb-8 md:mb-10 text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black drop-shadow-lg">
          The Coach's Journey
        </h1>
      </div>

      <div className="flex w-full overflow-x-auto p-4 md:p-0">
        <div className="flex flex-shrink-0 items-center justify-center min-w-max">
          {/* BEFORE Card */}
          <div className="w-36 sm:w-48 md:w-64 p-3 sm:p-5 mr-3 sm:mr-6 md:mr-12 rounded-lg shadow-md bg-yellow-400">
            <h4 className="mb-1 text-sm sm:text-lg font-bold">BEFORE</h4>
            <ul className="list-none p-0 m-0 text-xs sm:text-sm">
              <li className="mb-1">Unpredictable ₹1.2L/month</li>
              <li className="mb-1">Clients only when you chase</li>
              <li className="mb-1">Time trapped in DMs instead of coaching</li>
            </ul>
          </div>

          {/* Pipeline Diagram */}
          <div className="flex flex-shrink-0 items-center">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-500 text-white font-bold text-sm sm:text-lg shadow-md">01</div>
            <div className="flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-orange-500 rounded-tr-lg"></div>
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500 text-white font-bold text-sm sm:text-lg shadow-md">02</div>
            <div className="flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-red-500 rounded-br-lg"></div>
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-pink-600 text-white font-bold text-sm sm:text-lg shadow-md">03</div>
            <div className="flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-pink-600 rounded-tr-lg"></div>
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-purple-600 text-white font-bold text-sm sm:text-lg shadow-md">04</div>
            <div className="flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-purple-600 rounded-br-lg"></div>
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-600 text-white font-bold text-sm sm:text-lg shadow-md">05</div>
            <div className="flex-shrink-0 w-8 h-4 sm:w-12 sm:h-5 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-indigo-600 rounded-tr-lg"></div>
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-700 text-white font-bold text-sm sm:text-lg shadow-md">06</div>
          </div>

          {/* AFTER Card */}
          <div className="w-36 sm:w-48 md:w-64 p-3 sm:p-5 ml-3 sm:ml-6 md:ml-12 rounded-lg shadow-md bg-blue-400">
            <h4 className="mb-1 text-sm sm:text-lg font-bold">AFTER</h4>
            <ul className="list-none p-0 m-0 text-xs sm:text-sm">
              <li className="mb-1">₹1.1L/month predictable revenue</li>
              <li className="mb-1">Qualified clients booking calls daily</li>
              <li className="mb-1">You focus only on coaching + closing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12 p-4 sm:p-5 bg-gray-600 text-white rounded-lg shadow-lg text-center w-full">
        <h3 className="mb-2 text-md sm:text-xl font-bold uppercase">THE PROCESS</h3>
        <div className="flex flex-wrap justify-around text-xs sm:text-sm">
          <div className="flex items-center mx-2 my-1 sm:mx-4 sm:my-0">
            <i className="fas fa-ad text-sm sm:text-lg mr-1 sm:mr-2"></i>
            <span>Meta Ads</span>
          </div>
          <div className="flex items-center mx-2 my-1 sm:mx-4 sm:my-0">
            <i className="fas fa-funnel-dollar text-sm sm:text-lg mr-1 sm:mr-2"></i>
            <span>VSL Funnel</span>
          </div>
          <div className="flex items-center mx-2 my-1 sm:mx-4 sm:my-0">
            <i className="fas fa-robot text-sm sm:text-lg mr-1 sm:mr-2"></i>
            <span>Automaters</span>
          </div>
          <div className="flex items-center mx-2 my-1 sm:mx-4 sm:my-0">
            <i className="fas fa-handshake text-sm sm:text-lg mr-1 sm:mr-2"></i>
            <span>High-ticket Follow-ups</span>
          </div>
          <div className="flex items-center mx-2 my-1 sm:mx-4 sm:my-0">
            <i className="fas fa-credit-card text-sm sm:text-lg mr-1 sm:mr-2"></i>
            <span>Payment Collection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipeline;