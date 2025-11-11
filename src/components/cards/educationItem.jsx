import React, { useState } from "react";

const EducationItem = ({ icon, title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="px-4 mt-2">
      {/* Header: icon and title aligned */}
      <div className="flex items-center gap-2">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
        <p className="font-medium">{title}</p>
      </div>

      {/* Date */}
      {date && (
        <p className="text-gray-600 dark:text-[#92adc9] text-sm ml-8">
          {date}
        </p>
      )}

      {/* Description + Expand/Collapse */}
      {description && (
        <div className="mt-2 text-gray-700 dark:text-[#c0d0e0] text-sm ml-8">
          {!isExpanded ? (
            <button
              onClick={toggleExpand}
              className="text-blue-500 underline text-sm self-start"
            >
              More info
            </button>
          ) : (
            <>
              <div>{description}</div>
              <button
                onClick={toggleExpand}
                className="mt-1 text-blue-500 underline text-sm self-start"
              >
                Show less
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default EducationItem;
