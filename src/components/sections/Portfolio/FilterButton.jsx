import React from 'react';
import styles from './FilterButton.module.css';

const FilterButton = ({ category, isActive, onClick }) => {
  return (
    <button
      className={`${styles.filterButton} ${isActive ? styles.active : ''}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default FilterButton;
