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
    }, 5000); // Defina aqui o tempo em milissegundos para o cursor desaparecer (5 segundos no exemplo)

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
          <meta property="og:image" content="/ab.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
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
            <h1 className="title_home">Data Analyst</h1>
            <p className={styles.description}>
              Welcome to my data sanctuary, where numbers come alive and stories unfold. Join me on this captivating journey as we transform raw data into meaningful narratives, paving the way for a brighter future.
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

