import styles from "../styles/Footer.module.css";

import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.social_container}>
          <a
            href="https://www.instagram.com/abneribeiro__"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className={styles.social_link} />
          </a>
          <a
            href="https://github.com/abneribeiro"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.social_link} />
          </a>
          <a
            href="https://twitter.com/@abneribeiro_"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className={styles.social_link} />
          </a>
          <a
            href="https://www.linkedin.com/in/abner-ribeiro-747450207"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.social_link} />
          </a>
        </div>
        <p className={styles.footer__copy}>
          &#169; 2022 AbnerRibeiro. All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
