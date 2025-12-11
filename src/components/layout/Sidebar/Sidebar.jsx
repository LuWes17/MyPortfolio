import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { personalInfo } from '../../../data/personalInfo';
import { useAppContext } from '../../../context/AppContext';
import { useScrollTo } from '../../../hooks/useScrollTo';
import styles from './Sidebar.module.css';

const Sidebar = ({ sections }) => {
  const { activeSection, isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useAppContext();
  const scrollToSection = useScrollTo(0);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    closeMobileMenu();
  };

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <button
        className={styles.mobileToggle}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.open : ''}`}>
        {/* Profile Section */}
        <div className={styles.profile}>
          <div className={styles.profileImageWrapper}>
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className={styles.profileImage}
            />
          </div>
          <h3 className={styles.profileName}>{personalInfo.name}</h3>
          <p className={styles.profileTitle}>{personalInfo.title}</p>
        </div>

        {/* Navigation */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {sections.map((section) => (
              <li key={section.id} className={styles.navItem}>
                <button
                  className={`${styles.navLink} ${
                    activeSection === section.id ? styles.active : ''
                  }`}
                  onClick={() => handleNavClick(section.id)}
                >
                  {section.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className={styles.overlay}
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
