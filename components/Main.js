import Skill from "./Skill";
import Project from "./Project"
import styles from"../styles/Main.module.css";
import data from './data' ;


function Main() {
  const cards = data.map(card=>{
    return ( <Project
      key={card.id}
      {...card}
     />);
  });
  return (
    <div className={styles.main_container}>
      <div className={styles.about} id="about">
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Hi there, I'm Abner. <br /> Since I was a child I always liked music and technology, so I learned to play some musical instruments and learned programming. My first
          experience with programming was when I was 14, I started learning programming logic then Java,
          years later, I decided to try learning JavaScript. It was a radically
          different experience, I built my first
          <strong> Hello World</strong> in Javascript.
        </p>
        <p className={styles.text}>Since then, I've been honing my skills in Web Development.</p>
      </div>
      <div id="skills" className={styles.skills}>
        <h1 className={styles.title}>My Skills</h1>
        <div className={styles.skill_container}>
          <p className={styles.text}>
            I've taken a number of online courses such, 
            <strong> The Complete javascript Course</strong>,
            <strong> React: the Complete Guide </strong>, and also learned about databases, and although I have some knowledge about backend at the moment I'm more focused on frontend.
          </p>
        </div>
        <div className={styles.data_skill}>
          <Skill name="HTML5" />
          <Skill name="CSS3" />
          <Skill name="Javascript ES6 " />
          <Skill name="React" />
          <Skill name="Node JS" />
          <Skill name="Git" />
          <Skill name="Express" />
          <Skill name="MongoDB" />
          <Skill name="MySQL" />
        </div>
      </div>

      <div id="project" className={styles.project_container}>
        <h1 className={styles.title}>What I've been working on </h1>
        <p className={styles.text}>I like to dedicate a part of my time in projects, which helps me to overcome my challenges, to learn from my mistakes and to implement what I learn.</p>
        <p className={styles.text}><strong>I'll be updating with other projects.</strong> You can find source code of all projects on my <a href="https://github.com/abneribeiro">GitHub</a>. </p>
        <p className={styles.text}>Take a look at some my projects I've dedicated my time to.</p>
        <div className={styles.projects_section}>
            {cards}
        </div>
      </div>

    </div>
  );
}

export default Main;
