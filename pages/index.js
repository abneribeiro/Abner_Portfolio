import Head from "next/head";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <section id="home" className={styles.section}>
        <Head>
          <title>AbneRibeiro</title>
          <meta
            name="description"
            content="Introduction and summary of Abner Ribeiro projects. Web developer"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.home_container}>
          <div className={styles.home_content}>
            <p className={styles.hi}>Hi, my name is</p>
            <h1 className="title_home bar_home">
              <span>
                <Typewriter
                  loop={2}
                  cursor
                  cursorStyle="|"
                  typeSpeed={200}
                  deleteSpeed={100}
                  delaySpeed={1000}
                  words={["Abner Ribeiro"]}
                />
              </span>
            </h1>
            <h1 className="title_home">Front End Developer</h1>
            <p className={styles.description}>
              I love building websites, improving my skills by learning from
              more experienced people and sharing what I know.
            </p>

            <a
              href="mailto:eliasabner38@gmail.com"
              className={styles.touch_link}
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      <Main />
    </>
  );
}
