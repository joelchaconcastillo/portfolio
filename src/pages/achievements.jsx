import React from "react";

const Achievements = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="flex flex-col max-w-[960px] flex-1">
              
              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-primary dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                  Achievements
                </p>
              </div>

              <h2 className="text-primary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Certifications
              </h2>

              {/* Certification Cards */}
              <div className="p-4">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg bg-white dark:bg-[#192633] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-4xl">
                      workspace_premium
                    </span>
                  </div>
                  <div className="flex flex-[2_2_0px] flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <p className="text-primary dark:text-white text-base font-bold leading-tight">
                        Meta React Specialization
                      </p>
                      <p className="text-sm font-normal text-text-light/80 dark:text-[#92adc9]">
                        A comprehensive certification on building modern web applications with React.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-secondary/10 dark:bg-[#233648] text-secondary dark:text-white text-sm font-medium leading-normal w-fit hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors">
                      <span className="truncate">View Certificate</span>
                    </button>
                  </div>
                  <p className="text-sm font-medium text-text-light/60 dark:text-text-dark/60 mt-2 md:mt-0">
                    Aug 2023
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg bg-white dark:bg-[#192633] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-4xl">
                      workspace_premium
                    </span>
                  </div>
                  <div className="flex flex-[2_2_0px] flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <p className="text-primary dark:text-white text-base font-bold leading-tight">
                        Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate
                      </p>
                      <p className="text-sm font-normal text-text-light/80 dark:text-[#92adc9]">
                        Demonstrates foundational knowledge of AI concepts and services on Oracle Cloud.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-secondary/10 dark:bg-[#233648] text-secondary dark:text-white text-sm font-medium leading-normal w-fit hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors">
                      <span className="truncate">View Certificate</span>
                    </button>
                  </div>
                  <p className="text-sm font-medium text-text-light/60 dark:text-text-dark/60 mt-2 md:mt-0">
                    Mar 2024
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg bg-white dark:bg-[#192633] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-4xl">
                      workspace_premium
                    </span>
                  </div>
                  <div className="flex flex-[2_2_0px] flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <p className="text-primary dark:text-white text-base font-bold leading-tight">
                        Kickstart 2021 Certificate
                      </p>
                      <p className="text-sm font-normal text-text-light/80 dark:text-[#92adc9]">
                        Recognition for participation and performance in the Google Kickstart competition.
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-secondary/10 dark:bg-[#233648] text-secondary dark:text-white text-sm font-medium leading-normal w-fit hover:bg-secondary/20 dark:hover:bg-secondary/30 transition-colors">
                      <span className="truncate">View Certificate</span>
                    </button>
                  </div>
                  <p className="text-sm font-medium text-text-light/60 dark:text-text-dark/60 mt-2 md:mt-0">
                    Dec 2021
                  </p>
                </div>
              </div>

              <h2 className="text-primary dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                Honors &amp; Awards
              </h2>

              {/* Awards */}
              <div className="p-4">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg bg-white dark:bg-[#192633] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-4xl">
                      emoji_events
                    </span>
                  </div>
                  <div className="flex flex-[2_2_0px] flex-col gap-2">
                    <p className="text-primary dark:text-white text-base font-bold leading-tight">
                      Applied Soft Computing Reviewer
                    </p>
                    <p className="text-sm font-normal text-text-light/80 dark:text-[#92adc9]">
                      Recognized for contributions as a reviewer for a leading academic journal.
                    </p>
                  </div>
                  <p className="text-sm font-medium text-text-light/60 dark:text-text-dark/60 mt-2 md:mt-0">
                    Jan 2022
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-lg bg-white dark:bg-[#192633] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary text-4xl">
                      emoji_events
                    </span>
                  </div>
                  <div className="flex flex-[2_2_0px] flex-col gap-2">
                    <p className="text-primary dark:text-white text-base font-bold leading-tight">
                      Diversity to Improve the Effectiveness of Evolutionary Algorithms
                    </p>
                    <p className="text-sm font-normal text-text-light/80 dark:text-[#92adc9]">
                      An award recognizing research contributions in the field of evolutionary algorithms.
                    </p>
                  </div>
                  <p className="text-sm font-medium text-text-light/60 dark:text-text-dark/60 mt-2 md:mt-0">
                    May 2020
                  </p>
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
