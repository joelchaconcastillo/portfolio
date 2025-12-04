import React from "react";
import Card from "../common/Card";

const SkillItem = ({ category, skills }) => {
  return (
    <Card className="p-4" data-aos="fade-up">
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
    </Card>
  );
};

export default SkillItem;
