// /src/hooks/useScrollTop.js
import { useEffect } from 'react';

/**
 * Custom hook to handle scroll-to-top button visibility and click action
 * @param {string} selector - The selector for the scroll-top button
 */
export default function useScrollTop(selector = '.scroll-top') {
  useEffect(() => {
    const scrollTopBtn = document.querySelector(selector);
    if (!scrollTopBtn) return;

    // Toggle visibility of scroll-top button
    const toggleScrollTop = () => {
      if (window.scrollY > 100) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    };

    // Scroll smoothly to top
    const handleClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.addEventListener('scroll', toggleScrollTop);
    window.addEventListener('load', toggleScrollTop);
    scrollTopBtn.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('scroll', toggleScrollTop);
      window.removeEventListener('load', toggleScrollTop);
      scrollTopBtn.removeEventListener('click', handleClick);
    };
  }, [selector]);
}
