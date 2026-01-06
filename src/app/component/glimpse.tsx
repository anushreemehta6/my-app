// "use client";

// import { motion } from "motion/react";
// import Image, { StaticImageData } from "next/image";

// import {
//   collectionImage1,
//   collectionImage2,
//   collectionImage3,
//   collectionImage4,
//   collectionImage5,
//   collectionImage6,
// } from "@/app/assets";

// const images: {
//   src: StaticImageData;
//   x: number;
//   y: number;
//   rotate: number;
//   scale?: number;
// }[] = [
//   { src: collectionImage1, x: -260, y: -140, rotate: -12 },
//   { src: collectionImage2, x: -80, y: -220, rotate: 6 },
//   { src: collectionImage3, x: 200, y: -160, rotate: 10 },
//   { src: collectionImage4, x: -220, y: 120, rotate: 8 },
//   { src: collectionImage5, x: 60, y: 200, rotate: -6 },
//   { src: collectionImage6, x: 240, y: 140, rotate: 12 },
// ];

// export default function GlimpseScatter() {
//   return (
//     <section className="relative max-w-7xl mx-auto px-4 py-32 overflow-hidden">
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-4xl font-semibold text-center mb-24"
//       >
//         A glimpse about me
//       </motion.h2>

//       {/* Scatter Area */}
//       <div className="relative h-[520px] flex items-center justify-center pt-48">
//         {images.map((img, i) => (
//           <motion.div
//             key={i}
//             initial={{
//               x: 0,
//               y: 0,
//               rotate: 0,
//               scale: 0.9,
//               opacity: 0,
//             }}
//             whileInView={{
//               x: img.x,
//               y: img.y,
//               rotate: img.rotate,
//               scale: 1,
//               opacity: 1,
//             }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{
//               duration: 0.9,
//               delay: i * 0.08,
//               ease: "easeOut",
//             }}
//             className="absolute"

//           >
//             <div className="
//               rounded-xl overflow-hidden
//               shadow-[0_20px_60px_rgba(0,0,0,0.25)]
//               border border-white/10
//               bg-[#111]
//             ">
//               <Image
//                 src={img.src}
//                 alt="project glimpse"
//                 className="w-48 md:w-64 h-auto object-cover"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

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
import Image from "next/image";
import Heading from "../wrappers/heading";

const OurCuratedCollection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden container max-w-7xl px-4 mx-auto">
      <div className="p-8 pb-8">
         <Heading >Life, Work & Everything Between</Heading>

      </div>
     

      {/* Collage Container */}
      <div className="relative w-full max-w-7xl md:h-[500px] lg:h-[700px] hidden md:flex justify-center items-center px-4 mx-auto">
        {/* Center Mascot */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative z-10 md:mt-36 lg:mt-48 p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)]"
        >
          <Image
            src={collectionImage9}
            alt="Flinch mascot holding camera"
            width={340}
            height={340}
            className="drop-shadow-2xl w-28 md:w-[250px] lg:w-[340px] "
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50, y: 50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="absolute top-0 left-0 w-16 md:w-[130px] lg:w-[180px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage2}
            alt="Event 1"
            className="w-full h-auto rounded-[8px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute top-[75px] lg:top-[66px] left-16 md:left-[140px] lg:left-[200px] w-24 md:w-[180px] lg:w-[300px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage3}
            alt="Event 2"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute top-0 md:right-[258px] lg:right-[430px] w-20 md:w-[200px] lg:w-[310px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage4}
            alt="Event 3"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute top-[76px] md:right-[80px] lg:right-[175px] md:w-[170px] lg:w-[240px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage5}
            alt="Event 4"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="absolute top-[135px] -right-[25px] md:w-[130px] lg:w-[190px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage6}
            alt="Event 5"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="absolute md:-left-5 lg:left-[10px] top-[190px] lg:top-[260px] md:w-[120px] lg:w-[175px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage7}
            alt="Event 6"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="absolute 
  lg:-right-[0px] 
  md:top-[230px] 
  lg:top-[400px] 
  md:w-[150px] 
  lg:w-[243px] 
  rounded-[8px] 
  p-[3.4px] 
  [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)]
  overflow-hidden"
        >
          <Image
            src={collectionImage8}
            alt="Event 6"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="absolute left-28 lg:left-[195px] top-[200px] lg:top-[270px] md:w-[130px] lg:w-[215px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#CBFA08_0%,#434343_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage9}
            alt="Event 7"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="absolute md:right-[112px] lg:right-[190px] md:top-[200px] lg:top-[240px] md:w-[140px] lg:w-[200px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#8A66FC_0%,#5A34DF_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage10}
            alt="Event 8"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="absolute md:top-[245px] lg:top-[286px] -right-[50px] md:w-[150px] lg:w-[230px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#CBFA08_0%,#434343_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={CollectionImage10}
            alt="Event 9"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="absolute md:bottom-[0px] lg:bottom-[10px] md:left-[40px] lg:left-[110px] md:w-[200px] lg:w-[240px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#CBFA08_0%,#434343_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage2}
            alt="Event 10"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
          className="absolute md:bottom-[15px] lg:bottom-12 md:right-[0px] lg:right-[75px] md:w-[250px] lg:w-[370px] rounded-[8px] p-[3.4px] [background:linear-gradient(180deg,#CBFA08_0%,#434343_100%)] shadow-[0px_0px_60px_rgba(197,252,78,0.1)] overflow-hidden"
        >
          <Image
            src={collectionImage6}
            alt="Event 11"
            className="w-full h-auto rounded-[5px]"
          />
        </motion.div> */}
      </div>

      {/* MOBILE INFINITE SCROLLER (< md) */}
      <div className="md:hidden w-full overflow-hidden mt-6 space-y-4">
        {/* ROW 1 — RIGHT → LEFT */}
        <motion.div
          className="flex gap-4"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 18, // 👈 speed (increase number = slower)
          }}
        >
          {[
            collectionImage1,
            collectionImage2,
            collectionImage3,
            collectionImage4,
            collectionImage5,
            collectionImage6,
          ].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="scroll image"
              className="w-40 h-28 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-md"
            />
          ))}
          {/* duplicate for seamless loop */}
          {[
            collectionImage1,
            collectionImage2,
            collectionImage3,
            collectionImage4,
            collectionImage5,
            collectionImage6,
          ].map((img, i) => (
            <Image
              key={`dup-${i}`}
              src={img}
              alt="scroll image"
              className="w-40 h-28 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-md"
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
            duration: 22, // 👈 speed (change if needed)
          }}
        >
          {[
            collectionImage7,
            collectionImage8,
            collectionImage9,
            collectionImage10,
            collectionImage2,
            collectionImage5,
          ].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="scroll image"
              className="w-40 h-28 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-md"
            />
          ))}
          {/* duplicate */}
          {[
            collectionImage7,
            collectionImage8,
            collectionImage9,
            collectionImage10,
            collectionImage2,
            collectionImage5,
          ].map((img, i) => (
            <Image
              key={`dup2-${i}`}
              src={img}
              alt="scroll image"
              className="w-40 h-28 rounded-lg object-cover flex-shrink-0 border border-white/20 shadow-md"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurCuratedCollection;
