import React from 'react';
import { projects, projectTiers } from '../../../data/projects';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <SectionTitle>Portfolio</SectionTitle>

        {projectTiers.map((tier) => {
          const tierProjects = projects.filter((project) => project.tier === tier);
          if (tierProjects.length === 0) return null;

          return (
            <div key={tier} className={styles.tierGroup}>
              <h3 className={styles.tierTitle}>{tier}</h3>
              <div className={styles.projectsGrid}>
                {tierProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
