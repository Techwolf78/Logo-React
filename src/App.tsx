// src/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-64 h-64">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-transparent border-t-[#9BCD31] border-r-[#FF4500] border-b-[#A3A3A3] border-l-[#4682B4] transform rotate-45"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-2xl font-bold">HTML & CSS</h1>
          <p className="text-sm">design and build websites</p>
        </div>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#9BCD31]"></div>
        <div className="absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#FF4500]"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#A3A3A3]"></div>
        <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#4682B4]"></div>
      </div>
    </div>
  );
}

export default Logo;
