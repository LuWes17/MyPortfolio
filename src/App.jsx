import React, { useEffect } from 'react';
import { AppContextProvider, useAppContext } from './context/AppContext';
import { useScrollSpy } from './hooks/useScrollSpy';
import Layout from './components/layout/Layout/Layout';
import Home from './components/sections/Home/Home';
import About from './components/sections/About/About';
import Resume from './components/sections/Resume/Resume';
import Portfolio from './components/sections/Portfolio/Portfolio';
import Contact from './components/sections/Contact/Contact';
import styles from './App.module.css';

const sectionIds = ['home', 'about', 'resume', 'portfolio', 'contact'];

function AppContent() {
  const { setActiveSection } = useAppContext();
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    setActiveSection(activeSection);
  }, [activeSection, setActiveSection]);

  return (
    <Layout>
      <div className={styles.sections}>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </Layout>
  );
}

function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}

export default App;
