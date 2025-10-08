import React from "react";

// ✅ Custom hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

import Layout from "../components/Layout";

const Resume = () => {
  // Initialize all page effects
  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <div className="resume-page">
      <Layout>
      <main className="main">
        <section id="resume" className="resume section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Summary</h3>

                <div className="resume-item pb-0">
                  <h4>Brandon Johnson</h4>
                  <p>
                    <em>
                      Innovative and deadline-driven Graphic Designer with 3+
                      years of experience designing and developing user-centered
                      digital/print marketing material from initial concept to
                      final, polished deliverable.
                    </em>
                  </p>
                  <ul>
                    <li>Portland par 127, Orlando, FL</li>
                    <li>(123) 456-7891</li>
                    <li>alice.barkley@example.com</li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>

                <div className="resume-item">
                  <h4>Master of Fine Arts &amp; Graphic Design</h4>
                  <h5>2015 - 2016</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Qui deserunt veniam. Et sed aliquam labore tempore sed
                    quisquam iusto autem sit. Ea vero voluptatum qui ut
                    dignissimos deleniti nerada porti sand markend.
                  </p>
                </div>

                <div className="resume-item">
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2010 - 2014</h5>
                  <p>
                    <em>Rochester Institute of Technology, Rochester, NY</em>
                  </p>
                  <p>
                    Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                    reiciendis et quis. Eius vel ratione eius unde vitae rerum
                    voluptates asperiores voluptatem.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <h3 className="resume-title">Professional Experience</h3>

                <div className="resume-item">
                  <h4>Senior Graphic Design Specialist</h4>
                  <h5>2019 - Present</h5>
                  <p>
                    <em>Experion, New York, NY</em>
                  </p>
                  <ul>
                    <li>
                      Lead in the design, development, and implementation of
                      graphic, layout, and production communication materials.
                    </li>
                    <li>
                      Delegate tasks to team members and provide design counsel.
                    </li>
                    <li>
                      Supervise assessment of all graphic materials for quality.
                    </li>
                    <li>
                      Oversee production project budgets ranging from $2,000 -
                      $25,000.
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Graphic Design Specialist</h4>
                  <h5>2017 - 2018</h5>
                  <p>
                    <em>Stepping Stone Advertising, New York, NY</em>
                  </p>
                  <ul>
                    <li>
                      Developed marketing programs (logos, brochures, infographics, etc.).
                    </li>
                    <li>
                      Managed multiple projects simultaneously under tight deadlines.
                    </li>
                    <li>
                      Consulted clients on design strategy and deliverables.
                    </li>
                    <li>
                      Created design presentations and proposals monthly.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      </Layout>
    </div>
  );
};

export default Resume;
