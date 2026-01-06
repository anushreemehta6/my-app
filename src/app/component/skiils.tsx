"use client";

const items = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node",
  "MongoDB",
  "Express",
  "ReactJs",
  "NextJs",
  "NeonDB",
];

function Row({
  reverse = false,
}: {
  reverse?: boolean;
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`
          flex w-max gap-4
          ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
        `}
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="
              min-w-[240px] 
              h-15
              px-6 py-3
              rounded-xl
              bg-gradient-to-r from-[#343335] to-[#1C1C1C]
              text-white
              text-center
              shadow-md
              hover:from-[#6d4aff] hover:to-[#6d4aff]
              transition
              text-xl
            "
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechCarousel() {
  return (
    <div className="relative w-full py-10 space-y-6">
      {/* Edge fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

      <Row />
      <Row reverse />
    </div>
  );
}
