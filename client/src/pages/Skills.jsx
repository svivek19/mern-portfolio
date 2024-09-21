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
import SkillToolCard from "../component/SkillToolCard";

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
      <SkillToolCard title="Technical Proficiencies" items={skills} />

      {/* Tools Section */}
      <SkillToolCard title="Software I Utilize" items={tools} />
    </div>
  );
};

export default Skills;
