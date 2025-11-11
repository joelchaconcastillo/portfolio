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
        {date && (
          <p className="text-gray-600 dark:text-[#92adc9] text-sm">{date}</p>
        )}

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
                <ul className="list-disc list-outside pl-5 space-y-2">
                  {description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      <span>{item.text}</span>

                      {/* Inline links */}
                      {item.links && item.links.length > 0 && (
                        <span className="ml-2 inline-flex flex-wrap gap-2">
                          {item.links.map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline hover:text-blue-600"
                            >
                              [{link.label || "Link"}]
                            </a>
                          ))}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={toggleExpand}
                  className="mt-2 text-blue-500 underline text-sm self-start"
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
