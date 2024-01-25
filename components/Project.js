import React, { useState } from "react";
import styles from "../styles/Project.module.css";

function Project({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.project} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.tools}>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.red}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.yellow}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.box} ${styles.green}`}></span>
        </div>
      </div>
      <div className={styles.card__content}>
        <img src={`/images/${project.image}`} alt={project.title} />
        <a href={project.link}>{project.title}</a>
        {isHovered && <p>{project.description}</p>}
      </div>
    </div>
  );
}

export default Project;
