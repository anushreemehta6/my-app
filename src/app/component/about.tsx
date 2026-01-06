import Heading from "../wrappers/heading";
import Card from "./cards";
import TechCarousel from "./skiils";

export default function About(){
    return (
        <>
        <div className="m-10">
          <Heading>Anushree Mehta</Heading>
          <p className="text-center text-lg  font-bold bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0)_100%)] bg-clip-text text-transparent font-mona">Full Stack Developer Intern @Fluxor</p>
        </div>
        <div className="m-10">
            <Card/>
        </div>
        <div className="m-10">
            <Heading>Skills</Heading>
        </div>
        
            <div>
        <TechCarousel/>
      </div>
       
        </>
        
    )
}