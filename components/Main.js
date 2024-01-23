import Lottie from "lottie-react";
import animation from "../public/assets/animation.json";
import styles from "../styles/Main.module.css";

function Main() {
  return (
    <div className={styles.container}>
      <div className={`${styles.flexItem} ${styles.content}`}>
        <h1> I'm Abner</h1>
        <p className={styles.lead}>Backend Developer</p>
        <p>Seasoned backend developer crafting high-performance solutions with precision and a commitment to technical excellence.</p>
        <a className={styles.emailButton} href="mailto:example@example.com">Get in touch</a>
      </div>
      <div className={`${styles.flexItem} ${styles.animation}`}>
        <Lottie className={styles.animationContainer} animationData={animation} />
      </div>
    </div>
  );
}

export default Main;