import React from "react";
import Card from "../common/Card";

const ProjectCard = ({ title, image, description, url, tags = [] }) => {
  return (
    // use `group` so children can respond to hover on the card
    <Card className="overflow-hidden relative group" aria-label={`Project ${title}`}>
      <a href={url} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Open project ${title}`}>
    {/* Image: use contain so full image is visible; container centers it.
      Keep background transparent so the Card's frosted background shows through */}
    <div className="h-52 w-full flex items-center justify-center overflow-hidden relative bg-transparent">
          <img
            src={image}
            alt={title}
            className="object-contain max-h-full w-full transform transition-transform duration-500 group-hover:scale-105"
          />

          {/* Hover overlay with CTA — appears when card is hovered */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto px-4">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white rounded-md font-semibold shadow-lg hover:opacity-90"
                aria-label={`Open ${title} in new tab`}
              >
                Open
              </a>
            </div>
          </div>
        </div>

        <div className="p-4">
          <p className="text-lg font-semibold text-slate-900 dark:text-white">{title}</p>
          <p className="mt-2 text-sm text-slate-700 dark:text-[#92adc9] leading-relaxed">{description}</p>

          {tags && tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs inline-flex items-center px-2.5 py-1 rounded-full bg-gradient-to-r from-white to-gray-100 dark:from-[#062432] dark:to-[#071827] text-slate-700 dark:text-[#9fc1df] shadow-sm border border-gray-100 dark:border-[#123142]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </Card>
  );
};

export default ProjectCard;
