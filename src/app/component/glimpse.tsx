"use client";

import {
  collectionImage1,
  collectionImage2,
  collectionImage3,
  collectionImage4,
  collectionImage5,
  collectionImage6,
  collectionImage7,
  collectionImage8,
  collectionImage9,
  collectionImage10,
} from "@/app/assets";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import Heading from "../wrappers/heading";

/* ============================================
   NEW DESIGN - Bento Grid Layout
   ============================================ */

const glimpseImages: { src: StaticImageData; span?: string }[] = [
  { src: collectionImage1, span: "md:col-span-2 md:row-span-2" },
  { src: collectionImage2, span: "md:col-span-1 md:row-span-1" },
  { src: collectionImage3, span: "md:col-span-1 md:row-span-1" },
  { src: collectionImage4, span: "md:col-span-1 md:row-span-2" },
  { src: collectionImage5, span: "md:col-span-1 md:row-span-1" },
  // { src: collectionImage6, span: "md:col-span-1 md:row-span-1" },
  // { src: collectionImage7, span: "md:col-span-2 md:row-span-1" },
  { src: collectionImage8, span: "md:col-span-1 md:row-span-1" },
  { src: collectionImage9, span: "md:col-span-1 md:row-span-1" },
  { src: collectionImage10, span: "md:col-span-1 md:row-span-1" },
];

const GlimpseScatter = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2
                   w-[700px] h-[320px]
                   bg-[radial-gradient(ellipse_at_center,rgba(138,102,252,0.15),rgba(138,102,252,0)_70%)]
                   blur-3xl opacity-70 pointer-events-none"
      />

      <Heading className="text-center mb-10">Life, Work & Everything Between</Heading>

      {/* Bento Grid - Desktop */}
      <div className="hidden md:grid grid-cols-4 auto-rows-[180px] gap-4">
        {glimpseImages.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`relative rounded-2xl overflow-hidden group ${img.span || ""}`}
          >
            <Image
              src={img.src}
              alt={`Glimpse ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/50
                            rounded-2xl transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      {/* Mobile - Scrolling Rows */}
      <div className="md:hidden w-full overflow-hidden space-y-4">
        {/* ROW 1 — RIGHT → LEFT */}
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 18,
          }}
        >
          {[collectionImage1, collectionImage2, collectionImage3, collectionImage4, collectionImage5, collectionImage6].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="scroll image"
              className="w-40 h-28 rounded-xl object-cover flex-shrink-0 border-2 border-purple-700/30 shadow-lg"
            />
          ))}
          {[collectionImage1, collectionImage2, collectionImage3, collectionImage4, collectionImage5, collectionImage6].map((img, i) => (
            <Image
              key={`dup-${i}`}
              src={img}
              alt="scroll image"
              className="w-40 h-28 rounded-xl object-cover flex-shrink-0 border-2 border-purple-700/30 shadow-lg"
            />
          ))}
        </motion.div>

        {/* ROW 2 — LEFT → RIGHT */}
        <motion.div
          className="flex gap-4"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 22,
          }}
        >
          {[ collectionImage8, collectionImage9, collectionImage10, collectionImage2, collectionImage5].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="scroll image"
              className="w-40 h-28 rounded-xl object-cover flex-shrink-0 border-2 border-purple-700/30 shadow-lg"
            />
          ))}
          {[ collectionImage8, collectionImage9, collectionImage10, collectionImage2, collectionImage5].map((img, i) => (
            <Image
              key={`dup2-${i}`}
              src={img}
              alt="scroll image"
              className="w-40 h-28 rounded-xl object-cover flex-shrink-0 border-2 border-purple-700/30 shadow-lg"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlimpseScatter;

/* ============================================
   OLD DESIGN - Absolute Position Collage (COMMENTED)
   ============================================ */

// const OurCuratedCollectionOLD = () => {
//   return (
//     <section className="relative flex flex-col items-center justify-center overflow-hidden container max-w-7xl px-4 mx-auto">
//       <div className="p-8 pb-8">
//          <Heading >Life, Work & Everything Between</Heading>
//       </div>

//       {/* Collage Container */}
//       <div className="relative w-full max-w-7xl md:h-[500px] lg:h-[700px] hidden md:flex justify-center items-center px-4 mx-auto">
//         {/* Center Mascot */}
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="relative z-10 md:mt-36 lg:mt-48 p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)]"
//         >
//           <Image
//             src={collectionImage9}
//             alt="Flinch mascot holding camera"
//             width={340}
//             height={340}
//             className="drop-shadow-2xl w-28 md:w-[250px] lg:w-[340px] "
//             priority
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -50, y: 50 }}
//           whileInView={{ opacity: 1, x: 0, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.1 }}
//           className="absolute top-0 left-0 w-16 md:w-[130px] lg:w-[180px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
//         >
//           <Image
//             src={collectionImage2}
//             alt="Event 1"
//             className="w-full h-auto rounded-[8px]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//           className="absolute top-[75px] lg:top-[66px] left-16 md:left-[140px] lg:left-[200px] w-24 md:w-[180px] lg:w-[300px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
//         >
//           <Image
//             src={collectionImage3}
//             alt="Event 2"
//             className="w-full h-auto rounded-[5px]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//           className="absolute top-0 md:right-[258px] lg:right-[430px] w-20 md:w-[200px] lg:w-[310px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
//         >
//           <Image
//             src={collectionImage4}
//             alt="Event 3"
//             className="w-full h-auto rounded-[5px]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: -60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//           className="absolute top-[76px] md:right-[80px] lg:right-[175px] md:w-[170px] lg:w-[240px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
//         >
//           <Image
//             src={collectionImage5}
//             alt="Event 4"
//             className="w-full h-auto rounded-[5px]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.5 }}
//           className="absolute top-[135px] -right-[25px] md:w-[130px] lg:w-[190px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
//         >
//           <Image
//             src={collectionImage6}
//             alt="Event 5"
//             className="w-full h-auto rounded-[5px]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6 }}
//           className="absolute md:-left-5 lg:left-[10px] top-[190px] lg:top-[260px] md:w-[120px] lg:w-[175px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
//         >
//           <Image
//             src={collectionImage7}
//             alt="Event 6"
//             className="w-full h-auto rounded-[5px]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.6 }}
//           className="absolute
//             lg:-right-[0px]
//             md:top-[230px]
//             lg:top-[400px]
//             md:w-[150px]
//             lg:w-[243px]
//             rounded-[8px]
//             p-[3.4px]
//             [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)]
//             overflow-hidden"
//         >
//           <Image
//             src={collectionImage8}
//             alt="Event 6"
//             className="w-full h-auto rounded-[5px]"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 60 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8 }}
//           className="absolute md:right-[112px] lg:right-[190px] md:top-[200px] lg:top-[240px] md:w-[140px] lg:w-[200px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
//         >
//           <Image
//             src={collectionImage10}
//             alt="Event 8"
//             className="w-full h-auto rounded-[5px]"
//           />
//         </motion.div>
//       </div>

//       {/* MOBILE INFINITE SCROLLER (< md) */}
//       <div className="md:hidden w-full overflow-hidden mt-6 space-y-4">
//         {/* ROW 1 — RIGHT → LEFT */}
//         <motion.div
//           className="flex gap-4"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 18,
//           }}
//         >
//           {[
//             collectionImage1,
//             collectionImage2,
//             collectionImage3,
//             collectionImage4,
//             collectionImage5,
//             collectionImage6,
//           ].map((img, i) => (
//             <Image
//               key={i}
//               src={img}
//               alt="scroll image"
//               className="w-40 h-28 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-md"
//             />
//           ))}
//           {[
//             collectionImage1,
//             collectionImage2,
//             collectionImage3,
//             collectionImage4,
//             collectionImage5,
//             collectionImage6,
//           ].map((img, i) => (
//             <Image
//               key={`dup-${i}`}
//               src={img}
//               alt="scroll image"
//               className="w-40 h-28 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-md"
//             />
//           ))}
//         </motion.div>

//         {/* ROW 2 — LEFT → RIGHT */}
//         <motion.div
//           className="flex gap-4"
//           animate={{ x: ["-100%", "0%"] }}
//           transition={{
//             repeat: Infinity,
//             ease: "linear",
//             duration: 22,
//           }}
//         >
//           {[
//             collectionImage7,
//             collectionImage8,
//             collectionImage9,
//             collectionImage10,
//             collectionImage2,
//             collectionImage5,
//           ].map((img, i) => (
//             <Image
//               key={i}
//               src={img}
//               alt="scroll image"
//               className="w-40 h-28 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-md"
//             />
//           ))}
//           {[
//             collectionImage7,
//             collectionImage8,
//             collectionImage9,
//             collectionImage10,
//             collectionImage2,
//             collectionImage5,
//           ].map((img, i) => (
//             <Image
//               key={`dup2-${i}`}
//               src={img}
//               alt="scroll image"
//               className="w-40 h-28 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-md"
//             />
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };
