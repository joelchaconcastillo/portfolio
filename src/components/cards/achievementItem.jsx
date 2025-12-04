import React from "react";

// Use simple material symbol icon (same style as resume timeline) to avoid
// background artifacts in light mode.

const buttonBase =
  "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 text-sm font-medium leading-normal w-fit transition-colors";
const buttonLight = "bg-secondary/10 text-secondary hover:bg-secondary/20";
const buttonDark = "dark:bg-[#1e3646] dark:text-white dark:hover:bg-secondary/30";

const mutedTextLight = "text-text-light/80";
const mutedTextDark = "dark:text-[#9fc1df]";

const dateTextLight = "text-text-light/60";
const dateTextDark = "dark:text-white/60";

const AchievementItem = ({
  icon = "workspace_premium",
  title,
  date,
  description,
  buttonLabel,
  buttonHref,
  onButtonClick,
  accentClass = "text-sky-600",
}) => {
  return (
    <details className="border border-gray-200 dark:border-[#324d67] rounded-2xl shadow-sm hover:shadow-md transition-all bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-sm p-4 group">
      <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 select-none">
        <div className="flex items-center gap-4">
          <div>
            <span className={`material-symbols-outlined text-2xl ${accentClass} dark:text-white`}>{icon}</span>
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-white leading-snug">{title}</p>
            {date && (
              <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mt-1">{date}</p>
            )}
          </div>
        </div>

        <div className="text-slate-900 dark:text-white group-open:rotate-180 transition-transform">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </summary>

      <div className="mt-2 border-t border-gray-200 dark:border-gray-700 pt-3 text-slate-700 dark:text-[#92adc9] text-sm leading-relaxed space-y-3">
        {description && <p className={`text-sm font-normal ${mutedTextLight} ${mutedTextDark}`}>{description}</p>}

        {buttonLabel && (buttonHref ? (
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} ${buttonLight} ${buttonDark} focus:outline-none inline-block`}
          >
            <span className="truncate">{buttonLabel}</span>
          </a>
        ) : (
          <button
            onClick={onButtonClick}
            className={`${buttonBase} ${buttonLight} ${buttonDark} focus:outline-none`}
          >
            <span className="truncate">{buttonLabel}</span>
          </button>
        ))}
      </div>
    </details>
  );
};

export default AchievementItem;
