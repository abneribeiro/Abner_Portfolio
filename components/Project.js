import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/Project.module.css";
import Image from 'next/image'

function Project(props) {
  return (
    <div className={styles.container_project}>
      <div className="container_img">

        <Image src={`/images/${props.coverImg}`} alt={props.alt} layout="fill" className="image"/>
      </div>
      <div className={styles.content_project}>
        <h2 className={styles.project_title}>{props.title}</h2>

        <p className="project_description">{props.description}</p>
        
          <a href={props.url} className={styles.link_project}>
            View Project <FaArrowRight className={styles.link_svg} />
            
          </a>

      </div>
    </div>
  );
}

export default Project;
