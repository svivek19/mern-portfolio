import React from "react";
import { IoExitOutline } from "react-icons/io5";

const ProjectCard = ({ projectList }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {projectList.map((project, index) => (
        <div key={index} className="border-2 border-violet-400 p-4 rounded-md">
          <h1
            className={`${
              project.title.length > 20 ? "text-lg" : "text-xl"
            } font-bold`}
          >
            {project.title}
          </h1>

          <div className="flex gap-2 flex-wrap my-2">
            {project.tags.map((tech, index) => (
              <kbd
                key={index}
                className="px-2 py-1 text-xs font-bold text-violet-950 bg-violet-100 border border-violet-500 rounded-full"
              >
                {tech}
              </kbd>
            ))}
          </div>

          <div className="flex justify-end">
            <button className="bg-violet-500 rounded-lg px-2 py-1 text-sm flex items-center gap-1">
              <a href="#" target="_blank">
                View
              </a>

              <IoExitOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
