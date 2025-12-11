import { useCallback } from 'react';

/**
 * Custom hook to provide smooth scroll to section functionality
 * @param {number} offset - Offset from top (to account for fixed headers)
 * @returns {Function} - Function to scroll to a section by ID
 */
export const useScrollTo = (offset = 0) => {
  const scrollToSection = useCallback((sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const sectionTop = section.offsetTop - offset;

      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  }, [offset]);

  return scrollToSection;
};
