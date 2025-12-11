import React from 'react';
import { aboutText, statistics } from '../../../data/about';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import StatCard from './StatCard';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <SectionTitle>About Me</SectionTitle>

        <div className={styles.content}>
          <div className={styles.textSection}>
            {aboutText.split('\n\n').map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.statsGrid}>
            {statistics.map((stat) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
