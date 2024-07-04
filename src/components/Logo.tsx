// src/Logo.tsx
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-64 h-64">
        <div className="absolute top-0 left-0 w-full h-full border-8 border-transparent border-t-[#9BCD31] border-r-[#FF4500] border-b-[#A3A3A3] border-l-[#4682B4] transform rotate-45"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center transform -rotate-45">
          <h1 className="text-3xl font-bold">HTML & CSS</h1>
          <p className="text-lg">design and build websites</p>
        </div>
      </div>
    </div>
  );
}

export default Logo;
