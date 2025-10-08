import React from 'react';

// ✅ Import your reusable hooks
import useAOS from '../hooks/useAOS';
import useGlightbox from '../hooks/useGlightbox';
import useSwiper from '../hooks/useSwiper';
import useScrollTop from '../hooks/useScrollTop';
import useMobileNav from '../hooks/useMobileNav';
import Layout from "../components/Layout";

const PortfolioDetails = () => {
  // Initialize all vendor scripts and features declaratively
  useAOS();
  useGlightbox();
  useSwiper();
  useScrollTop();
  useMobileNav();

  return (
    <div className="portfolio-details-page">
      <Layout>
      {/* MAIN */}
      <main className="main">
        <section id="portfolio-details" className="portfolio-details section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio Details</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              {/* LEFT SIDE - IMAGE SLIDER */}
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/app-1.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/product-1.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/branding-1.jpg" alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src="/assets/img/portfolio/books-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              {/* RIGHT SIDE - PROJECT INFO */}
              <div className="col-lg-4">
                <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                  <h3>Project information</h3>
                  <ul>
                    <li><strong>Category</strong>: Web design</li>
                    <li><strong>Client</strong>: ASU Company</li>
                    <li><strong>Project date</strong>: 01 March, 2020</li>
                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                  </ul>
                </div>

                <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                  <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                  <p>
                    Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore
                    quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim.
                    Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos.
                    Sequi nulla at esse enim cum deserunt eius.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      </Layout>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>

      <div id="preloader"></div>
    </div>
  );
};

export default PortfolioDetails;
