import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../../../data/personalInfo';
import styles from './ContactInfo.module.css';

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: personalInfo.phone,
    link: `tel:${personalInfo.phone}`
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: personalInfo.location,
    link: null
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/louise',
    link: personalInfo.linkedin
  }
];

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h3 className={styles.title}>Get In Touch</h3>
      <p className={styles.subtitle}>
        Feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>

      <div className={styles.infoList}>
        {contactItems.map((item, index) => {
          const Icon = item.icon;
          const content = (
            <>
              <div className={styles.iconWrapper}>
                <Icon className={styles.icon} />
              </div>
              <div className={styles.details}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
              </div>
            </>
          );

          return item.link ? (
            <a
              key={index}
              href={item.link}
              className={styles.infoItem}
              target={item.label === 'LinkedIn' ? '_blank' : undefined}
              rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            >
              {content}
            </a>
          ) : (
            <div key={index} className={styles.infoItem}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
