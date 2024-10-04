import React from "react";
import ProjectCard from "../component/ProjectCard";

const Project = () => {
  const projectList = [
    {
      title: "Food Delivery Website",
      tags: ["React JS", "Tailwind CSS", " Firebase"],
      link: "https://vbite.vercel.app/",
    },
    {
      title: "Blog Website",
      tags: ["Firebase", "React JS", "Tailwind CSS"],
      link: "https://react-blog-vivek.vercel.app/",
    },
    {
      title: "Ecommerce Website",
      tags: ["Firebase", "React JS", "Tailwind CSS"],
      link: "https://react-dress-shop-ecommerce-vvk.netlify.app/",
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
