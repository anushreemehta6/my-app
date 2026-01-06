
import Heading from "../wrappers/heading";
import CoverflowCarousel from "./carousel";
import { bg } from "../assets";
import Image from "next/image";


export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto text-center mt-20  " >
        <Image
    src={bg}
    alt="Background"
    fill
    className="object-cover -z-10"
    priority
  />

      <div className="flex gap-3 flex-col">
        <Heading>
          Building modern web experiences, communities & ideas that scale.
        </Heading>
        <p>
          From content to community to code — building products with real-world
          impact.
        </p>
      </div>
      <div>
        <CoverflowCarousel/>
      </div>
      
    </div>
  );
}
