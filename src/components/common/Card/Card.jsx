import React from 'react';
import styles from './Card.module.css';

const Card = ({
  children,
  variant = 'default',
  hover = false,
  className = ''
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    hover ? styles.hover : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;
