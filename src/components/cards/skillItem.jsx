import React from "react";

const SkillItem = ({ category, skills }) => {
  return (
    <div>
      <p className="font-medium mb-2">{category}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 dark:bg-[#233648] text-gray-700 dark:text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillItem;
