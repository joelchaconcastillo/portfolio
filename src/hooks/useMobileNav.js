// /src/hooks/useMobileNav.js
import { useEffect } from 'react';

/**
 * Custom hook to handle mobile nav toggle
 */
export default function useMobileNav() {
  useEffect(() => {
    const body = document.body;
    const toggleBtn = document.querySelector('.mobile-nav-toggle');

    if (!toggleBtn) return;

    const handleToggle = () => {
      body.classList.toggle('mobile-nav-active');
      toggleBtn.classList.toggle('bi-list');
      toggleBtn.classList.toggle('bi-x');
    };

    toggleBtn.addEventListener('click', handleToggle);

    // Handle closing mobile nav on same-page link click
    const navLinks = document.querySelectorAll('#navmenu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (body.classList.contains('mobile-nav-active')) {
          handleToggle();
        }
      });
    });

    return () => {
      toggleBtn.removeEventListener('click', handleToggle);
      navLinks.forEach(link => link.removeEventListener('click', handleToggle));
    };
  }, []);
}
