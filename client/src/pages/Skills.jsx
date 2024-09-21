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
  FaAws,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import { SiExpress, SiJest, SiRedux, SiVitest } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { SiMui, SiAntdesign, SiCanva } from "react-icons/si";

import SkillToolCard from "../component/SkillToolCard";

const Skills = () => {
  const skills = [
    {
      skillName: "MongoDB",
      color: "text-green-500",
      skillIcon: <FaDatabase size={64} />,
    },
    {
      skillName: "Express JS",
      color: "text-gray-300",
      skillIcon: <SiExpress size={64} />,
    },

    {
      skillName: "React JS",
      color: "text-blue-500",
      skillIcon: <FaReact size={64} />,
    },
    {
      skillName: "Node JS",
      color: "text-green-500",
      skillIcon: <FaNodeJs size={64} />,
    },

    {
      skillName: "Redux",
      color: "text-violet-500",
      skillIcon: <SiRedux size={64} />,
    },
    {
      skillName: "JavaScript",
      color: "text-yellow-500",
      skillIcon: <FaJsSquare size={64} />,
    },
    {
      skillName: "TypeScript",
      color: "text-sky-500",
      skillIcon: <BiLogoTypescript size={64} />,
    },
    {
      skillName: "MUI",
      color: "text-sky-500",
      skillIcon: <SiMui size={64} />,
    },
    {
      skillName: "ANTD",
      color: "text-red-300",
      skillIcon: <SiAntdesign size={64} />,
    },

    {
      skillName: "React Native",
      color: "text-sky-500",
      skillIcon: <TbBrandReactNative size={64} />,
    },
    {
      skillName: "HTML",
      color: "text-orange-500",
      skillIcon: <FaHtml5 size={64} />,
    },
    {
      skillName: "CSS",
      color: "text-blue-500",
      skillIcon: <FaCss3Alt size={64} />,
    },

    {
      skillName: "Tailwind CSS",
      color: "text-cyan-500",
      skillIcon: <RiTailwindCssFill size={64} />,
    },
    {
      skillName: "Bootstrap",
      color: "text-purple-500",
      skillIcon: <FaBootstrap size={64} />,
    },
    {
      skillName: "AWS",
      color: "text-amber-400",
      skillIcon: <FaAws size={64} />,
    },
    {
      skillName: "Python",
      color: "text-slate-100",
      skillIcon: <FaPython size={64} />,
    },
  ];

  const tools = [
    {
      toolName: "VS Code",
      toolIcon: <VscVscode size={64} />,
      color: "text-blue-500",
    },
    {
      toolName: "Git",
      toolIcon: <FaGitAlt size={64} />,
      color: "text-red-500",
    },
    {
      toolName: "GitHub",
      toolIcon: <FaGithub size={64} />,
      color: "text-gray-300",
    },
    {
      toolName: "Postman",
      toolIcon: <SiPostman size={64} />,
      color: "text-orange-500",
    },
    {
      toolName: "Thunder Client",
      toolIcon: <AiFillThunderbolt size={64} />,
      color: "text-gray-200",
    },
    { toolName: "NPM", toolIcon: <FaNpm size={64} />, color: "text-rose-500" },
    {
      toolName: "MongoDB Compass",
      toolIcon: <FaDatabase size={64} />,
      color: "text-green-500",
    },
    {
      toolName: "Jest",
      toolIcon: <SiJest size={64} />,
      color: "text-pink-500",
    },
    {
      toolName: "Vitest",
      toolIcon: <SiVitest size={64} />,
      color: "text-amber-500",
    },
    {
      toolName: "Netlify",
      toolIcon: <BiLogoNetlify size={64} />,
      color: "text-cyan-500",
    },
    {
      toolName: "Vercel",
      toolIcon: <IoLogoVercel size={64} />,
      color: "text-gray-200",
    },
    {
      toolName: "PhotoShop",
      toolIcon: <SiAdobephotoshop size={64} />,
      color: "text-blue-500",
    },
    {
      toolName: "Canva",
      toolIcon: <SiCanva size={64} />,
      color: "text-sky-500",
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
