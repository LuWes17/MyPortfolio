import React, { useState } from 'react';
import { projects, projectCategories } from '../../../data/projects';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import FilterButton from './FilterButton';
import ProjectCard from './ProjectCard';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <SectionTitle>Portfolio</SectionTitle>

        {/* Filter Buttons */}
        <div className={styles.filters}>
          {projectCategories.map((category) => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeFilter === category}
              onClick={setActiveFilter}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
