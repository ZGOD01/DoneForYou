import React from 'react';
import { 
  FaHandHoldingUsd, 
  FaSearchDollar, 
  FaMobileAlt, 
  FaChartLine, 
  FaCheckCircle, 
  FaComments, 
  FaLongArrowAltRight, 
  FaFacebookSquare, 
  FaVideo, 
  FaEnvelopeOpenText, 
  FaCalendarCheck, 
  FaCreditCard 
} from 'react-icons/fa';

const Flowchart = () => {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12 lg:gap-20">
        
        {/* Island 1 - Current Reality */}
        <div className="island-card">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 uppercase">
            Island 1
          </h2>
          <ul className="list-none space-y-5 text-gray-700">
            <li className="flex items-center">
              <FaHandHoldingUsd className="text-blue-500 text-3xl mr-4" />
              <span>Unpredictable ₹1-2L/month</span>
            </li>
            <li className="flex items-center">
              <FaSearchDollar className="text-blue-500 text-3xl mr-4" />
              <span>Clients only when you chase</span>
            </li>
            <li className="flex items-center">
              <FaMobileAlt className="text-blue-500 text-3xl mr-4" />
              <span>Time trapped in DMs instead of coaching</span>
            </li>
          </ul>
        </div>
        
        {/* The Bridge - DFY System */}
        <div className="flex-1 flex flex-col items-center relative">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-6 uppercase tracking-wider">
            The Boat: DFY System
          </h3>
          
          {/* Glowing Line */}
          <div className="relative w-full flex items-center justify-center">
            <div className="w-full h-[4px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full glow-line"></div>
          </div>
          
          {/* Steps */}
          <div className="flex flex-col lg:flex-row justify-between w-full mt-10 text-center text-sm lg:text-base">
            <div className="flex flex-col items-center mb-6 lg:mb-0">
              <FaFacebookSquare className="text-blue-500 text-3xl mb-2" />
              <span>Meta Ads</span>
            </div>
            <FaLongArrowAltRight className="hidden lg:block text-gray-500 text-xl self-center" />
            <div className="flex flex-col items-center mb-6 lg:mb-0">
              <FaVideo className="text-blue-500 text-3xl mb-2" />
              <span>VSL Funnel</span>
            </div>
            <FaLongArrowAltRight className="hidden lg:block text-gray-500 text-xl self-center" />
            <div className="flex flex-col items-center mb-6 lg:mb-0">
              <FaEnvelopeOpenText className="text-blue-500 text-3xl mb-2" />
              <span>Automated Follow-ups</span>
            </div>
            <FaLongArrowAltRight className="hidden lg:block text-gray-500 text-xl self-center" />
            <div className="flex flex-col items-center mb-6 lg:mb-0">
              <FaCalendarCheck className="text-blue-500 text-3xl mb-2" />
              <span>High-ticket Sales</span>
            </div>
            <FaLongArrowAltRight className="hidden lg:block text-gray-500 text-xl self-center" />
            <div className="flex flex-col items-center">
              <FaCreditCard className="text-blue-500 text-3xl mb-2" />
              <span>Payment Collection</span>
            </div>
          </div>
        </div>
        
        {/* Island 2 - Dream Business */}
        <div className="island-card">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 uppercase">
            Island 2
          </h2>
          <ul className="list-none space-y-5 text-gray-700">
            <li className="flex items-center">
              <FaChartLine className="text-cyan-500 text-3xl mr-4 drop-shadow-md" />
              <span>₹10L/month predictable revenue</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-cyan-500 text-3xl mr-4 drop-shadow-md" />
              <span>Qualified clients booking calls daily</span>
            </li>
            <li className="flex items-center">
              <FaComments className="text-cyan-500 text-3xl mr-4 drop-shadow-md" />
              <span>You focus only on coaching + closing</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Custom CSS */}
      <style>
        {`
          .glow-line {
            animation: pulse-glow 2s ease-in-out infinite alternate;
          }
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(0, 160, 255, 0.6), 0 0 10px rgba(0, 120, 255, 0.5);
            }
            50% {
              box-shadow: 0 0 15px rgba(0, 160, 255, 0.7), 0 0 25px rgba(0, 120, 255, 0.6);
            }
          }
          .island-card {
            background-color: #fff;
            border-radius: 1rem;
            padding: 2.5rem;
            border: 1px solid rgba(0, 0, 0, 0.05);
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            transition: transform 0.3s ease;
          }
          .island-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.08);
          }
        `}
      </style>
    </div>
  );
};

export default Flowchart;
