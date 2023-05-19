import styles from "../styles/Main.module.css";
import Project from "./Project"
import data from './data';

function Main() {
  const cards = data.map(card => {
    return (<Project
      key={card.id}
      {...card}
    />);
  });
  return (
    <div className={styles.main_container}>
      <div className={styles.about} id="about">
        <h1 className={styles.title}>About</h1>
        <p className={styles.text}>
          Hi there, I&apos;m Abner. <br /> Since I was a child, I&apos;ve always had a passion for music and technology. I learned to play musical instruments and became interested in programming at a young age. My first programming experience was when I was 14, diving into programming logic and later exploring Java. Years later, I decided to delve into JavaScript, which provided a completely different experience. I still remember the excitement of building my first &quot;Hello World&quot; program in JavaScript and witnessing my code come to life.
        </p>
        <p className={styles.text} >From that moment on, my journey in web development began. I became obsessed with honing my skills in this field. Learning HTML, CSS, and JavaScript became my primary focus, and I started building interactive websites and applications. Each completed project filled me with satisfaction and fueled my desire to explore further.</p>
      <p className={styles.text} >However, my curiosity didn&apos;t stop there. I decided to expand my programming knowledge and venture into the realm of data analysis. That&apos;s when I delved into the world of Python. Learning Python opened up a new realm of possibilities for me. I started exploring data analysis libraries such as Pandas and NumPy, and discovered the magic of extracting valuable insights from data.</p>

      <p className={styles.text} >Since then, I&apos;ve been dedicated to improving my data analysis skills. I&apos;ve learned about data visualization, statistical modeling, and machine learning. Each new data analysis project I undertake allows me to dive into a fascinating world, where I can explore patterns, identify insights, and make informed decisions based on data.</p>


       <p className={styles.text}>This journey of combining my passion for music and technology has been incredibly rewarding. Every new challenge I face and every achievement I make inspires me to continue learning and growing as both a developer and a data analyst. I&apos;m excited to see how I can further explore the intersection of music, technology, and data analysis to create unique and impactful experiences..</p>
      </div>
      <div id="skills" className={styles.skills}>
        <h1 className={styles.title}>Expertise in Data Analysis</h1>
        <div className={styles.skill_container}>
          <div className="container">
            <div className="skill">
              <h3 className="skill-title">Python</h3>
              <p className="skill-description">
                Proficient in Python for <strong>data manipulation</strong>, <strong>cleaning</strong>, <strong>visualization</strong>, and <strong>statistical modeling</strong>. Utilize libraries like <strong>NumPy</strong>, <strong>SciPy</strong>, and <strong>scikit-learn</strong> for advanced algorithms and rigorous analyses.
              </p>
            </div>

            <div className="skill">
              <h3 className="skill-title">Pandas</h3>
              <p className="skill-description">
                Skilled in using <strong>Pandas</strong> for <strong>data manipulation</strong>, <strong>aggregation</strong>, <strong>filtering</strong>, and <strong>transformation</strong>. Excel at <strong>exploratory data analysis</strong> and efficient handling of large datasets.
              </p>
            </div>

            <div className="skill">
              <h3 className="skill-title">SQL</h3>
              <p className="skill-description">
                Strong command of <strong>SQL</strong> for <strong>extracting</strong>, <strong>transforming</strong>, and <strong>loading data</strong> from relational databases. Craft optimized queries for <strong>joining tables</strong>, <strong>filtering data</strong>, and deriving meaningful information.
              </p>
            </div>

            <div className="skill">
              <h3 className="skill-title">Data Visualization</h3>
              <p className="skill-description">
                Experienced in creating impactful visualizations using <strong>Matplotlib</strong>, <strong>Seaborn</strong>, and <strong>Plotly</strong>. Communicate key patterns, trends, and relationships in data effectively.
              </p>
            </div>

            <div className="skill">
              <h3 className="skill-title">Statistical Analysis</h3>
              <p className="skill-description">
                Proficient in <strong>hypothesis testing</strong>, <strong>regression analysis</strong>, and <strong>time series analysis</strong>. Extract valuable insights and support evidence-based decision-making.
              </p>
            </div>

            <div className="skill">
              <h3 className="skill-title">Machine Learning</h3>
              <p className="skill-description">
                Solid understanding of <strong>machine learning algorithms</strong> for <strong>classification</strong>, <strong>regression</strong>, <strong>clustering</strong>, and <strong>dimensionality reduction</strong>. Develop <strong>predictive models</strong> for actionable intelligence.
              </p>
            </div>

            <div className="conclusion">

              <p className="conclusion-description">
                With expertise in <strong>Python</strong>, <strong>Pandas</strong>, <strong>SQL</strong>, and more, I offer data analysis solutions that empower businesses to uncover insights and make informed decisions. Reach out to me through the provided contact details to leverage my skills and unlock the potential of your data.
              </p>
            </div>

            <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding:0px 0px 20px 0px;
         
        }

        .section-title {
          color: #333;
          font-size: 24px;
          margin-bottom: 40px;
        }

        .skill {
          margin-bottom: 40px;
        }

        .skill-title {
          color: #333;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .skill-description {
          color: #666;
          line-height: 1.6;
          text-align: justify;
        }

        .conclusion-title {
          color: #333;
          font-size: 20px;
          margin-bottom: 10px;
          text-align: justify;
        }

        .conclusion-description {
          color: #666;
          line-height: 1.6;
        }
      `}</style>
          </div>


        </div>
      </div>

      <div id="project" className={styles.project_container}>
        <h1 className={styles.title}>Data Analysis Portfolio</h1>
        <p className={styles.text}>I like to dedicate a part of my time in projects, which helps me to overcome my challenges, to learn from my mistakes and to implement what I learn.</p>
        <p className={styles.text}>Each project holds its own special charm, offering a glimpse into the fascinating world of data analysis. From unraveling customer behavior to predicting market trends, these projects showcase the magic that happens when numbers meet curiosity.</p>
        <p className={styles.text}>
          But wait, there&apos;s more! For those eager to explore further, you can discover the intricate details and spells behind each project on GitHub. There, the enchantment continues as you dive into the realms of code and uncover the secrets behind the data transformations.</p>
        <p className={styles.text}>So, join me on this extraordinary journey of exploration and wonder. Together, we&apos;ll unlock the power of data and unleash its captivating potential. Get ready to be enchanted by the spells of analysis and the stories that data whispers.</p>
        <p>Discover the magic. Unleash the insights. Welcome to the world of my data analysis projects!</p>
        <p className={styles.text}>Take a look at some my projects I&apos;ve dedicated my time to.</p>
        <div className={styles.projects_section}>
          {cards}
        </div>
      </div>

    </div >
  );
}

export default Main;
