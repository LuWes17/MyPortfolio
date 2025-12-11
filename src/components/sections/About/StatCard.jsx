import React from 'react';
import { FaProjectDiagram, FaBriefcase, FaUsers, FaPeopleCarry } from 'react-icons/fa';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';
import Card from '../../common/Card/Card';
import styles from './StatCard.module.css';

const iconMap = {
  project: FaProjectDiagram,
  experience: FaBriefcase,
  community: FaUsers,
  team: FaPeopleCarry
};

const StatCard = ({ value, label, description, icon }) => {
  const [ref, isVisible] = useIntersectionObserver({ freezeOnceVisible: true });
  const Icon = iconMap[icon] || FaProjectDiagram;

  return (
    <div ref={ref} className={`${styles.statCardWrapper} ${isVisible ? 'slide-up' : ''}`}>
      <Card hover className={styles.statCard}>
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
        <h3 className={styles.value}>{value}</h3>
        <h4 className={styles.label}>{label}</h4>
        <p className={styles.description}>{description}</p>
      </Card>
    </div>
  );
};

export default StatCard;
