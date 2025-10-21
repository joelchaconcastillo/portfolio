import React from "react";

const Research = () => {
  return (
    <div className="research-page">
      <main className="main">
        <section id="research" className="research section">
          <div className="container section-title">
            <h2>Research</h2>
            <p>
              Research projects, publications, and contributions by Joel Chacón Castillo
            </p>
          </div>

          <div className="container">
            {/* Research Experience */}
            <div className="research-block">
              <h3>Research Experience</h3>

              <div className="research-item">
                <h4>Independent Researcher</h4>
                <h5>September 2025 - October 2025</h5>
                <p>
                  Developed <strong>OptiGenAI</strong>, an AI-powered Python toolkit to generate single-objective, multi-objective, constrained, and unconstrained optimization problems. Designed novel algorithms for advanced link prediction in graphs, exploring structural properties and optimization techniques.
                </p>
              </div>

              <div className="research-item">
                <h4>Project Research Consultant / Researcher</h4>
                <h5>June 2023 - November 2023</h5>
                <p>
                  Collaborated with <strong>The University of Texas at Dallas</strong> and <strong>Advanced Information System Technology (AIST)</strong> to develop Geometric Deep Learning models for link prediction problems using Topological Data Analysis and tested models on supercomputers.
                </p>
              </div>

              <div className="research-item">
                <h4>Machine Learning and Topological Data Analysis</h4>
                <h5>November 2022 - June 2023</h5>
                <p>
                  Developed Geometric Deep Learning models for wildfire prediction using remote sensing images and Topological Data Analysis at The University of Texas at Dallas.
                </p>
              </div>
            </div>

            {/* Publications */}
            <div className="research-block">
              <h3>Publications</h3>
              <ul>
                <li>
                  <strong>Analysis and Enhancement of Simulated Binary Crossover Differential Evolution with Enhanced Diversity Maintenance</strong>  
                  <p>
                    This paper analyzes and enhances the Simulated Binary Crossover (SBX) in Differential Evolution (DE) to improve diversity maintenance in multi-objective optimization problems.
                  </p>
                </li>
                <li>
                  <strong>FZ-GCN: Time-Aware Topological Graph Convolutional Networks for Wildfire Prediction</strong>  
                  <p>
                    Introduces FZ-GCN, a time-aware topological graph convolutional network designed for wildfire prediction, addressing the challenges posed by climate change on wildfire occurrences.
                  </p>
                </li>
                <li>
                  <strong>A Multi-Objective Decomposition-Based Evolutionary Algorithm with Enhanced Variable Space Diversity Control</strong>  
                  <p>
                    Proposes a multi-objective evolutionary algorithm that explicitly manages the diversity of decision variable space to improve the quality of solutions in multi-objective optimization problems.
                  </p>
                </li>
                <li>
                  <strong>VSD-MOEA: A Dominance-Based Multi-Objective Evolutionary Algorithm with Explicit Variable Space Diversity Management</strong>  
                  <p>
                    Presents VSD-MOEA, an algorithm that incorporates explicit management of diversity in both decision variable and objective function spaces to enhance the performance of multi-objective evolutionary algorithms.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Research;
