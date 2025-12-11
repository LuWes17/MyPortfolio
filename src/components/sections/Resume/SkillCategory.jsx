import React from 'react';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './SkillCategory.module.css';

const SkillCategory = ({ title, skills }) => {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });

  return (
    <div ref={ref} className={styles.category} data-visible={isVisible}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.skillsWrapper}>
        {skills.map((skill, index) => (
          <span key={index} className={styles.skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
