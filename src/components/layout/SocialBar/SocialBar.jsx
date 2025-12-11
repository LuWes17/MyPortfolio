import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { socialLinks } from '../../../data/social';
import styles from './SocialBar.module.css';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: FaEnvelope,
  phone: FaPhone
};

const SocialBar = () => {
  return (
    <aside className={styles.socialBar}>
      <div className={styles.iconList}>
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.id}
              href={link.url}
              className={styles.iconLink}
              target={link.icon === 'github' || link.icon === 'linkedin' ? '_blank' : undefined}
              rel={link.icon === 'github' || link.icon === 'linkedin' ? 'noopener noreferrer' : undefined}
              aria-label={link.name}
              title={link.name}
            >
              {Icon && <Icon className={styles.icon} />}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SocialBar;
