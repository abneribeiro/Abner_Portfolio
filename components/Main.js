import { useDarkModeContext } from "../context/darkModeContext";
import styles from "../styles/Main.module.css";

function Main() {
  const { isDarkMode } = useDarkModeContext()
  return (
    <div className={styles.main_container} style={{ color: isDarkMode ? '#fff' : '#000' }}>
      <div className={styles.about} id="about">
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.text}>
      Hey there, I&apos;m Abner. <br /> Ever since my childhood, I&apos;ve been passionate about the harmonies of music and the intricacies of technology. I started playing musical instruments and got intrigued by programming at an early age. My journey into coding began at 14, where I dived into programming logic and later explored Java. A few years later, I decided to venture into JavaScript, which offered a completely different and exciting experience. I still vividly recall the thrill of building my first &quot;Hello World&quot; program in JavaScript and witnessing my code come to life.
    </p>
    <p className={styles.text}> 
      From that pivotal moment, my adventure in web development took flight. I became fixated on refining my skills in this dynamic field. Learning HTML, CSS, and JavaScript became my main focus, and I started crafting interactive websites and applications. Each project completion brought a sense of accomplishment, fueling my curiosity to delve deeper.
    </p>
    <p className={styles.text}> 
      Yet, my curiosity didn&apos;t end there. I sought to broaden my programming knowledge and explore the realm of frontend development. That&apos;s when I delved into the world of modern web frameworks and libraries. Learning tools like React.js and Vue.js opened up new possibilities, allowing me to create dynamic and responsive user interfaces with ease.
    </p>
    <p className={styles.text}>
      Since then, I&apos;ve been dedicated to enhancing my frontend development skills. I&apos;ve delved into responsive design, optimized web performance, and kept pace with the evolving landscape of web technologies. Each new project pushes me to explore innovative solutions and refine my craft.
    </p>
    <p className={styles.text}>
      This journey, merging my love for music and technology, has been incredibly rewarding. Every challenge I tackle and every milestone achieved motivates me to continue evolving as a frontend developer. I&apos;m eager to explore new horizons, create engaging user experiences, and contribute to the ever-evolving world of web development.
    </p>
  </div>
  <div id="skills" className={styles.skills}>
    <h1 className={styles.title}>Expertise in Frontend Developer</h1>
    <div className={styles.skill_container}>
      <div className="container">
        <div className="skill">
          <h3 className="skill-title">HTML/CSS</h3>
            <p className="skill-description">
              As a frontend developer, I master the creation and structuring of web pages using HTML for markup and CSS for styling. I ensure that interfaces are visually appealing and responsive across different devices.
            </p>
          </div>

          <div className="skill">
            <h3 className="skill-title">JavaScript</h3>
            <p className="skill-description">
              My proficiency in JavaScript enables me to create dynamic and functional interactions. I develop scripts to manipulate the DOM, handle events, and ensure a smooth and interactive user experience.
            </p>
          </div>

          <div className="skill">
            <h3 className="skill-title">React.js</h3>
            <p className="skill-description">
              I have worked extensively with React.js to create reusable components and build scalable user interfaces. I use states and props to efficiently manage the application state.
            </p>
          </div>

          <div className="skill">
            <h3 className="skill-title">Responsive Design</h3>
            <p className="skill-description">
              I have a deep understanding of responsive design principles, using media queries and flexbox/grid to ensure that applications adapt seamlessly to different screen sizes
            </p>
          </div>

          <div className="skill">
            <h3 className="skill-title">Version Control/Git</h3>
            <p className="skill-description">
              I have a solid experience using Git for version control, efficient collaboration, and continuous integration. I am comfortable working with branches, pull requests, and conflict resolution.
            </p>
          </div>

          <div className="skill">
            <h3 className="skill-title">Web Performance Optimization</h3>
            <p className="skill-description">
              I optimize the performance of web applications by applying techniques such as lazy loading, image compression, and file minimization to ensure fast loading times.
            </p>
          </div>

          <div className="skill">
            <h3 className="skill-title">Package Managers (npm, Yarn)</h3>
            <p className="skill-description">
              I work efficiently using package managers like npm and Yarn to install, share, and manage project dependencies.
            </p>
          </div>

          <div className="skill">
            <h3 className="skill-title">RESTful APIs</h3>
            <p className="skill-description">
              I work with RESTful APIs, efficiently consuming data and integrating it into frontend applications in a scalable manner.
            </p>
          </div>

          <div className="conclusion">
            <p className="conclusion-description">
              These combined skills empower me to create modern and efficient web interfaces, providing users with an engaging and intuitive experience. I am always learning and staying abreast of the latest trends to remain updated in the dynamic world of frontend development.
            </p>
            </div>

            <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding:0px 0px 20px 0px;
         
        }

        .section-title {
          color: ${isDarkMode ? '#fff' : '#333' } ;
          font-size: 24px;
          margin-bottom: 40px;
        }

        .skill {
          margin-bottom: 40px;
        }

        .skill-title {
          color: ${isDarkMode ? '#fff' : '#333' };
          font-size: 20px;
          margin-bottom: 10px;
        }

        .skill-description {
          color: ${isDarkMode ? '#fff' : '#666' };
          line-height: 1.6;
          text-align: justify;
        }

        .conclusion-title {
          color: ${isDarkMode ? '#fff' : '#333' };
          font-size: 20px;
          margin-bottom: 10px;
          text-align: justify;
        }

        .conclusion-description {
          color: ${isDarkMode ? '#fff' : '#666' };
          line-height: 1.6;
        }
      `}</style>
          </div>


        </div>
      </div>

    </div >
  );
}

export default Main;
