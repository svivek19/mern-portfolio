import React from "react";

const SkillToolCard = ({ title, items }) => {
  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl lg:text-3xl text-center mb-10">{title}</h1>

      <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4 mt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className={`mb-2 ${item.color}`}>
              {item.skillIcon || item.toolIcon}
            </div>
            <h2
              className={`text-lg text-center font-semibold ${item.color} ${
                item.skillName?.length > 10 || item.toolName?.length > 10
                  ? "text-sm"
                  : ""
              } break-words`}
            >
              {item.skillName || item.toolName}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillToolCard;
