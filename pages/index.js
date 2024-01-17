import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="home" className={styles.section}>
        <Head>
          <title>AbneRibeiro</title>
          <meta
            name="description"
            content="Discover actionable insights and unlock the full potential of your data with Data Analysis Hub. We provide cutting-edge tools and expertise to analyze, visualize, and interpret complex data sets."
          />
          <meta property="og:image" content='/images/ab.png' />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.home_container}>
          <div className={styles.home_content}>
            <p className={styles.hi}>Hi, my name is</p>
            <h1 className="title_home">
              <span>
                <Typewriter
                  loop={3}
                  cursor={showCursor} // Utiliza o estado showCursor para mostrar ou ocultar o cursor
                  cursorStyle="|"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={1000}
                  words={["Abner Ribeiro"]}
                />
              </span>
            </h1>
            <h1 className="title_home">Frontend Developer</h1>
            <p className={styles.description}>
            Turning ideas into extraordinary digital experiences
            </p>

            <a href="mailto:eliasabner38@gmail.com" className={styles.touch_link}>
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      <Main />
    </>
  );
}

