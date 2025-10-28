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
        { text: "Developed PyTestGenAI, an AI-powered Python package for automated test generation." },
        { text: "Building RecomPy, a Python library for production-ready recommender systems." },
        { text: "Creating agentic-codegen, an AI code generation library with multi-stage pipelines for analysis, testing, and automated fixes." },
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
      date: "2022 — 2023",
      description: [
        {
          text: "Developed models for wildfire forecasting and link prediction.",
          subText: "Conducted research on Topological Data Analysis with Graph Neural Networks (GNN). Worked mostly remotely from Mexico, then completed a short on-site stay at UT Dallas. Designed and optimized wildfire prediction models, processed datasets, and implemented enhancements to link prediction models. Collaborated with NASA equipment as part of the Advanced Information Systems Technology team.",
          text: "Skills: PyTorch, Machine Learning, Graph Neural Networks, Data Science, Remote Sensing Data Analysis, Supercomputer Management, Project Management",
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
          text: "Developed an AI system for personalized nutritional planning for children and adolescents.",
          subText: "Leveraged a Memetic evolutionary algorithm combining global and local search strategies to generate balanced, adaptive meal plans. Considered age, health, activity level, and dietary requirements to enhance growth and well-being. The system efficiently explores and exploits the solution space to provide personalized and scientifically tailored nutrition.",
          text: "Skills: Problem Analysis, C++ Programming, Supercomputing, Optimization, Heuristics",
        },
      ],
    },
    {
      icon: "devices",
      title: "Fullstack Developer",
      organization: "Center for Research in Mathematics",
      date: "2014 — 2015",
      description: [
        { text: "Developed institutional web systems, covering UI design to back-end with HTML, PHP, JavaScript, JQuery, and MySQL." },
      ],
    },
    {
      icon: "engineering",
      title: "Software Engineer",
      organization: "National Laboratory of Genetics for Biodiversity (LANGEBIO)",
      date: "2013 — 2014",
      description: [
        {
          text: "Internship developing a semi-automatic web application for sRNA analysis and visualization.",
          subText: "Worked with HTML, JavaScript, PHP, JQuery, NodeJS, MySQL, Perl, R, C++. Managed ArchLinux servers.",
        },
      ],
    },
  ];

// Education data
const educationData = [
  {
    icon: "school",
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
          Activities & groups:{" "}
          <a
            href="https://community.deeplearning.ai/"
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
    icon: "school",
    title: "Deeplearning.AI — Machine Learning Specialization",
    date: "Sep 2022 — Nov 2022",
    description: (
      <ul className="list-disc list-inside">
        <li>Supervised Machine Learning: Regression and Classification</li>
        <li>Advanced Learning Algorithms</li>
        <li>Unsupervised Learning, Recommenders, Reinforcement Learning</li>
      </ul>
    ),
  },
  {
    icon: "school",
    title: "CIMAT — PhD in Mathematics",
    date: "Jan 2018 — Jan 2023",
    description: <p>Focus: Mathematics and research in applied computational methods.</p>,
  },
  {
    icon: "school",
    title: "CIMAT — Master's in Computer Science",
    date: "Aug 2015 — Dec 2017",
    description: <p>Focus: Advanced computational mathematics and algorithms.</p>,
  },
  {
    icon: "school",
    title: "Instituto Tecnológico Superior de Irapuato — Software Engineering",
    date: "Aug 2009 — Aug 2014",
  },
  {
    icon: "school",
    title: "Coursera — Meta React Specialization",
    description: (
      <p>
        Mastered React from core concepts to advanced techniques to build modern, dynamic
        web interfaces.
      </p>
    ),
  },
];

// Skills data
const skillsData = [
  { category: "Programming", skills: ["Python", "C++", "TypeScript"] },
  { category: "AI & Research", skills: ["LangChain", "Agentic AI Development", "Software Architecture"] },
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
