import React from "react";
import Timeline from "../component/Timeline";

const Experience = () => {
  const data = [
    {
      field: "Junior Software Developer",
      location: "Vellore, Tamil Nadu",
      title: "Quantum Sharq Innovative Solutions",
      type: "work",
      status: "present",
      year: "2024",
    },

    {
      title: "Bharath Niketan Engineering College",
      location: "Theni, Tamil Nadu",
      field: "Btech - Information Technology",
      type: "education",
      status: "completed",
      year: "2020 - 2024",
    },
  ];

  return (
    <div className="px-4 py-8">
      <h1 className="text-center text-xl mb-2 lg:text-2xl">
        Career
        <span className="text-violet-400 font-semibold"> Experience</span>
      </h1>

      {/* Timeline */}
      <div className="flex justify-center">
        <Timeline data={data} />
      </div>
    </div>
  );
};

export default Experience;
