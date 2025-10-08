// /src/hooks/useSwiper.js
import { useEffect } from 'react';
import Swiper from 'swiper';

/**
 * Custom hook to initialize Swiper sliders
 * @param {string} selector - The selector for the Swiper container(s)
 */
export default function useSwiper(selector = '.init-swiper') {
  useEffect(() => {
    const swiperElements = document.querySelectorAll(selector);
    if (!swiperElements.length) return;

    const swipers = [];

    swiperElements.forEach((swiperEl) => {
      try {
        // Get config from the DOM element if needed
        let config = {};
        const configEl = swiperEl.querySelector('.swiper-config');
        if (configEl) {
          try {
            config = JSON.parse(configEl.innerHTML.trim());
          } catch (err) {
            console.warn('Invalid Swiper config JSON:', err);
          }
        }

        // Initialize Swiper
        const swiperInstance = new Swiper(swiperEl, config);
        swipers.push(swiperInstance);
      } catch (err) {
        console.error('Failed to initialize Swiper:', err);
      }
    });

    // Cleanup on unmount
    return () => {
      swipers.forEach((s) => s.destroy(true, true));
    };
  }, [selector]);
}
