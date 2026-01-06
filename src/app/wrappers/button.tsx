'use client';

import React from "react";

interface buttonProps {
  children: React.ReactNode;
  className? : string
  
}

function CButton({ children , className }: buttonProps) {
  const handleClick = () => {
   
  };

  return (
    <button
      onClick={handleClick}
    className={`hidden md:inline-flex items-center justify-center h-12 px-6 rounded-full
          bg-linear-to-br from-[#8A66FC] to-[#5A34DF]
          text-white text-lg
          shadow-lg cursor-pointer $(className)`}
    >
      {children}
    </button>
  );
}

export default CButton;
