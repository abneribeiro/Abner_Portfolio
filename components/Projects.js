import { useState, useEffect } from 'react';
import Project from './Project';
import styles from '../styles/Projects.module.css';


function Projects() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('/assets/data.json')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);
  
    return (
      <div className={styles.container}>
        {data.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    );
  }

  export default Projects;