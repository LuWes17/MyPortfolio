import React from 'react';
import { education } from '../../../data/education';
import { experience } from '../../../data/experience';
import { skills } from '../../../data/skills';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import TimelineItem from './TimelineItem';
import SkillCategory from './SkillCategory';
import styles from './Resume.module.css';

const Resume = () => {
  return (
    <section id="resume" className={styles.resume}>
      <div className={styles.container}>
        <SectionTitle>Resume</SectionTitle>

        {/* Education */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Education</h3>
          <div className={styles.timeline}>
            {education.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Experience</h3>
          <div className={styles.timeline}>
            {experience.map((item) => (
              <TimelineItem key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Technical Skills</h3>
          <div className={styles.skillsGrid}>
            <SkillCategory title={skills.languages.title} skills={skills.languages.items} />
            <SkillCategory title={skills.frameworks.title} skills={skills.frameworks.items} />
            <SkillCategory title={skills.tools.title} skills={skills.tools.items} />
            <SkillCategory title={skills.libraries.title} skills={skills.libraries.items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
