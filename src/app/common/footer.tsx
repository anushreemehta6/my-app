import { FooterFirst, footerImage, footerspotlight } from "../assets";
import Image from "next/image";
import Icon from "../wrappers/icon";
import { Link, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-linear-to-r from-#1E1E1E to-#171717">
      <div className="">
        <div className="flex justify-center bg-[radial-gradient(ellipse,rgba(255,255,255,0.12),transparent_60%)]">
          <Image src={FooterFirst} alt="footer first" className="opacity-80" />
        </div>
        <div className="">
          <h1 className="text-center text-6xl font-bold bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0)_100%)] bg-clip-text text-transparent font-mona ">
            Let’s Build Something Meaningful
          </h1>
          <p className="text-white text-lg text-center pt-2 font-mona font-normal">
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
          <div className="text-center flex justify-center gap-4 mt-2">
            <Icon url="https://x.com/anushree_0805" > <Twitter />"</Icon>
            <Icon url="https://linktr.ee/Anushree_mehta" > <Link />"</Icon>

          </div>
        </div>
      </div>

      <div className="overflow-hidden">
        <Image src={footerImage} alt="footerImage" className="object-cover" />
      </div>
    </div>
  );
}
