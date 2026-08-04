import { agentic, analysis, cc, fluxor, kerala, web3 } from "../assets";

export interface Writing {
    id:number;
  name: string;
  image: any;
  description: string;
  link: string;
}

export const writings: Writing[] = [
  { id:1,
    name: "Fluxor Whitepaper",
    image: fluxor,
    description:
      "A comprehensive whitepaper introducing Fluxor's vision, architecture, ecosystem, and how it empowers developers and communities through decentralized technology.",
    link: "https://fluxor.gitbook.io/fluxor",
  },
  { id:2,
    name: "ConsciousClub Whitepaper",
    image: cc,
    description:
      "A technical and strategic whitepaper outlining ConsciousClub's mission, decentralized ecosystem, and community-first approach to building meaningful Web3 experiences.",
    link: "https://consciousclub.gitbook.io/consciousclub",
  },
  { id:3,
    name: "The Next Generation of Internet — Web3.0",
    image: web3,
    description:
      "An introduction to Web3, exploring how blockchain technology is reshaping ownership, identity, and the future of the internet.",
    link: "https://blog.fluxor.io/",
  },
  { id:4,
    name: "Web3 Domain Analysis",
    image: analysis,
    description:
      "An in-depth look at blockchain-based domain systems, decentralized identity, and how Web3 domains are transforming digital ownership.",
    link: "https://blog.fluxor.io/",
  },
  {
    id:5,
    name: "All About BNB Hack Kerala 2025",
    image:kerala,
    description:
      "A complete overview of BNB Hack Kerala 2025, covering the hackathon experience, ecosystem opportunities, and key highlights for builders.",
    link: "https://blog.fluxor.io/bnb-hack-kerala-2025",
  },
  { id:6,
    name: "Agentic AI Explained by Mr. Flinch",
    image: agentic ,
    description:
      "A deep dive into Agentic AI, explaining autonomous AI agents, their capabilities, practical applications, and the future of intelligent systems.",
    link: "https://blog.fluxor.io/agentic-ai-unlocked-with-mr-flinch",
  },
];