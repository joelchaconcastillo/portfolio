import React from "react";
// ✅ Import hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useSwiper from "../hooks/useSwiper";
import useScrollTop from "../hooks/useScrollTop";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";

const About = () => {
  // Initialize effects using hooks
  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark group/design-root overflow-x-hidden font-display">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

            <div className="flex flex-wrap justify-between gap-3 p-4 mt-8">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  About Me
                </p>
                <p className="text-gray-500 dark:text-[#92adc9] text-base font-normal leading-normal">
                  A brief, engaging introduction to Joel Chacon Castillo, highlighting his dual expertise as a software engineer and AI researcher.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {/* Card 1 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-[#324d67] bg-white dark:bg-[#192633]/70 p-4 flex-col">
                <div className="text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>psychology</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">LangChain Agentic AI Development</h2>
                  <p className="text-gray-500 dark:text-[#92adc9] text-sm font-normal leading-normal">
                    Experienced in building agentic AI systems with LangChain.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-[#324d67] bg-white dark:bg-[#192633]/70 p-4 flex-col">
                <div className="text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>hub</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Software Architecture</h2>
                  <p className="text-gray-500 dark:text-[#92adc9] text-sm font-normal leading-normal">
                    Skilled in designing robust and scalable software systems.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-1 gap-3 rounded-lg border border-gray-200 dark:border-[#324d67] bg-white dark:bg-[#192633]/70 p-4 flex-col">
                <div className="text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>lightbulb</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Problem Solving</h2>
                  <p className="text-gray-500 dark:text-[#92adc9] text-sm font-normal leading-normal">
                    Adept at analytical and problem-solving in complex technical environments.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              My Expertise
            </h2>
            <div className="px-4">
              <p className="text-gray-500 dark:text-[#92adc9] text-base font-normal leading-normal">
                With a solid foundation in software engineering, I have dedicated my career to building robust and scalable systems. My passion for innovation naturally led me to the field of Artificial Intelligence, where I now focus on developing agentic AI systems using LangChain. I thrive on solving complex problems and am constantly exploring the intersection of software architecture and cutting-edge AI research to create intelligent and impactful solutions. My work is driven by a desire to push the boundaries of what's possible, from architecting intricate software to building autonomous agents that can reason and act.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
