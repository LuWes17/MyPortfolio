import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <SectionTitle>Contact</SectionTitle>

        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <ContactInfo />
          </div>

          <div className={styles.rightColumn}>
            <ContactForm />
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Thanks for visiting! Looking forward to hearing from you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
