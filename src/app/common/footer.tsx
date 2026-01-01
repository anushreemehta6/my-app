import { FooterFirst, footerImage, footerspotlight } from "../assets";
import Image from "next/image";
import Icon from "../wrappers/icon";
import { Link, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-linear-to-r from-#1E1E1E to-#171717">
      <div className="">
        <div className="flex justify-center bg-[radial-gradient(ellipse,rgba(255,255,255,0.12),transparent_60%)] px-4">
          <Image
            src={FooterFirst}
            alt="footer first"
            className="opacity-80 w-full max-w-[420px] md:max-w-[520px] lg:max-w-[640px] h-auto"
          />
        </div>

        <div className="">
          <h1 className="text-center text-xl md:text-6xl font-bold bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0)_100%)] bg-clip-text text-transparent font-mona ">
            Let’s Build Something Meaningful
          </h1>
          <p className="text-white text-sm md:text-lg text-center pt-2 font-mona font-normal">
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
          <div className="text-center flex justify-center gap-4 mt-2">
            <Icon url="https://x.com/anushree_0805">
              {" "}
              <Twitter />
            </Icon>
            <Icon url="https://linktr.ee/Anushree_mehta">
              {" "}
              <Link />
            </Icon>
            <Icon url="https://linktr.ee/Anushree_mehta">
              {" "}
              <Linkedin />
            </Icon>
          </div>
        </div>
      </div>

      <div className="absolute w-full overflow-hidden">
        <Image
          src={footerImage}
          alt="footerImage"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
