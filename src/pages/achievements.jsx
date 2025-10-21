import React from "react";

const Achievements = () => {
  return (
    <div className="achievements-page">
      <main className="main">
        <section id="achievements" className="achievements section">
          <div className="container section-title">
            <h2>Achievements</h2>
            <p>Certifications, Awards, and Publications of Joel Chacón Castillo</p>
          </div>

          <div className="container">
            {/* Certifications */}
            <div className="achievements-block">
              <h3>Certifications</h3>
              <ul>
                <li>Meta React Specialization</li>
                <li>Problem Solving (Basic)</li>
                <li>Oracle Cloud Infrastructure 2024</li>
                <li>Certified AI Foundations Associate</li>
                <li>Kickstart 2021</li>
                <li>Certificate in Applied Soft Computing</li>
              </ul>
            </div>

            {/* Honors & Awards */}
            <div className="achievements-block">
              <h3>Honors & Awards</h3>
              <ul>
                <li>
                  <strong>Diversity to Improve the Effectiveness of Evolutionary Algorithms</strong>
                  <br />
                  Acknowledged for significant contributions in enhancing the diversity mechanisms within evolutionary algorithms.
                </li>
              </ul>
            </div>

            {/* Publications */}
            <div className="achievements-block">
              <h3>Publications</h3>
              <ul>
                <li>
                  <strong>Analysis and Enhancement of Simulated Binary Crossover Differential Evolution with Enhanced Diversity Maintenance</strong>
                  <br />
                  Presented at the 2018 IEEE Congress on Evolutionary Computation (CEC). This work focuses on improving the diversity maintenance in differential evolution algorithms.
                  <br />
                  <a href="https://scholar.google.com/citations?user=zZpJfLsAAAAJ" target="_blank" rel="noopener noreferrer">View on Google Scholar</a>
                </li>
                <li>
                  <strong>FZ-GCN: Time-Aware Topological Graph Convolutional Networks for Wildfire Prediction</strong>
                  <br />
                  Introduces a novel approach combining graph convolutional networks with temporal data for predicting wildfire occurrences.
                  <br />
                  <a href="https://www.authorea.com/users/632089-joel-chac%C3%B3n-castillo" target="_blank" rel="noopener noreferrer">View on Authorea</a>
                </li>
                <li>
                  <strong>A Multi-Objective Decomposition-Based Evolutionary Algorithm with Enhanced Variable Space Diversity Control</strong>
                  <br />
                  Published in the ACM Digital Library, this paper presents an algorithm that improves the diversity control in multi-objective optimization problems.
                  <br />
                  <a href="https://dl.acm.org/doi/10.1145/3067695.3082527" target="_blank" rel="noopener noreferrer">View on ACM Digital Library</a>
                </li>
                <li>
                  <strong>VSD-MOEA: A Dominance-Based Multi-Objective Evolutionary Algorithm with Explicit Variable Space Diversity Management</strong>
                  <br />
                  Published in the journal Evolutionary Computation, this paper discusses a dominance-based algorithm that explicitly manages diversity in multi-objective optimization.
                  <br />
                  <a href="https://direct.mit.edu/evco/article/30/2/195/107905/VSD-MOEA-A-Dominance-Based-Multiobjective" target="_blank" rel="noopener noreferrer">View on MIT Press</a>
                </li>
                <li>
                  <strong>The Importance of Diversity in the Variable Space in the Design of Multi-Objective Evolutionary Algorithms</strong>
                  <br />
                  An article in Applied Soft Computing highlighting the critical role of diversity in the variable space for effective multi-objective evolutionary algorithms.
                  <br />
                  <a href="https://www.sciencedirect.com/science/article/abs/pii/S156849462300087X" target="_blank" rel="noopener noreferrer">View on ScienceDirect</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Achievements;
