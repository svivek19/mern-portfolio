import React from "react";
import ProjectCard from "../component/ProjectCard";

const Project = () => {
  const projectList = [
    {
      title: "Project One",
      tags: ["JavaScript", "MongoDB"],
    },
    {
      title: "Project Two",

      tags: ["React", "Node.js"],
    },
    {
      title: "Blog Website",

      tags: ["Firebase", "React JS", "Tailwind CSS"],
    },
    {
      title: "Food delevery Website",

      tags: ["Express", "MySQL"],
    },
    {
      title: "Ecommerce Website",

      tags: ["TypeScript", "GraphQL"],
    },
  ];

  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-xl mb-2 lg:text-2xl">
        Recent Top <span className="text-violet-400 font-semibold">Works</span>
      </h1>
      <p className="text-center text-sm lg:text-lg text-violet-200">
        Here are a few projects I've worked on recently.
      </p>

      <div className="my-12">
        <ProjectCard projectList={projectList} />
      </div>
    </div>
  );
};

export default Project;
