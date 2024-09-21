import React from "react";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaBootstrap,
  FaCode,
  FaEnvelope,
  FaSketch,
  FaDocker,
  FaNpm,
  FaVial,
  FaSlack,
  FaTrello,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      skillName: "JavaScript",
      color: "text-yellow-500",
      skillIcon: <FaJsSquare size={64} />,
    },
    {
      skillName: "React",
      color: "text-blue-500",
      skillIcon: <FaReact size={64} />,
    },
    {
      skillName: "Node.js",
      color: "text-green-500",
      skillIcon: <FaNodeJs size={64} />,
    },
    {
      skillName: "HTML",
      color: "text-orange-500",
      skillIcon: <FaHtml5 size={64} />,
    },
    {
      skillName: "CSS",
      color: "text-blue-600",
      skillIcon: <FaCss3Alt size={64} />,
    },
    {
      skillName: "MongoDB",
      color: "text-green-600",
      skillIcon: <FaDatabase size={64} />,
    },
    {
      skillName: "Git",
      color: "text-red-600",
      skillIcon: <FaGitAlt size={64} />,
    },
    {
      skillName: "Bootstrap",
      color: "text-purple-600",
      skillIcon: <FaBootstrap size={64} />,
    },
  ];

  const tools = [
    {
      toolName: "Visual Studio Code",
      toolIcon: <FaCode size={64} />,
      color: "text-blue-500",
    },
    {
      toolName: "Git",
      toolIcon: <FaGitAlt size={64} />,
      color: "text-red-600",
    },
    {
      toolName: "Postman",
      toolIcon: <FaEnvelope size={64} />,
      color: "text-orange-500",
    },
    {
      toolName: "Figma",
      toolIcon: <FaSketch size={64} />,
      color: "text-purple-500",
    },
    {
      toolName: "Docker",
      toolIcon: <FaDocker size={64} />,
      color: "text-blue-600",
    },
    { toolName: "npm", toolIcon: <FaNpm size={64} />, color: "text-red-400" },
    {
      toolName: "MongoDB Compass",
      toolIcon: <FaDatabase size={64} />,
      color: "text-green-600",
    },
    {
      toolName: "Jest",
      toolIcon: <FaVial size={64} />,
      color: "text-pink-500",
    },
    {
      toolName: "Slack",
      toolIcon: <FaSlack size={64} />,
      color: "text-purple-600",
    },
    {
      toolName: "Trello",
      toolIcon: <FaTrello size={64} />,
      color: "text-green-500",
    },
  ];

  return (
    <div>
      {/* Skills Section */}
      <div className="px-4 py-8">
        <h1 className="text-2xl lg:text-3xl text-center mb-10">
          Technical{" "}
          <span className="text-violet-400 font-semibold">Proficiencies</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className={`mb-2 ${skill.color}`}>{skill.skillIcon}</div>
              <h2
                className={`text-lg text-center font-semibold ${skill.color} ${
                  skill.skillName.length > 10 ? "text-sm" : ""
                } break-words`}
              >
                {skill.skillName}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="px-4 py-8">
        <h1 className="text-2xl lg:text-3xl text-center mb-10">
          <span className="text-violet-400 font-semibold">Software </span>I
          Utilize{" "}
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className={`mb-2 ${tool.color}`}>{tool.toolIcon}</div>
              <h2
                className={`text-lg text-center font-semibold ${tool.color} ${
                  tool.toolName.length > 10 ? "text-sm" : ""
                } break-words`}
              >
                {tool.toolName}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
