import Image from "next/image";
import About from "./component/about";
import Hero from "./component/hero";
import GlimpseScatter from "./component/glimpse";
import Experience from "./component/experience";
import Project from "./component/Project";
import WhatIBring from "./component/WhatIBring";


export default function Home() {
  return (
    <>
      <div
        className="bg-linear-to-r from-[#1E1E1E_8%] to-[#1E1E1E_75%]
"
      >
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="why-me">
          <WhatIBring />
        </section>
        <section id="glimpse">
          <GlimpseScatter />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Project />
        </section>
      </div>
    </>
  );
}
