import React from "react";
const researchPapers = [
  {
    title:
      "Revisiting Link Prediction with the Dowker Complex",
    authors: "JW Choi, Y Chen, J Frías, Joel Castillo, YR Gel",
    publication:
      "Pacific-Asia Conference on Knowledge Discovery and Data Mining (PAKDD)",
    year: "2024",
    description:
      "Explores a topological approach to link prediction using Dowker complexes, improving graph-based inference models.",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-2253-2_33",
    open: false,
  },
  {
    title:
      "Firecast Zigzag Convolutional Network for Wildfire Prediction",
    authors: "Y Chen, Joel Chacón Castillo, H Lee, YR Gel",
    publication:
      "2024 IEEE International Conference on Big Data (BigData)",
    year: "2024",
    description:
      "Introduces the Firecast Zigzag Convolutional Network, a deep learning architecture for accurate wildfire prediction using spatiotemporal data.",
    link: "https://ieeexplore.ieee.org/abstract/document/10825303",
    open: false,
  },
  {
    title:
      "The Importance of Diversity in the Variable Space in the Design of Multi-Objective Evolutionary Algorithms",
    authors: "Carlos Segura, Joel Chacón Castillo, Oliver Schütze",
    publication: "Applied Soft Computing",
    year: "2023",
    description:
      "Highlights the role of decision-space diversity in multi-objective evolutionary algorithms and proposes explicit diversity management strategies.",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S156849462300087X",
    open: false,
  },
  {
    title:
      "VSD-MOEA: A Dominance-Based Multi-Objective Evolutionary Algorithm with Explicit Variable Space Diversity Management",
    authors: "Joel Chacón Castillo, Carlos Segura, Carlos A. Coello Coello",
    publication: "Evolutionary Computation",
    year: "2021",
    description:
      "Presents VSD-MOEA, an algorithm integrating variable-space diversity management into dominance-based evolutionary frameworks.",
    link: "https://direct.mit.edu/evco/article/30/2/195/107905/VSD-MOEA-A-Dominance-Based-Multiobjective",
    open: false,
  },
  {
    title:
      "Differential Evolution with Enhanced Diversity Maintenance",
    authors: "Joel Chacón Castillo, Carlos Segura",
    publication: "Optimization Letters 14 (6), 1471–1490",
    year: "2020",
    description:
      "Proposes a differential evolution variant with enhanced diversity maintenance mechanisms to avoid premature convergence.",
    link: "https://link.springer.com/article/10.1007/s11590-019-01454-5",
    open: false,
  },
  {
    title:
      "Importancia de la Diversidad en el Diseño de Algoritmos Evolutivos",
    authors: "Joel Chacón Castillo, Carlos Segura",
    publication: "Computación Evolutiva",
    year: "2019",
    description:
      "Spanish-language chapter discussing the importance of diversity control in evolutionary algorithm design.",
    link: "#",
    open: false,
  },
  {
    title:
      "A Novel Memetic Algorithm with Explicit Control of Diversity for the Menu Planning Problem",
    authors:
      "Carlos Segura, G Miranda, E Segredo, Joel Chacón",
    publication: "2019 IEEE Congress on Evolutionary Computation (CEC)",
    year: "2019",
    description:
      "Proposes a memetic algorithm with explicit diversity control applied to the menu planning optimization problem.",
    link: "https://ieeexplore.ieee.org/abstract/document/8790339",
    open: false,
  },
  {
    title:
      "Analysis and Enhancement of Simulated Binary Crossover",
    authors: "Joel Chacón Castillo, Carlos Segura",
    publication: "2018 IEEE Congress on Evolutionary Computation (CEC)",
    year: "2018",
    description:
      "Presents improvements to the simulated binary crossover operator within evolutionary algorithms, analyzing its impact on optimization performance.",
    link: "https://ieeexplore.ieee.org/abstract/document/8477746",
    open: false,
  },
  {
    title:
      "A Multi-Objective Decomposition-Based Evolutionary Algorithm with Enhanced Variable Space Diversity Control",
    authors:
      "Joel Chacón Castillo, Carlos Segura, Arturo Hernández-Aguirre, G Miranda, Coromoto León",
    publication:
      "Proceedings of the Genetic and Evolutionary Computation Conference Companion",
    year: "2017",
    description:
      "Introduces an evolutionary algorithm with explicit variable space diversity control for multi-objective decomposition-based optimization.",
    link: "https://dl.acm.org/doi/abs/10.1145/3067695.3082527",
    open: false,
  },
  {
    title:
      "Análisis y diseño de operadores de cruce basados en el cruce binario simulado",
    authors: "Joel Chacón Castillo, Carlos Segura, Arturo Hernández-Aguirre",
    publication: "Research in Computing Science 134, 85–99",
    year: "2017",
    description:
      "Spanish-language study on crossover operators based on simulated binary crossover for evolutionary algorithms.",
    link: "https://rcs.cic.ipn.mx/2017_134/Analisis%20y%20diseno%20de%20operadores%20de%20cruce%20basados%20en%20el%20cruce%20binario%20simulado.pdf",
    open: false,
  },
];



const Research = () => {
  return (
    <div className="flex flex-col gap-8 mt-8 px-4">
      {/* Header */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
          Research
        </p>
      </div>

      <p className="text-slate-900 dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1 px-4 max-w-3xl">
        A brief introduction to my research interests and focus — mainly in
        evolutionary computation, optimization, and diversity management.
      </p>

      {/* Research List */}
      <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-col gap-4 p-4">
            {researchPapers.map((paper, index) => (
              <details
                key={index}
                className="border border-gray-200 dark:border-[#324d67] rounded-2xl shadow-sm hover:shadow-md transition-all bg-white/70 dark:bg-[#0f172a]/70 backdrop-blur-sm p-4 group"
                open={paper.open}
              >
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 select-none">
              <div>
                <p className="text-lg font-semibold text-slate-900 dark:text-white leading-snug">
                  {paper.title}
                </p>
                <p className="text-sm text-sky-600 dark:text-sky-400 font-medium mt-1">
                  {paper.publication} • {paper.year}
                </p>
              </div>
              <div className="text-slate-900 dark:text-white group-open:rotate-180 transition-transform">
                <span className="material-symbols-outlined">expand_more</span>
              </div>
            </summary>

            <div className="mt-2 border-t border-gray-200 dark:border-gray-700 pt-3 text-slate-700 dark:text-[#92adc9] text-sm leading-relaxed space-y-3">
              <p>
                <span className="font-semibold text-slate-800 dark:text-gray-100">
                  Authors:
                </span>{" "}
                {paper.authors}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {paper.description}
              </p>
              <a
                className="inline-block text-sky-600 dark:text-sky-400 font-medium hover:underline mt-1"
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Read Paper
              </a>
            </div>
          </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
