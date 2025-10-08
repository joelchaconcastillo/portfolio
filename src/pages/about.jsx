import React from "react";


import Layout from "../components/Layout";

// ✅ Import hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

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
      <Layout>
      {/* MAIN CONTENT */}
      <main className="main">

        {/* About Section */}
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 justify-content-center">
              <div className="col-lg-4">
                <img
                  src="/assets/img/profile-img.jpg"
                  className="img-fluid"
                  alt="profile"
                />
              </div>
              <div className="col-lg-8 content">
                <h2>UI/UX Designer &amp; Web Developer.</h2>
                <p className="fst-italic py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>

                <p className="py-3">
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
                  Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore.
                  Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia.
                  Sed et consectetur qui quia repellendus itaque neque.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
              {[
                { name: "HTML", value: 100 },
                { name: "CSS", value: 90 },
                { name: "JavaScript", value: 75 },
                { name: "PHP", value: 80 },
                { name: "WordPress/CMS", value: 90 },
                { name: "Photoshop", value: 55 },
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

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="swiper">
              <div className="swiper-wrapper">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className="swiper-slide">
                    <div className="testimonial-item">
                      <img
                        src={`/assets/img/testimonials/testimonials-${n}.jpg`}
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Person {n}</h3>
                      <h4>Role {n}</h4>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>Sample testimonial text {n}.</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
      </main>
      </Layout>
    </div>
  );
};

export default About;
