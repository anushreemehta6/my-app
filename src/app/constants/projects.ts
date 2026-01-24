import { StaticImageData } from "next/image";
import { bookstore, clone, image, insideOut, mitra, trustDose, trustdose, upStack } from "../assets";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
  description: string;
  features?: string[];
  includes?: string[];
  highlights?: string[];
  techStack: { name: string }[];
  links: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Upstack",
    subtitle: "Course Selling Platform",
    image: upStack,
    description:
      "A scalable full-stack platform enabling instructors to create and sell courses with dashboards, authentication, and payments.",
    features: [
      "Instructor dashboards",
      "Secure authentication",
      "Course management",
    ],
    techStack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "MongoDB" },
    ],
    links: "https://github.com/anushreemehta6/upStack---app",
  },

  {
    id: "2",
    title: "BookStore",
    subtitle: "Online Book Platform",
    image: bookstore,
    description:
      "A responsive web app for discovering, purchasing, and reading books online with a clean UI.",
    techStack: [{ name: "React" }, { name: "MongoDB" }, { name: "Node.js" }],
    links: "https://github.com/anushreemehta6/bookstore",
  },

  {
    id: "3",
    title: "Frontend UI Clones",
    subtitle: "UI/UX Practice Projects",
    image: clone,
    description:
      "Recreated frontend clones of popular platforms to strengthen UI/UX and frontend fundamentals.",
    includes: ["Netflix", "Amazon", "Flipkart", "Zomato"],
    techStack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    links: "https://github.com/anushreemehta6/zomato-clone-2",
  },

  {
    id: "4",
    title: "TrustDose",
    subtitle: "Decentralized Clinical Trial Registry",
    image: trustDose,
    description:
      "A decentralized and immutable clinical trial registry built on the Flow blockchain, ensuring transparency, auditability, and public access for regulators and stakeholders.",
    techStack: [
      { name: "Flow Blockchain" },
      { name: "Cadence" },
      { name: "React" },
      { name: "Vite" },
      { name: "FCL" },
      { name: "IPFS" },
    ],
    links: "",
  },

  {
    id: "5",
    title: "Readora",
    subtitle: "Web3 Book Community Platform",
    image: image,
    description:
      "A Web3-powered social platform for readers where engagement, reading streaks, and community participation are rewarded with NFTs and blockchain-based incentives.",
    highlights: [
      "Reading streaks & engagement tracking",
      "NFT rewards & on-chain achievements",
      "Brand-led NFT & phygital campaigns",
      "Multi-role dashboards (User, Brand, Admin)",
    ],
    techStack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Solidity" },
      

    ],
    links: "",
  },
  {
    id: "6",
    title: "Inside-Out",
    subtitle: "AI-Powered Anonymous Chat App",
    image: insideOut,
    description:
      "A full-stack anonymous chat platform designed for Gen Z users to connect safely with AI or randomly matched peers. Focuses on privacy, emotional intelligence, and judgment-free conversations.",
    highlights: [
      "Anonymous and privacy-first conversations",
      "AI-powered emotional intelligence",
      "Random peer matching",
      "Safe, judgment-free chat experience",
    ],
    techStack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "OpenAI API" },
    ],
    links: "https://github.com/anushreemehta6/InsideOut-main",
  },
  {
    id: "7",
    title: "MausamMitra",
    subtitle: "React Weather App",
    image: mitra,
    description: "A react based app that uses Open weather API to display data",
    techStack: [
      { name: "React" },
      { name: "Tailwind" },
      { name: "Open weather API" },
    ],
    links: "https://github.com/anushreemehta6/Mausam-Mitra",
  },
];
