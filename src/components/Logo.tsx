import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative w-96 h-96"> {/* Increased size to fit larger borders */}
        <div className="absolute top-0 left-0 w-full h-full border-[42px] border-transparent border-t-[#ca7c4e] border-r-[#beb9b7] border-b-[#199296] border-l-[#a0e4af] transform rotate-45"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">HTML <span className="text-orange-500">&</span> CSS</h1>
          <p className="text-m">design and build websites</p>
        </div>
      </div>
    </div>
  );
}

export default Logo;


