import React from "react";
import Heading from "../wrappers/heading";

const signals = [
  {
    id: 1,
    title: "Developers",
    heading: "Developer-First Thinking",
    description:
      "I build products with clean UI, scalable architecture, and real-world use cases — not just demos.",
  },
  {
    id: 2,
    title: "Users",
    heading: "User-Centric Design",
    description:
      "Every interface I create focuses on clarity, usability, and intuitive experiences.",
  },
  {
    id: 3,
    title: "Business",
    heading: "Business & Growth Awareness",
    description:
      "From UTM tracking to role-based dashboards, I build with impact, metrics, and scalability in mind.",
  },
  {
    id: 4,
    title: "Bridge",
    heading: "The Bridge Between Tech & People",
    description:
      "I translate complex technology into products, content, and experiences people actually understand.",
  },
];

const WhatIBring = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 relative my-16">
      <div
        aria-hidden
        className="absolute -top-32 right-0 translate-x-1/2
                   max-w-7xl h-[320px]
                   bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(255,255,255,0)_70%)]
                   blur-3xl opacity-70 pointer-events-none"
      />

      <Heading className="text-center mb-10">What I Bring to the Table</Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {signals.map((signal) => (
          <div
            key={signal.id}
            className="p-5 sm:p-6 bg-[#1E1E1E] rounded-2xl shadow-lg border-b-4 border-purple-700
                       hover:border-white transition-all duration-300 group"
          >
            <span className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-wider">
              {signal.title}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-2 mb-3 group-hover:text-purple-300 transition-colors">
              {signal.heading}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              {signal.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIBring;
