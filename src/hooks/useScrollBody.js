// /src/hooks/useScrollBody.js
import { useEffect } from 'react';

/**
 * Custom hook to handle:
 * - Add 'scrolled' class to body when scrolling down
 * - Scroll-to-top button functionality
 */
export default function useScrollBody() {
  useEffect(() => {
    const body = document.body;
    const scrollTopBtn = document.querySelector('.scroll-top');

    if (!scrollTopBtn) return;

    // Toggle 'scrolled' class on body
    const toggleScrolled = () => {
      const header = document.querySelector('#header');
      if (!header) return;
      const sticky = header.classList.contains('scroll-up-sticky') || header.classList.contains('sticky-top') || header.classList.contains('fixed-top');
      if (!sticky) return;

      window.scrollY > 100 ? body.classList.add('scrolled') : body.classList.remove('scrolled');
    };

    // Toggle scroll-top button visibility
    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    };

    // Scroll to top
    const handleScrollTopClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.addEventListener('scroll', toggleScrolled);
    document.addEventListener('scroll', toggleScrollTop);
    window.addEventListener('load', toggleScrolled);
    window.addEventListener('load', toggleScrollTop);
    scrollTopBtn.addEventListener('click', handleScrollTopClick);

    return () => {
      document.removeEventListener('scroll', toggleScrolled);
      document.removeEventListener('scroll', toggleScrollTop);
      window.removeEventListener('load', toggleScrolled);
      window.removeEventListener('load', toggleScrollTop);
      scrollTopBtn.removeEventListener('click', handleScrollTopClick);
    };
  }, []);
}
