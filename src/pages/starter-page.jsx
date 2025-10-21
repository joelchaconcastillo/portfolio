import React from "react";

// ✅ Custom hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

const StarterPage = () => {
  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <div className="starter-page">
      <main className="main">
        <section id="home" className="home-section section">
          {/* Intro */}
          <div className="container section-title" data-aos="fade-up">
            <h1>Joel Chacon Castillo</h1>
            <h2>Software Engineer | AI Researcher | Full-Stack Developer | ex-Oracle</h2>
            <p>Guanajuato, Mexico</p>
          </div>

          {/* Contact */}
          <div className="container contact-info" data-aos="fade-up">
            <h3>Contact</h3>
            <ul>
              <li>Email: <a href="mailto:joelchaconcastillo@gmail.com">joelchaconcastillo@gmail.com</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/joel-chaconcastillo-351bb4194" target="_blank" rel="noopener noreferrer">linkedin.com/in/joel-chaconcastillo</a></li>
              <li>LeetCode: <a href="https://leetcode.com/u/joelchacon/" target="_blank" rel="noopener noreferrer">leetcode.com/u/joelchacon</a></li>
            </ul>
          </div>

          {/* Top Skills */}
          <div className="container skills" data-aos="fade-up">
            <h3>Top Skills</h3>
            <p>LangChain, Agentic AI Development, Software Architecture</p>
          </div>

          {/* Highlight Certifications */}
          <div className="container certifications" data-aos="fade-up">
            <h3>Certifications</h3>
            <ul>
              <li>Meta React Specialization</li>
              <li>Oracle Cloud Infrastructure 2024</li>
              <li>Certified AI Foundations Associate</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StarterPage;
