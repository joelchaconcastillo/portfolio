import React, { useState } from "react";

const TimelineItem = ({ icon, title, organization, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <>
      {/* Icon + vertical line */}
      <div className="flex flex-col items-center gap-1 pt-3">
        <div className="material-symbols-outlined text-2xl">{icon}</div>
        <div className="w-[1.5px] bg-gray-300 dark:bg-[#324d67] h-full"></div>
      </div>

      {/* Content */}
      <div className="flex flex-col py-3 pl-4">
        <p className="font-medium">
          {title} {organization && `- ${organization}`}
        </p>
        {date && <p className="text-gray-600 dark:text-[#92adc9] text-sm">{date}</p>}

        {description && description.length > 0 && (
          <div className="mt-2 text-gray-600 dark:text-[#92adc9] text-sm">
            {!isExpanded ? (
              <button
                onClick={toggleExpand}
                className="text-blue-500 underline text-sm self-start"
              >
                More info
              </button>
            ) : (
              <>
                <ul className="space-y-1 list-disc list-inside">
                  {description.map((item, idx) => (
                    <li key={idx}>
                      {item.text}
                      {item.subText && <p className="mt-1">{item.subText}</p>}
                    </li>
                  ))}
                </ul>
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
    </>
  );
};

export default TimelineItem;
