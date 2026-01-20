import React from "react";
import Image from "next/image"; // remove if not using Next.js
import { expirence } from "../constants/expirence";
import { checkbox } from "../assets";

const ExpeCard = () => {
  return (
    <div>
      {expirence.map((phase, index) => (
        <div
          key={phase.phase}
          className="relative mb-16 p-4 bg-[#1E1E1E] rounded-2xl shadow-lg border-b-8 border-white max-w-7xl mx-4 sm:mx-auto px-4 mt-10"
        >
          {/* PHASE HEADER */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
            <h1 className="text-lg sm:text-xl font-normal text-white">{phase.phase}</h1>
            <h3 className="text-lg sm:text-xl font-normal text-white">{phase.name}</h3>
          </div>

          {/* DATE */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center">
            <p className="text-xl sm:text-3xl font-bold bg-[linear-gradient(20deg,#ffffff_0%,rgba(255,255,255,0)_110%)] bg-clip-text text-transparent font-mona mt-1">
              {phase.startDate} — {phase.endDate}
            </p>

            {phase.duration && (
              <p className="text-xs sm:text-sm text-white/60">{phase.duration}</p>
            )}
          </div>

          {/* CONTENT LIST */}
          <div className="mt-4 space-y-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 sm:p-4 gap-3 sm:gap-4">
            {phase.content.map((item, idx) => (
              <div
                key={idx}
                className="flex gap-3 items-start text-white/70 text-sm"
              >
                <Image src={checkbox} alt="" width={16} height={16} />
                <p>{item.details}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 mt-4">
            {phase.footer.map((tag, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg lg:text-2xl font-semibold text-[#6F6F6F]"
              >
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#6F6F6F]" />
                {tag.name}
              </span>
            ))}
          </div>

          {/* CONTINUE TEXT */}
          {phase.continue && (
            <p className="mt-4 text-purple-500 text-2xl italic text-center">
              {phase.continue}
            </p>
          )}
          {index !== expirence.length - 1 && (
            <div
              className="absolute left-4 sm:left-10 h-16 -bottom-19 w-1.5 sm:w-2 bg-purple-700"
            />
          )}
          {index !== expirence.length - 1 && (
            <div
              className="absolute right-4 sm:right-10 h-16 -bottom-19 w-1.5 sm:w-2 bg-purple-700"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpeCard;
