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
    <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12 lg:gap-24">
        
        {/* Island 1 - Current Reality */}
        <div className="island-card transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-white/50 uppercase">Island 1</h2>
          <ul className="list-none space-y-4 text-white/70">
            <li className="flex items-center">
              <FaHandHoldingUsd className="text-pink-500 text-3xl mr-4" />
              <span>Unpredictable ₹1-2L/month</span>
            </li>
            <li className="flex items-center">
              <FaSearchDollar className="text-pink-500 text-3xl mr-4" />
              <span>Clients only when you chase</span>
            </li>
            <li className="flex items-center">
              <FaMobileAlt className="text-pink-500 text-3xl mr-4" />
              <span>Time trapped in DMs instead of coaching</span>
            </li>
          </ul>
        </div>
        
        {/* The Bridge - DFY System */}
        <div className="flex-1 flex flex-col items-center relative">
          <h3 className="text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-6 uppercase tracking-wider">
            The Boat: DFY System
          </h3>
          
          <div className="relative w-full flex items-center justify-center">
            {/* The animated glowing line */}
            <div className="w-full h-[3px] bg-gradient-to-r from-blue-500 to-cyan-500 relative rounded-full glow-line"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between w-full mt-8 text-center text-sm lg:text-base">
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <FaFacebookSquare className="text-cyan-400 text-3xl mb-2" />
              <span>Meta Ads</span>
            </div>
            <FaLongArrowAltRight className="hidden lg:block text-blue-400 text-2xl self-center" />
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <FaVideo className="text-cyan-400 text-3xl mb-2" />
              <span>VSL Funnel</span>
            </div>
            <FaLongArrowAltRight className="hidden lg:block text-blue-400 text-2xl self-center" />
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <FaEnvelopeOpenText className="text-cyan-400 text-3xl mb-2" />
              <span>Automated Follow-ups</span>
            </div>
            <FaLongArrowAltRight className="hidden lg:block text-blue-400 text-2xl self-center" />
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <FaCalendarCheck className="text-cyan-400 text-3xl mb-2" />
              <span>High-ticket Sales</span>
            </div>
            <FaLongArrowAltRight className="hidden lg:block text-blue-400 text-2xl self-center" />
            <div className="flex flex-col items-center mb-4 lg:mb-0">
              <FaCreditCard className="text-cyan-400 text-3xl mb-2" />
              <span>Payment Collection</span>
            </div>
          </div>
        </div>
        
        {/* Island 2 - Dream Business */}
        <div className="island-card transition-transform transform hover:scale-105 duration-300">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-cyan-400 uppercase">Island 2</h2>
          <ul className="list-none space-y-4 text-white/90">
            <li className="flex items-center">
              <FaChartLine className="text-cyan-400 text-3xl mr-4 drop-shadow-md shadow-cyan-400" />
              <span>₹10L/month predictable revenue</span>
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-cyan-400 text-3xl mr-4 drop-shadow-md shadow-cyan-400" />
              <span>Qualified clients booking calls daily</span>
            </li>
            <li className="flex items-center">
              <FaComments className="text-cyan-400 text-3xl mr-4 drop-shadow-md shadow-cyan-400" />
              <span>You focus only on coaching + closing</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Custom CSS for glowing line animation */}
      <style>
        {`
          .glow-line {
            animation: pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite alternate;
          }
          @keyframes pulse-glow {
            0%, 100% {
              box-shadow: 0 0 5px var(--tw-cyan-400), 0 0 10px var(--tw-blue-400);
            }
            50% {
              box-shadow: 0 0 15px var(--tw-cyan-400), 0 0 25px var(--tw-blue-400);
            }
          }
          .island-card {
            background-color: rgba(10, 10, 10, 0.6);
            border-radius: 1rem;
            padding: 2.5rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
          }
        `}
      </style>
    </div>
  );
};

export default Flowchart;
