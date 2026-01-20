import React from "react";
import Heading from "../wrappers/heading";
import ExpeCard from "./ExpeCard";

const Experience = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 relative my-12">
       <div
  aria-hidden
  className="absolute -top-32 left-0 -translate-x-1/2 
             w-[700px] h-[320px]
             bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(255,255,255,0)_70%)]
             blur-3xl opacity-70 pointer-events-none"
/>

        <Heading  className="text-left text-xl">Experience — Fluxor</Heading>
        <p className="text-left text-sm md:text-xl font-bold bg-[linear-gradient(20deg,#ffffff_0%,rgba(255,255,255,0)_110%)] bg-clip-text text-transparent font-mona ">
          {" "}
          Fluxor — DevRel → Full Stack Developer
        </p>
        <p className="text-white text-sm w-full md:w-1/2 py-2">
          Started as a Developer Relations & Content Lead, later transitioned
          into a Full Stack Developer, contributing directly to Fluxor’s product
          and platform development.
        </p>
      </div>
      <ExpeCard/>

      {/* Leadership & Community */}
      <div className="max-w-7xl mx-4 sm:mx-auto px-4 relative my-12">
        <Heading className="text-left text-xl">Leadership & Community</Heading>
        <p className="text-white/70 text-sm md:text-base mt-2 mb-6 max-w-2xl">
          I actively contribute to building tech communities and organizing large-scale developer events.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 bg-[#1E1E1E] rounded-2xl shadow-lg border-l-4 border-purple-700">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
              <span className="text-purple-400 font-semibold text-sm sm:text-base">
                Core Team Member
              </span>
              <span className="hidden sm:block text-white/30">—</span>
              <span className="text-white font-bold text-lg sm:text-xl">
                AWS Cloud Club Poornima
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Led and managed a cloud-native community, organizing a flagship event with 900+ registrations and 400+ live attendees.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs sm:text-sm px-3 py-1 bg-purple-700/20 border border-purple-700/50 rounded-full text-purple-300 font-medium">
                900+ Registrations
              </span>
              <span className="text-xs sm:text-sm px-3 py-1 bg-purple-700/20 border border-purple-700/50 rounded-full text-purple-300 font-medium">
                400+ Attendees
              </span>
            </div>
          </div>

          <div className="p-5 sm:p-6 bg-[#1E1E1E] rounded-2xl shadow-lg border-l-4 border-purple-700">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-3">
              <span className="text-purple-400 font-semibold text-sm sm:text-base">
                Co-Organizer
              </span>
              <span className="hidden sm:block text-white/30">—</span>
              <span className="text-white font-bold text-lg sm:text-xl">
                Hack-It-Sapiens 2.0
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              One of Rajasthan&apos;s largest hackathons with 2500+ registrations and 140 teams.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs sm:text-sm px-3 py-1 bg-purple-700/20 border border-purple-700/50 rounded-full text-purple-300 font-medium">
                2500+ Registrations
              </span>
              <span className="text-xs sm:text-sm px-3 py-1 bg-purple-700/20 border border-purple-700/50 rounded-full text-purple-300 font-medium">
                140 Teams
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
