import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../../../data/personalInfo';
import { useScrollTo } from '../../../hooks/useScrollTo';
import Button from '../../common/Button/Button';
import styles from './Home.module.css';

const Home = () => {
  const scrollToSection = useScrollTo(0);

  return (
    <section id="home" className={styles.home}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.greeting}>HI THERE!</h1>
          <h2 className={styles.name}>
            I'M <span className={styles.highlight}>{personalInfo.name.toUpperCase()}</span>
          </h2>

          <div className={styles.titleWrapper}>
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'React Developer',
                2000,
                'Web Developer',
                2000,
              ]}
              wrapper="h3"
              speed={50}
              className={styles.title}
              repeat={Infinity}
            />
          </div>

          <p className={styles.tagline}>{personalInfo.tagline}</p>

          <div className={styles.cta}>
            <Button
              onClick={() => scrollToSection('contact')}
              size="large"
            >
              What About Me?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
