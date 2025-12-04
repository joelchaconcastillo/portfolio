import React, { useState } from "react";
import Card from "../common/Card";

const EducationItem = ({ icon, title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="px-4 mt-2">
      <Card className="p-4" data-aos="fade-up">
        {/* Header: icon and title aligned */}
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-2xl">{icon}</span>
          <p className="font-medium">{title}</p>
        </div>

        {/* Date */}
        {date && (
          <p className="text-gray-600 dark:text-[#92adc9] text-sm mt-1">{date}</p>
        )}

        {/* Description + Expand/Collapse */}
        {description && (
          <div className="mt-3 text-gray-700 dark:text-[#c0d0e0] text-sm">
            {!isExpanded ? (
              <button onClick={toggleExpand} className="text-blue-500 underline text-sm">
                More info
              </button>
            ) : (
              <>
                <div>{description}</div>
                <button onClick={toggleExpand} className="mt-2 text-blue-500 underline text-sm">
                  Show less
                </button>
              </>
            )}
          </div>
        )}
      </Card>
    </div>
  );
};

export default EducationItem;
