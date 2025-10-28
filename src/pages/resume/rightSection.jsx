import React from "react";
import EducationItem from "../../components/cards/educationItem";
import SkillItem from "../../components/cards/skillItem";



const RightSection = (props) => {
  return (
    <div className="w-full lg:w-1/3">
      {/* Education Section */}
      <h2 className="text-[22px] font-bold px-4 pb-3 pt-5 dark:text-[#92adc9]">
        Education
      </h2>
      {props.educationData.map((edu, index) => (
        <EducationItem
          key={index}
          icon={edu.icon}
          title={edu.title}
          date={edu.date}
          description={edu.description}
        />
      ))}

      {/* Skills Section */}
      <h2 className="text-[22px] font-bold px-4 pb-3 pt-10 dark:text-[#92adc9]">
        Skills & Tools
      </h2>
      <div className="px-4 space-y-4">
        {props.skillsData.map((skill, index) => (
          <SkillItem key={index} category={skill.category} skills={skill.skills} />
        ))}
      </div>
    </div>
  );
};

export default RightSection;
