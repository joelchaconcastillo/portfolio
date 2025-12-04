import React from "react";
import Certifications from "../components/sections/Certifications";
import Awards from "../components/sections/Awards";

const cardBaseClasses =
  "flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg p-4 transition-shadow duration-300";
const cardLightBg = "bg-white shadow-[0_6px_20px_rgba(2,6,23,0.08)] hover:shadow-lg";
const cardDarkBg = "dark:bg-[#0f1720] dark:border dark:border-white/6 dark:shadow-none dark:hover:shadow-[0_6px_20px_rgba(2,6,23,0.32)]";

const iconContainerClasses =
  "flex items-center justify-center w-16 h-16 rounded-lg flex-shrink-0 bg-secondary/20 dark:bg-secondary/30";

const buttonBase =
  "flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 text-sm font-medium leading-normal w-fit transition-colors";
const buttonLight = "bg-secondary/10 text-secondary hover:bg-secondary/20";
const buttonDark = "dark:bg-[#1e3646] dark:text-white dark:hover:bg-secondary/30";

const mutedTextLight = "text-text-light/80";
const mutedTextDark = "dark:text-[#9fc1df]";

const dateTextLight = "text-text-light/60";
const dateTextDark = "dark:text-white/60";

const Achievements = () => {
  // Data moved to src/data/achievements.js and sections

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen">
      <div className="relative flex h-auto w-full flex-col group/design-root overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-[960px] flex-1">
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-primary dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                  Achievements
                </p>
              </div>

              <div className="px-4">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <Certifications />
                  </div>
                  <div>
                    <Awards />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
