"use client";

import Image, { StaticImageData } from "next/image";
import { about1 } from "../assets";
import { motion } from "motion/react";

interface CardData {
  id: string;
  icon: StaticImageData;
  para: string;
}

const data: CardData[] = [
  {
    id: "1",
    icon: about1,
    para: "Tech enthusiast passionate about building modern web applications, Web3 ecosystems, and developer communities.",
  },
  {
    id: "2",
    icon: about1,
    para: "B.Tech CSE (2023–2027)\nFull Stack Developer\nWeb3 Enthusiast\nCommunity & Event Organizer",
  },
  {
    id: "3",
    icon: about1,
    para: "Having worked across content, community, and code, I bridge the gap between technology and people.",
  },
];

export default function Card() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center max-w-7xl mx-auto px-4 w-full gap-8">
      {data.map((item, index) => (
        <motion.button
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
            ease: "easeOut",
          }}
          whileHover={{
            y: -8,
            scale: 1.03,
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.25), 0 10px 30px rgba(255,255,255,0.15)",
            backgroundColor: "#2f2f2f",
          }}
          whileTap={{ scale: 0.98 }}
          className="
            relative
            bg-[#282828]
            flex flex-col
            rounded-2xl
            p-6
            w-full
            gap-4
            justify-between
            text-left
            border border-white/10
            transition-colors
          "
        >
          <Image src={item.icon} alt="icon" width={40} height={40} />
          <p className="whitespace-pre-line text-sm leading-relaxed text-gray-200">
            {item.para}
          </p>
        </motion.button>
      ))}
    </div>
  );
}
