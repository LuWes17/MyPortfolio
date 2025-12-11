import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import SocialBar from '../SocialBar/SocialBar';
import styles from './Layout.module.css';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT ME' },
  { id: 'resume', label: 'RESUME' },
  { id: 'portfolio', label: 'PORTFOLIO' },
  { id: 'contact', label: 'CONTACT' }
];

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar sections={sections} />
      <main className={styles.mainContent}>
        {children}
      </main>
      <SocialBar />
    </div>
  );
};

export default Layout;
