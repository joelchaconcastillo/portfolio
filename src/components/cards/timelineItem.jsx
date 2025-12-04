import React, { useState } from "react";
import Card from "../common/Card";

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

      {/* Content wrapped in a Card for consistent visuals */}
      <Card className="p-4" data-aos="fade-up">
        <p className="font-medium">
          {title} {organization && `- ${organization}`}
        </p>
        {date && <p className="text-gray-600 dark:text-[#92adc9] text-sm mt-1">{date}</p>}

        {description && description.length > 0 && (
          <div className="mt-3 text-gray-600 dark:text-[#92adc9] text-sm">
            {!isExpanded ? (
              <button onClick={toggleExpand} className="text-blue-500 underline text-sm">
                More info
              </button>
            ) : (
              <>
                <ul className="list-disc list-outside pl-5 space-y-2">
                  {description.map((item, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {item.text && <span>{item.text}</span>}

                      {item.link && (
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-blue-500 underline hover:text-blue-600"
                        >
                          [{item.link.label || "Link"}]
                        </a>
                      )}

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

                <button onClick={toggleExpand} className="mt-2 text-blue-500 underline text-sm">
                  Show less
                </button>
              </>
            )}
          </div>
        )}
      </Card>
    </>
  );
};

export default TimelineItem;
