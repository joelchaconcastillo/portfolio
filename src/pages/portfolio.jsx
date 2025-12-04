import React from "react";

// ✅ Custom hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

import Layout from "../components/Layout";

const Portfolio = () => {
  // Initialize all the hooks
  useAOS({ duration: 800, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <div className="portfolio-page">
      <Layout>

      <main className="main">
        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container">
            <div
              className="isotope-layout"
              data-default-filter="*"
              data-layout="masonry"
              data-sort="original-order"
            >
              <ul
                className="portfolio-filters isotope-filters"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Card</li>
                <li data-filter=".filter-branding">Web</li>
              </ul>

              <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                {/* Project cards removed from this page. Projects are shown on the Home page Projects section. */}
                <div className="col-12">
                  <p className="text-slate-700 dark:text-[#92adc9]">Project thumbnails have been removed from this page. See the Projects section on the home page for featured work.</p>
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

export default Portfolio;
