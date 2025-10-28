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
                  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>lightbulb</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">Problem Solving</h2>
                  <p className="text-gray-500 dark:text-[#92adc9] text-sm font-normal leading-normal">
                    Adept at analytical and problem-solving in complex technical environments.
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
                  <span className="material-symbols-outlined" style={{ fontSize: 24 }}>psychology</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-900 dark:text-white text-base font-bold leading-tight">LangChain Agentic AI Development</h2>
                  <p className="text-gray-500 dark:text-[#92adc9] text-sm font-normal leading-normal">
                    Experienced in building agentic AI systems with LangChain.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-gray-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              My Expertise
            </h2>
              <div className="px-4">
                <p className="text-gray-500 dark:text-[#92adc9] text-base font-normal leading-normal [text-align:justify]">
I am a software engineer and AI researcher focused on turning complex, real-world problems into working intelligent systems. My work spans wildfire prediction, link prediction, and multi-objective optimization using mathematical heuristics, geometric deep learning, and graph-based models.

I have experience across both academia and industry building full-stack, research-driven systems — from data pipelines and scalable back-ends to production-ready AI and user-facing applications. I enjoy problems where uncertainty is high, constraints are real, and correctness matters. My goal is to build systems that not only run, but reason, adapt, and improve over time.
                </p>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
