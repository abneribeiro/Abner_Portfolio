import React, { useState } from 'react';
import styles from '../styles/Project.module.css';


function Project({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.project}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`/images/${project.image}`} alt={project.title} />
      <a href={project.link}>{project.title}</a>
      {isHovered && <p>{project.description}</p>}
    </div>
  );
}

export default Project;