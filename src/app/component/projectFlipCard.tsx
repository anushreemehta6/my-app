import { Link } from "lucide-react";
import Image from "next/image";

type Props = {
  image: any;
  title: string;
  subtitle: string;
  description: string;
  techStack: { name: string }[];
  links: string;
};

const ProjectFlipCard = ({
  image,
  title,
  links,
  subtitle,
  description,
  techStack,
}: Props) => {
  return (
    <div className="flip-card w-[280px] h-[360px]">
      <div className="flip-inner relative w-full h-full rounded-2xl">
        {/* FRONT */}
        <div className="flip-face absolute inset-0 rounded-2xl overflow-hidden bg-[#1E1E1E] shadow-xl p-4">
          <Image
            src={image}
            alt={title}
            className="object-cover rounded-2xl  "
          />

          {/* overlay */}
          {/* <div className="absolute inset-0 bg-black/30" /> */}

          <div className="absolute bottom-4 left-4 right-4">
            <div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-white/70 text-sm ">{subtitle}</p>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-face flip-back absolute inset-0 rounded-2xl bg-[#1E1E1E] p-5 flex flex-col justify-between">
          <div>
            <p className="mt-3 text-lg text-white leading-relaxed">
              {description}
            </p>
          </div>

          {/* TECH STACK */}
          <div className="w-full overflow-auto">
            <div className="flex  scroll-auto flex-wrap gap-2 mt-4 w-[80%]">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70"
              >
                {tech.name}
              </span>
            ))}
          </div>
          <div className="absolute bottom-4  right-4 w-[20%]">
            <a
              href={links}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-purple-600 transition"
            >
              <Link className="w-5 h-5 text-white" />
            </a>
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectFlipCard;
