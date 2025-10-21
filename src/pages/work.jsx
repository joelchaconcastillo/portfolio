import React from "react";

// ✅ Custom hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

const Work = () => {
  // Initialize all page effects
  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <div className="resume-page">
      <main className="main">
        <section id="resume" className="resume section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>Joel Chacon Castillo - Software Engineer | AI Researcher | Full-Stack Developer</p>
          </div>

          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Joel Chacon Castillo</h4>
                  <p>
                    <em>
                      Experienced Software Engineer and AI Researcher with expertise in Full-Stack Development, Agentic AI, LangChain, and Software Architecture. Proven ability to design, develop, and deploy scalable solutions with advanced AI integrations.
                    </em>
                  </p>
                  <ul>
                    <li>Guanajuato, Mexico</li>
                    <li>joelchaconcastillo@gmail.com</li>
                    <li>
                      <a href="https://www.linkedin.com/in/joel-chaconcastillo-351bb4194" target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://scholar.google.com/citations" target="_blank" rel="noreferrer">
                        Google Scholar
                      </a>
                    </li>
                    <li>
                      <a href="https://uhunt.onlinejudge.org/id/725785" target="_blank" rel="noreferrer">
                        uHunt
                      </a>
                    </li>
                    <li>
                      <a href="https://leetcode.com/u/joelchacon/" target="_blank" rel="noreferrer">
                        LeetCode
                      </a>
                    </li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>PhD in Mathematics</h4>
                  <h5>2018 - 2023</h5>
                  <p>
                    <em>Center for Research in Mathematics (CIMAT), Mexico</em>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Master's in Computer Science</h4>
                  <h5>2015 - 2017</h5>
                  <p>
                    <em>Centro de Investigación en Matemáticas (CIMAT), Mexico</em>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Bachelor's in Software Engineering</h4>
                  <h5>2009 - 2014</h5>
                  <p>
                    <em>Instituto Tecnológico Superior de Irapuato, Mexico</em>
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>

                <div className="resume-item">
                  <h4>Freelance Open Source Software Developer</h4>
                  <h5>August 2025 - Present</h5>
                  <p>
                    <em>Remote</em>
                  </p>
                  <ul>
                    <li>Developed PyTestGenAI for AI-powered unit and integration testing.</li>
                    <li>Created RecomPy for building production-ready recommendation systems.</li>
                    <li>Built agentic-codegen to make AI-generated code production-ready via multi-stage pipelines.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Independent Researcher</h4>
                  <h5>September 2025 - October 2025</h5>
                  <p>
                    <em>Remote</em>
                  </p>
                  <ul>
                    <li>Developed OptiGenAI to generate single & multi-objective optimization problems.</li>
                    <li>Designed novel algorithms for link prediction in graphs, pushing state-of-the-art results.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Senior Software Developer</h4>
                  <h5>June 2023 - June 2025</h5>
                  <p>
                    <em>Oracle</em>
                  </p>
                  <ul>
                    <li>Back-End: FastAPI, SQLAlchemy, Pydantic for scalable APIs.</li>
                    <li>Front-End: Preact, Oracle JET for dynamic UIs.</li>
                    <li>GraphQL, Microservices, Kubernetes, CI/CD pipelines, performance optimization.</li>
                    <li>RAG Systems, LLM code reviews, and recommender systems design and deployment.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Project Research Consultant / Researcher</h4>
                  <h5>Nov 2022 - Nov 2023</h5>
                  <p>
                    <em>The University of Texas at Dallas / AIST</em>
                  </p>
                  <ul>
                    <li>Developed Geometric Deep Learning models for link prediction and wildfire prediction using TDA and remote sensing images.</li>
                    <li>Performed testing and development with supercomputers.</li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Software Engineer</h4>
                  <h5>Jan 2022 - Sep 2022</h5>
                  <p>
                    <em>CIANNA / CIMAT</em>
                  </p>
                  <ul>
                    <li>Developed AI for Nutritional Planning using Memetic evolutionary algorithms.</li>
                    <li>Optimized personalized meal plans for children and adolescents considering age, health, and nutritional requirements.</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;
