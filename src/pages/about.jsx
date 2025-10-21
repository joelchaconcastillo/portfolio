import React from "react";

import Layout from "../components/Layout";
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
    <div className="about-page">
      <main className="main">

        {/* About Section */}
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About Me</h2>
            <p>Software Engineer | AI Researcher | Full-Stack Developer | ex-Oracle</p>
          </div>

          <div className="container content" data-aos="fade-up" data-aos-delay="100">
            <h2>Hi, I'm Joel Chacon Castillo</h2>
            <p className="fst-italic py-3">
              I am a software engineer and AI researcher with experience in full-stack development, AI solutions, and scalable system architecture. I have a strong background in back-end and front-end development, AI-driven research, and algorithm design.
            </p>

            <div className="row py-3">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>joelchaconcastillo@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Guanajuato, Mexico</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>LinkedIn:</strong> <span><a href="https://www.linkedin.com/in/joel-chaconcastillo-351bb4194" target="_blank" rel="noopener noreferrer">linkedin.com/in/joel-chaconcastillo</a></span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Top Skills:</strong> <span>LangChain, Agentic AI, Software Architecture</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Experience:</strong> <span>Senior Software Developer at Oracle, Freelance AI/Software Projects</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Education:</strong> <span>PhD in Mathematics, Master's in Computer Science</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Certifications:</strong> <span>Meta React, OCI 2024, AI Foundations</span></li>
                </ul>
              </div>
            </div>

            <p className="py-3">
              My work spans AI research, full-stack development, and production-ready software solutions. I have built libraries, automated testing tools, and optimization toolkits, combining deep algorithmic knowledge with practical engineering skills. I am passionate about creating scalable systems and innovative AI solutions.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>Technical expertise and tools I excel at</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
              {[
                { name: "Python", value: 95 },
                { name: "FastAPI / SQLAlchemy", value: 90 },
                { name: "React / Preact", value: 85 },
                { name: "AI / Machine Learning", value: 90 },
                { name: "Docker / Kubernetes", value: 80 },
                { name: "GraphQL / REST APIs", value: 85 },
              ].map((skill, i) => (
                <div key={i} className="col-lg-6">
                  <div className="progress">
                    <span className="skill">
                      <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                    </span>
                    <div className="progress-bar-wrap">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
