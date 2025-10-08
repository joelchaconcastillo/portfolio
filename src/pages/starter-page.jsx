import React from "react";

// ✅ Custom hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

import Layout from "../components/Layout";
const StarterPage = () => {
  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <div className="starter-page-page">
      <Layout>

      <main className="main">
        <section id="starter-section" className="starter-section section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Starter Section</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>
          <div className="container" data-aos="fade-up">
            <p>Use this page as a starter for your own custom pages.</p>
          </div>
        </section>
      </main>

      </Layout>
    </div>
  );
};

export default StarterPage;
