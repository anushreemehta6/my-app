import React from "react";
import Heading from "../wrappers/heading";
import ExpeCard from "./ExpeCard";

const Experience = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 relative ">
       <div
  aria-hidden
  className="absolute -top-32 left-0 -translate-x-1/2 
             w-[700px] h-[320px]
             bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),rgba(255,255,255,0)_70%)]
             blur-3xl opacity-70 pointer-events-none"
/>

        <Heading  className="text-left">Experience — Fluxor</Heading>
        <p className="text-left text-xl  font-bold bg-[linear-gradient(20deg,#ffffff_0%,rgba(255,255,255,0)_110%)] bg-clip-text text-transparent font-mona ">
          {" "}
          Fluxor — DevRel → Full Stack Developer
        </p>
        <p className="text-white text-sm  w-1/2 py-2">
          Started as a Developer Relations & Content Lead, later transitioned
          into a Full Stack Developer, contributing directly to Fluxor’s product
          and platform development.
        </p>
      </div>
      <ExpeCard/>
    </>
  );
};

export default Experience;
