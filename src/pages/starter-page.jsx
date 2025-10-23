// src/pages/StarterPage.jsx
import React from "react";

// Custom hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

const StarterPage = () => {
  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7f8] dark:bg-[#0f172a] text-gray-900 dark:text-[#92adc9]">
      {/* Main content */}
      <main className="flex-grow">
        <div className="px-4 sm:px-10 py-20 sm:py-32 text-center sm:text-left">
          <div className="max-w-3xl mx-auto sm:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter text-gray-900 dark:text-white">
              Joel Chacon Castillo
            </h1>
            <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-[#cbd5e1]">
              Software Engineer, AI Researcher, Full-Stack Developer
            </h2>
            <p className="mt-6 text-base sm:text-lg max-w-xl mx-auto sm:mx-0 text-gray-700 dark:text-[#92adc9]">
              I build innovative and efficient solutions at the intersection of artificial intelligence and software development. My passion lies in creating intelligent systems that solve real-world problems.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <button className="w-full sm:w-auto flex min-w-[160px] max-w-[480px] items-center justify-center rounded-lg h-12 px-5 
                bg-blue-600 dark:bg-blue-500 text-white dark:text-white 
                text-base font-bold hover:bg-blue-700 dark:hover:bg-blue-400
                transition-colors duration-200"
              >
                Explore My Work
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StarterPage;
