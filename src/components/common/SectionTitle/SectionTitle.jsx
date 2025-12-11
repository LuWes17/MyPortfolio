import React from 'react';
import styles from './SectionTitle.module.css';

const SectionTitle = ({
  children,
  subtitle = '',
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`${styles.container} ${styles[align]} ${className}`}>
      <h2 className={styles.title}>{children}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <div className={styles.underline}></div>
    </div>
  );
};

export default SectionTitle;
