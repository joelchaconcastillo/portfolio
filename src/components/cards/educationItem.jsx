import React, { useState } from "react";

const EducationItem = ({ icon, title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4 mt-2">
      {/* Icon */}
      <div className="material-symbols-outlined text-2xl">{icon}</div>

      {/* Content */}
      <div className="flex flex-col py-3">
        <p className="font-medium">{title}</p>
        {date && <p className="text-gray-600 dark:text-[#92adc9] text-sm">{date}</p>}

        {description && (
          <div className="mt-2 text-gray-700 dark:text-[#c0d0e0] text-sm">
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
    </div>
  );
};

export default EducationItem;
