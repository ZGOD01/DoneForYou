import React from 'react';

const Pipeline = () => {
  return (
    <div className="flex flex-col items-center p-12 bg-white font-sans">
      <div className="mb-10 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center mb-8 drop-shadow-lg">
        The Coach's Journey
      </h1>
      </div>

      <div className="flex items-center justify-center w-full">
        <div className="w-64 p-5 mr-12 rounded-lg shadow-md bg-yellow-400">
          <h4 className="mb-2 text-lg font-bold">BEFORE</h4>
          <ul className="list-none p-0 m-0 text-sm">
            <li className="mb-1">Unpredictable ₹1.2L/month</li>
            <li className="mb-1">Clients only when you chase</li>
            <li className="mb-1">Time trapped in DMs instead of coaching</li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white font-bold text-lg shadow-md">01</div>
          <div className="w-12 h-5 border-t-4 border-r-4 border-orange-500 rounded-tr-lg"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white font-bold text-lg shadow-md">02</div>
          <div className="w-12 h-5 border-b-4 border-r-4 border-red-500 rounded-br-lg"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-600 text-white font-bold text-lg shadow-md">03</div>
          <div className="w-12 h-5 border-t-4 border-r-4 border-pink-600 rounded-tr-lg"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold text-lg shadow-md">04</div>
          <div className="w-12 h-5 border-b-4 border-r-4 border-purple-600 rounded-br-lg"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-lg shadow-md">05</div>
          <div className="w-12 h-5 border-t-4 border-r-4 border-indigo-600 rounded-tr-lg"></div>
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white font-bold text-lg shadow-md">06</div>
        </div>

        <div className="w-64 p-5 ml-12 rounded-lg shadow-md bg-blue-400">
          <h4 className="mb-2 text-lg font-bold">AFTER</h4>
          <ul className="list-none p-0 m-0 text-sm">
            <li className="mb-1">₹1.1L/month predictable revenue</li>
            <li className="mb-1">Qualified clients booking calls daily</li>
            <li className="mb-1">You focus only on coaching + closing</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 p-5 bg-gray-600 text-white rounded-lg shadow-lg text-center">
        <h3 className="mb-4 text-xl font-bold uppercase">THE PROCESS</h3>
        <div className="flex justify-around">
          <div className="flex items-center mx-4">
            <i className="fas fa-ad text-lg mr-2"></i>
            <span>Meta Ads</span>
          </div>
          <div className="flex items-center mx-4">
            <i className="fas fa-funnel-dollar text-lg mr-2"></i>
            <span>VSL Funnel</span>
          </div>
          <div className="flex items-center mx-4">
            <i className="fas fa-robot text-lg mr-2"></i>
            <span>Automaters</span>
          </div>
          <div className="flex items-center mx-4">
            <i className="fas fa-handshake text-lg mr-2"></i>
            <span>High-ticket Follow-ups</span>
          </div>
          <div className="flex items-center mx-4">
            <i className="fas fa-credit-card text-lg mr-2"></i>
            <span>Payment Collection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipeline;