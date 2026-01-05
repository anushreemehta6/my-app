import Image from "next/image";
import About from "./component/about";
import Hero from "./component/hero";

export default function Home() {
  return (
    <>
      <div
        className="bg-linear-to-r from-[#1E1E1E_8%] to-[#1E1E1E_75%]
"
      >
        <Hero />
        <About />
      </div>
    </>
  );
}
