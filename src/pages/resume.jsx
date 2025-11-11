import React, { useRef } from "react";
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

import LeftSection from "./resume/leftSection";
import RightSection from "./resume/rightSection";
import ResumePDF from "./resume/resumePDF";

const Resume = () => {


  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();
  const experiencesData = [
    {
      icon: "code",
      title: "Open Source Developer",
      organization: "",
      date: "2025 — Present",
      description: [
        {
          text: "Developed PyTestGenAI, an AI-powered Python package for automated test generation using large language models.",
        },
        {
          link: {
            label: "PyTestGenAI Repository",
            url: "https://github.com/joelchaconcastillo/PyTestGenAI",
          },
        },
        {
          text: "Building agentic-codegen, an AI-driven code generation library featuring multi-stage pipelines for analysis, testing, and automated bug fixing. Developed with CrewAI, Streamlit, and Gemini.",
        },
        {
          link: {
            label: "Agentic-Codegen (PyTestCrewAI)",
            url: "https://github.com/joelchaconcastillo/PyTestCrewAI",
          },
        },
        {
          text: "Implemented a Retrieval-Augmented Generation (RAG) system using LangChain, ChromaDB, and Gemini. The pipeline ingests textual data—including LinkedIn content—and supports real-time retrieval for portfolio generation.",
        },
        {
          text: "Front-end developed with React and Tailwind CSS, and back-end implemented with FastAPI. The system is deployed on Hugging Face Spaces.",
        },
        {
          link: {
            label: "RAG Portfolio Repository",
            url: "https://github.com/joelchaconcastillo/rag_portfolio",
          },
        },
        {
          link: {
            label: "FastAPI Back-End (Hugging Face Deployment)",
            url: "https://joelchacon-rag-portfolio.hf.space/docs",
          },
        },
      ],
    },
    {
      icon: "work",
      title: "Senior Software Developer",
      organization: "Oracle",
      date: "2023 — 2025",
      description: [
        { text: "Back-End: FastAPI, SQLAlchemy, Pydantic for scalable APIs and services." },
        { text: "GraphQL: Designing flexible APIs." },
        { text: "Front-End: Preact and Oracle JET for dynamic, lightweight UIs." },
        { text: "Cloud & DevOps: Object storage, Redis, Vault, OpenSearch, serverless ML deployments, DS operations, pre-auth access." },
        { text: "Recommender Systems: End-to-end ML-based recommendation engines." },
        { text: "CI/CD: Pipelines with SonarQube, Pytest, pre-commit hooks, and coding standards." },
        { text: "SQL & Architecture: Schema design, migrations, backups, scalable system architecture." },
        { text: "Microservices & Docker: Containerizing and deploying services." },
        { text: "Data Science Refactoring: Optimized large-scale DS code (>50K lines)." },
        { text: "Kubernetes: Cluster setup, monitoring, and management." },
        { text: "Network & API: Troubleshooting and optimizing REST APIs; observability with Kiali and Jaeger." },
        { text: "NoSQL & POCs: Proof-of-concepts with NoSQL technologies." },
        { text: "Testing & LLM: Advanced Pytest automation, LLM-driven code reviews, prompt engineering." },
        { text: "RAG Systems: Retrieve-Augmented Generation with LLaMA models and DB retrievals." },
        { text: "Performance Testing: Scaling support through analysis and optimization." },
        { text: "Hiring & Evaluation: Interviewing with focus on DSA and system design." },
        { text: "Skills: Bash, Linux, Oracle DB, Apollo GraphQL, FastAPI, Cloud Vault, Data Modeling, Kubernetes, OCI, Docker, Architecture, Preact, Cloud Object Storage, CI/CD." },
      ],
    },
    {
      icon: "science",
      title: "Research Associate",
      organization: "The University of Texas at Dallas",
      date: "2023",
      description: [
        {
          text: "Designed, developed, and evaluated advanced machine learning models for predictive and optimization tasks.",
        },
        {
          text: "Managed and coordinated multiple research and software development projects across various academic institutions.",
        },
        {
          text: "Conducted large-scale computational experiments on NASA’s supercomputing infrastructure to validate research hypotheses.",
        },
        {
          text: "Authored and co-authored research manuscripts, fostering collaboration with national and international researchers.",
        },
        {
          text: "Technologies used: Python, PyTorch, C++, and scikit-learn.",
        },
        { link: { label: "Springer Chapter", url: "https://link.springer.com/chapter/10.1007/978-981-97-2253-2_33" } },
        { link: { label: "IEEE Big Data 2024 Paper", url: "https://www.computer.org/csdl/proceedings-article/bigdata/2024/10825303/23yk9W9fR8A" } },
        { link: { label: "Zenodo Source Code", url: "https://zenodo.org/records/7952192" } },
      ],
    },
    {
      icon: "science",
      title: "Pre-Research Associate (Remote, Unpaid)",
      organization: "The University of Texas at Dallas",
      date: "2022 — 2023",
      description: [
        {
          text: "Conducted research on wildfire prediction, focusing on the development, training, and evaluation of machine learning models for predictive analysis.",
        },
        {
          text: "Prepared research manuscripts detailing methodologies, experimental results, and model performance for publication.",
        },
        {
          text: "Technologies used: Python, PyTorch, C++, and scikit-learn.",
        },
      ],
    },
    {
      icon: "emoji_objects",
      title: "Algorithm Engineer",
      organization: "Center for Research in Mathematics (CIANNA)",
      date: "2022",
      description: [
        {
          text: "Developed an AI system for Nutritional Planning at the Comprehensive Care Center for Children and Adolescents (Centro de Atención Integral para Niñas, Niños y Adolescentes - CIANNA).",
        },
        {
          text: "Designed to optimize the nutritional intake of children and adolescents by leveraging a meta-heuristic approach based on the Memetic algorithm.",
        },
        {
          text: "Implemented global and local search strategies to efficiently explore and exploit the solution space, generating personalized and balanced meal plans.",
        },
        {
          text: "Integrated factors such as age, health conditions, activity levels, and nutritional requirements to provide adaptive and individualized nutrition recommendations.",
        },
        {
          text: "Aimed to enhance the overall health and well-being of children and adolescents by supporting growth and development through scientifically tailored nutrition.",
        },
        {
          text: "Technologies used: C++ and Bash.",
        },
        {
          link: {
            label: "GitHub Repository",
            url: "https://github.com/joelchaconcastillo/MPP_CIANNA",
          },
        },
      ],
    },
    {
      icon: "devices",
      title: "Fullstack Developer",
      organization: "Center for Research in Mathematics",
      date: "2014 — 2015",
      description: [
        {
          text: "Developed the institutional web system, contributing to open-source prototype testing and project management, covering both UI design and back-end implementation.",
        },
        {
          text: "Conducted the second phase of white-box and black-box testing to ensure system quality and functionality.",
        },
        {
          text: "Submitted the system for review by the government personnel and applied corrections according to their evaluation.",
        },
        {
          text: "Implemented and customized government style sheets to comply with institutional design standards.",
        },
        {
          text: "Participated in stakeholder meetings to gather feedback, align requirements, and ensure project goals were met.",
        },
        {
          text: "Documented the requirements for development and production environments for the 'Graduate Program Visit Request' system.",
        },
        {
          text: "Advanced the documentation of the data dictionary for the 'Graduate Program Visit Request' system.",
        },
        {
          text: "Performed client-side validation for the 'Admission Exam Request' system to enhance user experience and data integrity.",
        },
        {
          text: "Technologies used: HTML, PHP, JavaScript, jQuery, and MySQL.",
        },
      ],
    },
    {
      icon: "engineering",
      title: "Software Engineer",
      organization: "National Laboratory of Genetics for Biodiversity (LANGEBIO)",
      date: "2014",
      description: [
        {
          text: "Developed the 'Computational Platform for Mapping, Visualization, and Analysis of Transcriptomes', integrating bioinformatics tools for genomic data processing and visualization.",
        },
        {
          text: "Implemented sequence identification, conversion, filtering, and genome mapping with JBrowse.",
        },
        {
          text: "Optimized database performance for large-scale transcriptomic datasets.",
        },
        {
          text: "Technologies used: HTML, JavaScript, jQuery, Perl, RStudio, C++, PHP, and MySQL.",
        },
        {
              link: {
                label: "GitHub Repository",
                url: "https://github.com/joelchaconcastillo/srnalightnxtg",
              },
        },
      ],
    }
  ];

// Education data
const educationData = [
  {
    icon: "workspace_premium", // 🎓 PhD
    title: "CIMAT — PhD in Mathematics",
    date: "Jan 2018 — Jan 2023",
    description: <p>Focus: Mathematics and research in applied computational methods.</p>,
  },
  {
    icon: "school", // 🎓 Master's
    title: "CIMAT — Master's in Computer Science",
    date: "Aug 2015 — Dec 2017",
    description: <p>Focus: Advanced computational mathematics and algorithms.</p>,
  },
  {
    icon: "apartment", // 🏛️ Undergraduate institution
    title: "Instituto Tecnológico Superior de Irapuato — Software Engineering",
    date: "Aug 2009 — Aug 2014",
  },
  {
    icon: "psychology", // 🧠 NLP / AI specialization
    title: "Deeplearning.AI — NLP Specialization",
    date: "Aug 2024 — Sep 2024",
    description: (
      <>
        <p>Completed Courses:</p>
        <ul className="list-disc list-inside">
          <li>Natural Language Processing with Classification and Vector Spaces</li>
          <li>Natural Language Processing with Probabilistic Models</li>
          <li>Natural Language Processing with Sequence Models</li>
          <li>Natural Language Processing with Attention Models</li>
        </ul>
        <p>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/1Z0EIDZR1YYZ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            community.deeplearning.ai
          </a>
        </p>
      </>
    ),
  },
  {
    icon: "memory", // 🤖 Machine learning / computation
    title: "Deeplearning.AI — Machine Learning Specialization",
    date: "Sep 2022 — Nov 2022",
    description: (
      <>
        <ul className="list-disc list-inside">
          <li>Supervised Machine Learning: Regression and Classification</li>
          <li>Advanced Learning Algorithms</li>
          <li>Unsupervised Learning, Recommenders, Reinforcement Learning</li>
        </ul>
        <p>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/HHVW7BPGKL63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            community.deeplearning.ai
          </a>
        </p>
      </>
    ),
  },
  {
    icon: "code", // 💻 React / web dev specialization
    title: "Meta — React Specialization",
    description: (
      <>
        <p>
          Mastered React from core concepts to advanced techniques to build modern,
          dynamic web interfaces.
        </p>
        <p>
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/FGF2L5FMVQD0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            community.deeplearning.ai
          </a>
        </p>
      </>
    ),
  },
];


// Skills data
const skillsData = [
  {
    category: "Programming Languages",
    skills: ["Python", "C++", "TypeScript", "PHP", "Perl", "R"],
  },
  {
    category: "Libraries & Frameworks",
    skills: ["PyTorch", "React", "jQuery", "LangChain", "ChromaDB", "CrewAI"],
  },
  {
    category: "Other Skills",
    skills: ["Agentic AI Development", "Software Architecture", "R Studio"],
  },
];


  return (
    <main className="flex flex-col gap-8 mt-8 px-4 text-gray-900 dark:text-white" >
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-4 items-center">
        <div className="flex flex-col gap-2">
          <p className="text-4xl font-black leading-tight tracking-[-0.033em]">Resume</p>
          <p className="text-gray-600 dark:text-[#92adc9] text-base leading-normal">
            Professional experience, research, and skills.
          </p>
        </div>
        <ResumePDF experiencesData={experiencesData} educationData={educationData} skillsData={skillsData}/>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <LeftSection experiencesData={experiencesData}/>
        <RightSection educationData={educationData} skillsData={skillsData}/>
      </div>
    </main>
  );
};

export default Resume;
