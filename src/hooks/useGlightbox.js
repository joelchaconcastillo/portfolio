// /src/hooks/useGlightbox.js
import { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

/**
 * Custom hook to initialize GLightbox
 * @param {object} options - GLightbox configuration object
 * @returns {GLightbox instance}
 */
export default function useGlightbox(options = { selector: '.glightbox' }) {
  useEffect(() => {
    // Initialize GLightbox
    const lightbox = GLightbox(options);

    // Cleanup function: destroy GLightbox on unmount
    return () => {
      if (lightbox) {
        lightbox.destroy();
      }
    };
  }, [options]);

  // Optionally, you could return the instance
  // return lightbox;
}
