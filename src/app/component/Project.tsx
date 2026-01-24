import React from "react";
import ProjectFlipCard from "./projectFlipCard";
import { projects } from "../constants/projects";
import Heading from "../_wrappers/heading";

const Project = () => {
  return (
    <>
      <div className=" min-h-screen ">
        <div className="my-20 max-w-7xl mx-auto px-4 ">
          <Heading>
            A curated selection of things I’ve built and shipped.
          </Heading>
          <p className="text-center mt-4 text-sm md:text-lg">
            Real-world products built across Web2, Web3, and community-driven
            ecosystems.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 ">
          <div className="grid grid-col-1 mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6 w-max">
            {projects.map((project) => (
              <ProjectFlipCard
                key={project.id}
                image={project.image}
                title={project.title}
                subtitle={project.subtitle}
                links={project.links}
                description={project.description}
                techStack={project.techStack}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
