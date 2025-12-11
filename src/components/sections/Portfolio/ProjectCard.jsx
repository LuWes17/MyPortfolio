import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import Card from '../../common/Card/Card';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <div ref={ref} className={`${styles.projectCardWrapper} ${isVisible ? 'scale-in' : ''}`}>
      <Card hover className={styles.projectCard}>
        <div className={styles.imageWrapper}>
          <img
            src={project.images[0]}
            alt={project.title}
            className={styles.image}
          />
          <div className={styles.overlay}>
            <div className={styles.links}>
              {project.github && (
                <a
                  href={project.github}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Demo"
                  title="View Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>

          <div className={styles.tags}>
            {project.tags.slice(0, 4).map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>

          <p className={styles.description}>{project.description}</p>

          {project.features && project.features.length > 0 && (
            <div className={styles.features}>
              <strong className={styles.featuresTitle}>Key Features:</strong>
              <ul className={styles.featureList}>
                {project.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.footer}>
            <span className={styles.status}>{project.status}</span>
            <span className={styles.period}>{project.period}</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
