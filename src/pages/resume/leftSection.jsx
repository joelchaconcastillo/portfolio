import React from "react";
import TimelineItem from "../../components/cards/timelineItem"


const LeftSection = (props) => {


  return (
    <div className="w-full lg:w-2/3">
      <h2 className="text-[22px] dark:text-[#92adc9] font-bold px-4 pb-3 pt-5">Experience & Research</h2>
      <div className="grid grid-cols-[40px_1fr] gap-x-2 gap-y-6 px-4">
        {props.experiencesData.map((exp, index) => (
          <TimelineItem
            key={index}
            icon={exp.icon}
            title={exp.title}
            organization={exp.organization}
            date={exp.date}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LeftSection;
