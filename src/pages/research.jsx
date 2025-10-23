import React from "react";

const Research = () => {
  return (
    <div className="flex flex-col gap-8 mt-8 px-4">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
          Research
        </p>
      </div>

      <p className="text-slate-900 dark:text-gray-300 text-base font-normal leading-normal pb-3 pt-1 px-4">
        A brief introduction to my research interests and focus.
      </p>

      <div className="flex flex-col p-4">
        {/* Existing Works */}
        <details className="flex flex-col border-t border-t-gray-200 dark:border-t-[#324d67] py-2 group" open>
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal">
              Analysis and Enhancement of Simulated Binary Crossover Differential Evolution with Enhanced Diversity Maintenance
            </p>
            <div className="text-slate-900 dark:text-white group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </summary>
          <div className="text-slate-600 dark:text-[#92adc9] text-sm font-normal leading-normal pb-2 space-y-2">
            <p>
              Authors: Joel Chacón Castillo, Co-Author 1, Co-Author 2<br />
              Publication: Journal of Artificial Intelligence Research
            </p>
            <p>
              This paper presents an in-depth analysis of the simulated binary crossover operator and proposes several enhancements to improve its performance in differential evolution algorithms. We introduce a new diversity maintenance mechanism that helps to prevent premature convergence and explore the search space more effectively.
            </p>
            <a className="text-primary font-medium hover:underline" href="#">Read Paper</a>
          </div>
        </details>

        {/* New Works */}
        <details className="flex flex-col border-t border-t-gray-200 dark:border-t-[#324d67] py-2 group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal">
              The Importance of Diversity in the Variable Space in the Design of Multi-Objective Evolutionary Algorithms
            </p>
            <div className="text-slate-900 dark:text-white group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </summary>
          <div className="text-slate-600 dark:text-[#92adc9] text-sm font-normal leading-normal pb-2 space-y-2">
            <p>
              Authors: Joel Chacón Castillo, Carlos Segura, Oliver Schütze<br />
              Publication: Applied Soft Computing, February 2023
            </p>
            <p>
              This paper emphasizes the significance of maintaining diversity in the variable space to enhance the performance of multi-objective evolutionary algorithms. It proposes strategies to prevent premature convergence by explicitly managing diversity.
            </p>
            <a className="text-primary font-medium hover:underline" href="https://www.sciencedirect.com/science/article/abs/pii/S156849462300087X">Read Paper</a>
          </div>
        </details>

        <details className="flex flex-col border-t border-t-gray-200 dark:border-t-[#324d67] py-2 group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal">
              VSD-MOEA: A Dominance-Based Multiobjective Evolutionary Algorithm with Explicit Variable Space Diversity Management
            </p>
            <div className="text-slate-900 dark:text-white group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </summary>
          <div className="text-slate-600 dark:text-[#92adc9] text-sm font-normal leading-normal pb-2 space-y-2">
            <p>
              Authors: Joel Chacón Castillo, Carlos Segura, Carlos A. Coello Coello<br />
              Publication: Evolutionary Computation, June 2022
            </p>
            <p>
              This work introduces VSD-MOEA, an algorithm that integrates explicit variable space diversity management within a dominance-based framework, aiming to improve the exploration capabilities of multi-objective evolutionary algorithms.
            </p>
            <a className="text-primary font-medium hover:underline" href="https://direct.mit.edu/evco/article/30/2/195/107905/VSD-MOEA-A-Dominance-Based-Multiobjective">Read Paper</a>
          </div>
        </details>

        <details className="flex flex-col border-t border-t-gray-200 dark:border-t-[#324d67] py-2 group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal">
              Differential Evolution with Enhanced Diversity Maintenance
            </p>
            <div className="text-slate-900 dark:text-white group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </summary>
          <div className="text-slate-600 dark:text-[#92adc9] text-sm font-normal leading-normal pb-2 space-y-2">
            <p>
              Authors: Joel Chacón Castillo, Carlos Segura<br />
              Publication: Optimization Letters, August 2020
            </p>
            <p>
              The paper presents a variant of differential evolution that incorporates enhanced diversity maintenance mechanisms to prevent premature convergence and improve solution quality.
            </p>
            <a className="text-primary font-medium hover:underline" href="https://www.researchgate.net/publication/334493260_Differential_evolution_with_enhanced_diversity_maintenance">Read Paper</a>
          </div>
        </details>

        <details className="flex flex-col border-t border-t-gray-200 dark:border-t-[#324d67] py-2 group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
            <p className="text-slate-900 dark:text-white text-sm font-medium leading-normal">
              A Multi-Objective Decomposition-Based Evolutionary Algorithm with Enhanced Variable Space Diversity Control
            </p>
            <div className="text-slate-900 dark:text-white group-open:rotate-180">
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </summary>
          <div className="text-slate-600 dark:text-[#92adc9] text-sm font-normal leading-normal pb-2 space-y-2">
            <p>
              Authors: Joel Chacón Castillo, Carlos Segura, Arturo Hernandez-Aguirre, Coromoto Leon<br />
              Publication: ACM Conference Proceedings, July 2017
            </p>
            <p>
              This conference paper discusses an evolutionary algorithm that explicitly manages variable space diversity to enhance the performance of multi-objective decomposition-based methods.
            </p>
            <a className="text-primary font-medium hover:underline" href="https://dl.acm.org/doi/10.1145/3067695.3082527">Read Paper</a>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Research;
