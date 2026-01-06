"use client";

import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import image from "@/app/assets/image.png";
import Heading from "../wrappers/heading";
import CButton from "../wrappers/button";
import { trustdose } from "../assets";

/* ---------- CONFIG ---------- */
const images: StaticImageData[] = [image, trustdose, image, image, image];
const CARD_WIDTH = 300;
const CARD_HEIGHT = 380;
const VISIBLE_RANGE = 2;
const STAGE_WIDTH = 1100; // controls arrow + fade alignment

/* ---------- HELPERS ---------- */
const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function CoverflowCarousel() {
  const [index, setIndex] = useState(0);
  const total = images.length;

  return (
    <div className="w-full flex justify-center">
      {/* STAGE */}
      <div
        className="relative h-[620px] overflow-hidden"
        style={{ width: STAGE_WIDTH }}
      >
        {/* CAROUSEL */}
        <div className="absolute inset-0 flex items-center justify-center perspective-[1200px]">
          {images.map((_, i) => {
            const offset = mod(i - index, total);
            const position = offset > total / 2 ? offset - total : offset;

            if (Math.abs(position) > VISIBLE_RANGE) return null;

            return (
              <motion.div
                key={i}
                className="absolute cursor-pointer rounded-2xl gap-2"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) setIndex(mod(index + 1, total));
                  if (info.offset.x > 80) setIndex(mod(index - 1, total));
                }}
                onClick={() => setIndex(i)}
                animate={{
                  x: position * 220,
                  scale: position === 0 ? 1 : 0.85,
                  rotateY: position === 0 ? 0 : position * -35,
                  opacity: Math.abs(position) > 2 ? 0 : 1,
                  zIndex: 10 - Math.abs(position),
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT + 60, // extra space for button
                }}
              >
                <div
                  className="rounded-2xl overflow-hidden bg-[#1E1E1E] flex flex-col items-center gap-4 p-4 transition-all"
                  style={{
                    boxShadow:
                      position === 0
                        ? "0 25px 80px rgba(255,255,255,0.35)"
                        : "0 10px 30px rgba(0,0,0,0.45)",
                    opacity: position === 0 ? 1 : 0.85,
                  }}
                >
                  <Image
                    src={images[i]}
                    alt="carousel image"
                    width={CARD_WIDTH - 32} // adjusted for padding
                    height={CARD_HEIGHT - 32}
                    className="object-cover rounded-xl"
                    priority={position === 0}
                  />

                  <CButton className="mt-2 w-full text-center">
                    View on GitHub
                  </CButton>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LEFT ARROW */}
        <button
          onClick={() => setIndex(mod(index - 1, total))}
          className="
            absolute left-4 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 rounded-full
            flex items-center justify-center
            bg-white/10 backdrop-blur-md
            text-white hover:bg-white/20
            transition
          "
        >
          ←
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => setIndex(mod(index + 1, total))}
          className="
            absolute right-4 top-1/2 -translate-y-1/2 z-20
            w-12 h-12 rounded-full
            flex items-center justify-center
            bg-white/10 backdrop-blur-md
            text-white hover:bg-white/20
            transition
          "
        >
          →
        </button>
      </div>
    </div>
  );
}
