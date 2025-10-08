// /src/hooks/useAOS.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Custom hook to initialize AOS (Animate on Scroll)
 * @param {object} options - optional AOS configuration
 */
export default function useAOS(options = { duration: 1000, once: true }) {
  useEffect(() => {
    AOS.init(options);

    // Refresh AOS on route/page changes or content updates
    AOS.refresh();

    // Optional: cleanup not strictly required for AOS
    return () => {
      // AOS doesn't provide destroy by default, but we can refresh on unmount
      AOS.refresh();
    };
  }, [options]);
}
