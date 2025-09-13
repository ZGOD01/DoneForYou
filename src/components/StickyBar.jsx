import React, { useState, useEffect } from 'react';

const StickyBar = () => {
    const [minutes, setMinutes] = useState(10);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);

        return () => {
            clearInterval(myInterval);
        };
    }, [minutes, seconds]);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg flex items-center justify-between border-t border-gray-200 lg:px-20 z-[1000]">
            {/* Left-aligned content */}
            <div className="flex flex-col items-start space-y-1">
                <div className="text-red-600 text-2xl font-bold">
                    {minutes.toString().padStart(2, '0')}:
                    {seconds.toString().padStart(2, '0')}
                </div>
                <div className="flex items-center space-x-2 text-base text-gray-700">
                    <span className="font-extrabold">Limited Slots Only!</span>
                </div>
            </div>

            {/* Right-aligned content */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <div className="bg-slate-800 text-white font-semibold text-xs px-4 py-1 rounded-full absolute -top-8 right-9 transform translate-x-1/4 translate-y-full">
                        3 Slots Left
                    </div>
                    <button className="bg-red-600 text-white font-semibold text-sm sm:text-base md:text-lg rounded-3xl shadow-lg overflow-hidden transition transform mt-1 px-8 py-3">
                        Book Your 7-Figure Strategy Call Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StickyBar;
