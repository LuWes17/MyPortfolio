import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import styles from './TimelineItem.module.css';

const TimelineItem = ({ item }) => {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const isEducation = item.type === 'education';
  const Icon = isEducation ? FaGraduationCap : FaBriefcase;

  return (
    <div ref={ref} className={`${styles.timelineItem} ${isVisible ? 'slide-up' : ''}`}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>

      <div className={styles.content}>
        <span className={styles.period}>{item.period}</span>
        <h3 className={styles.title}>
          {isEducation ? item.degree : item.title}
        </h3>
        {item.major && <h4 className={styles.subtitle}>{item.major}</h4>}
        <div className={styles.organization}>
          <span className={styles.company}>
            {isEducation ? item.institution : item.company}
          </span>
          <span className={styles.location}> • {item.location}</span>
        </div>

        {item.responsibilities && (
          <ul className={styles.responsibilities}>
            {item.responsibilities.map((resp, index) => (
              <li key={index} className={styles.responsibility}>
                {resp}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
