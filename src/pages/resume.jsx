import React from "react";

// ✅ Custom hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

const Resume = () => {
  // Initialize all page effects
  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <main className="flex flex-col gap-8 mt-8 px-4">
      <div className="flex flex-wrap justify-between gap-4 items-center">
        <div className="flex flex-col gap-2">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
            Resume
          </p>
          <p className="text-[#92adc9] text-base font-normal leading-normal">
            My professional experience and qualifications.
          </p>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#233648] text-white text-sm font-bold leading-normal tracking-[0.015em] gap-2">
          <span className="material-symbols-outlined text-base">download</span>
          <span className="truncate">Download PDF</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Experience Section */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Experience
          </h2>
          <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            {/* Freelance Open Source Software Developer */}
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="text-white material-symbols-outlined text-2xl">code</div>
              <div className="w-[1.5px] bg-[#324d67] h-full"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">
                Freelance Open Source Software Developer
              </p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">Present</p>
              <ul className="list-disc list-inside text-[#92adc9] text-sm mt-2 space-y-1">
                <li>Contributed to various open-source projects, focusing on machine learning and data visualization libraries.</li>
                <li>Collaborated with a global community of developers to improve software quality and add new features.</li>
              </ul>
            </div>

            {/* Independent Researcher */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] bg-[#324d67] h-2"></div>
              <div className="text-white material-symbols-outlined text-2xl">lightbulb</div>
              <div className="w-[1.5px] bg-[#324d67] h-full"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">Independent Researcher</p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">2022 - Present</p>
              <ul className="list-disc list-inside text-[#92adc9] text-sm mt-2 space-y-1">
                <li>Published papers on novel neural network architectures for natural language understanding.</li>
                <li>Explored applications of reinforcement learning in complex, dynamic environments.</li>
              </ul>
            </div>

            {/* Senior Software Developer, Oracle */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] bg-[#324d67] h-2"></div>
              <div className="text-white material-symbols-outlined text-2xl">business_center</div>
              <div className="w-[1.5px] bg-[#324d67] h-full"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">Senior Software Developer, Oracle</p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">2018 - 2022</p>
              <ul className="list-disc list-inside text-[#92adc9] text-sm mt-2 space-y-1">
                <li>Led the development of a cloud-native data processing pipeline, reducing processing time by 40%.</li>
                <li>Designed and implemented scalable microservices using Java and Spring Boot.</li>
              </ul>
            </div>

            {/* Freelance Project Research Consultant */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] bg-[#324d67] h-2"></div>
              <div className="text-white material-symbols-outlined text-2xl">groups</div>
              <div className="w-[1.5px] bg-[#324d67] h-full"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">Freelance Project Research Consultant</p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">2016 - 2018</p>
              <ul className="list-disc list-inside text-[#92adc9] text-sm mt-2 space-y-1">
                <li>Advised startups on integrating AI capabilities into their products.</li>
                <li>Conducted feasibility studies for new technology adoption.</li>
              </ul>
            </div>

            {/* Software Engineer, CIMAT */}
            <div className="flex flex-col items-center gap-1 pb-3">
              <div className="w-[1.5px] bg-[#324d67] h-2"></div>
              <div className="text-white material-symbols-outlined text-2xl">apartment</div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">Software Engineer, CIMAT</p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">2014 - 2016</p>
              <ul className="list-disc list-inside text-[#92adc9] text-sm mt-2 space-y-1">
                <li>Developed scientific computing applications in C++ and Python.</li>
                <li>Contributed to research projects in computational geometry.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education & Skills Section */}
        <div className="w-full lg:w-1/3">
          {/* Education */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Education</h2>
          <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            <div className="flex flex-col items-center gap-1 pt-3">
              <div className="text-white material-symbols-outlined text-2xl">school</div>
              <div className="w-[1.5px] bg-[#324d67] h-full"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">Deeplearning.AI</p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">Deep Learning Specialization</p>
              <p className="text-[#92adc9] text-xs font-normal leading-normal">2021</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] bg-[#324d67] h-2"></div>
              <div className="text-white material-symbols-outlined text-2xl">school</div>
              <div className="w-[1.5px] bg-[#324d67] h-full"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">Center for Research in Mathematics (CIMAT)</p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">M.S. in Computer Science</p>
              <p className="text-[#92adc9] text-xs font-normal leading-normal">2012 - 2014</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] bg-[#324d67] h-2"></div>
              <div className="text-white material-symbols-outlined text-2xl">school</div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">Instituto Tecnológico Superior de Irapuato</p>
              <p className="text-[#92adc9] text-sm font-normal leading-normal">B.S. in Computer Systems Engineering</p>
              <p className="text-[#92adc9] text-xs font-normal leading-normal">2007 - 2012</p>
            </div>
          </div>

          {/* Skills */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">Skills</h2>
          <div className="px-4 space-y-4">
            <div>
              <p className="text-white text-base font-medium leading-normal mb-2">Programming</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">Python</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">Java</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">C++</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">JavaScript</span>
              </div>
            </div>
            <div>
              <p className="text-white text-base font-medium leading-normal mb-2">AI/ML</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">TensorFlow</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">PyTorch</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">Scikit-learn</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">Keras</span>
              </div>
            </div>
            <div>
              <p className="text-white text-base font-medium leading-normal mb-2">Web/Cloud</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">Docker</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">AWS</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">Google Cloud</span>
                <span className="bg-[#233648] text-[#92adc9] text-xs font-semibold px-2.5 py-1 rounded-full">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Resume;
