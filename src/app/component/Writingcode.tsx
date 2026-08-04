import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface WritingCardProps {
  title: string;
  description: string;
  image: any;
  link: string;
  category?: string;
  featured?: boolean;
}

export default function Writingcode({
  title,
 description,
  image,
  link,
  category,
  featured,
}: WritingCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group rounded-3xl overflow-hidden border border-white/10 bg-[#18181B]
      hover:border-violet-500/40 transition-all duration-500
      hover:-translate-y-1
      ${
        featured
          ? "col-span-12 md:col-span-8"
          : "col-span-12 sm:col-span-6 md:col-span-4"
      }`}
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full aspect-video object-cover duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* CONTENT */}

      <div className="p-6 flex flex-col gap-4">

        {category && (
          <span className="text-xs text-violet-400 uppercase tracking-widest">
            {category}
          </span>
        )}

        <h3 className="text-2xl font-semibold text-white leading-tight">
          {title}
        </h3>

        <p className="text-white/60 leading-7">
          {description}
        </p>

        <div className="flex items-center gap-2 text-violet-400 mt-2 group-hover:gap-4 duration-300">
          Read Article
          <ArrowUpRight size={18} />
        </div>
      </div>
    </a>
  );
}