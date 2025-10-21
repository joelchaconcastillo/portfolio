// ===============================
// 📄 Services.jsx
// ===============================

import React from "react";

// ✅ Custom hooks
import useAOS from "../hooks/useAOS";
import useGlightbox from "../hooks/useGlightbox";
import useMobileNav from "../hooks/useMobileNav";
import useScrollBody from "../hooks/useScrollBody";
import useScrollTop from "../hooks/useScrollTop";
import useSwiper from "../hooks/useSwiper";

import Layout from "../components/Layout";
// ✅ Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Services = () => {
  // Initialize effects
  useAOS({ duration: 1000, once: true });
  useGlightbox();
  useMobileNav();
  useScrollBody();
  useScrollTop();
  useSwiper();

  return (
    <div className="services-page">
      <main className="main">
        {/* ---------- Services Section ---------- */}
        <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>
          </div>

          <div className="container">
            <div className="row gy-4">
              {/* ---------- Service Card ---------- */}
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item item-cyan position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Nesciunt Mete</h3>
                  </a>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores.
                    Eos accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                </div>
              </div>

              {/* ---------- Swiper Section ---------- */}
              <div className="col-12 mt-5">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                >
                  <SwiperSlide>
                    <img
                      src="assets/img/service-1.jpg"
                      alt="Service 1"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="assets/img/service-2.jpg"
                      alt="Service 2"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="assets/img/service-3.jpg"
                      alt="Service 3"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Scroll Top */}
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
};

export default Services;
