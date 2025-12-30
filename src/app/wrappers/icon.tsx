'use client';

import React from "react";

interface IconProps {
  children: React.ReactNode;
  url?: string; // optional URL to navigate to
}

function Icon({ children, url }: IconProps) {
  const handleClick = () => {
    if (url) {
      window.open(url, "_blank"); // opens link in a new tab
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-12 h-12 rounded-full 
        bg-gradient-to-br from-purple-500 to-indigo-500 
        flex items-center justify-center text-white text-lg 
        shadow-lg hover:scale-105 transition cursor-pointer"
    >
      {children}
    </div>
  );
}

export default Icon;
