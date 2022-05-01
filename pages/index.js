import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import timmy from "../public/nerd-geek-img.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Ok_Timmy Portfolio Website" />
        <link rel="icon" href="/tim-logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <motion.div
        initial={{
          opacity: 1,
          zIndex: 10,
        }}
        animate={{ opacity: 0, display: "none" }}
        transition={{ delay: 2, duration: 1 }}
        className={styles.p}
      >
        Hello There
      </motion.div>
      <div className={styles.body}>
        <motion.div className={styles.main__div}>
          <motion.div>
            <motion.p
              initial={{
                position: "absolute",
                x: "100px",
                y: "-800px",
                fontSize: "400px",
              }}
              animate={{
                position: "relative",
                y: "0",
                x: "0",
                fontSize: "100px",
              }}
              transition={{ delay: 2, duration: 2.5 }}
              className={styles.my__name}
            >
              TIMMY
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1.1 }}
              className={styles.my__desc}
            >
              I am a Frontend Developer
            </motion.p>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 2 }}
              className={styles.hire__me}
            >
              <motion.a
                whileHover={{
                  backgroundColor: "rgb(72, 72, 235)",
                  cursor: "pointer",
                }}
                className={styles.hire__link}
              >
                Hire Me
              </motion.a>
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: "0" }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1.5, stiffness: 100 }}
          className={styles.image__div}
        >
          <Image src={timmy} alt={"Timmy"} />
        </motion.div>
      </div>
      <div>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 2 }}
          className={styles.side__nav}
        >
          <li>
            <a
              className={styles.email}
              href="mailto:oktimmy45@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.i
                whileHover={{
                  scale: 2,
                  color: "rgb(220, 220, 220)",
                  transition: { duration: 1 },
                }}
                className="fa fa-solid fa-envelope"
              ></motion.i>
            </a>
          </li>
          <li>
            <a
              className={styles.twitter}
              href="https://www.twitter.com/Ok_Timmy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.i
                whileHover={{
                  scale: 2,
                  color: "#055181",
                  transition: { duration: 1 },
                }}
                className="fa fa-brands fa-twitter"
              ></motion.i>
            </a>
          </li>
          <li>
            <a
              className={styles.linkedIn}
              href="https://www.linkedin.com/in/okunola-timilehin-37aa101a0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.i
                whileHover={{
                  scale: 2,
                  color: "#4491de",
                  transition: { duration: 1 },
                }}
                className="fa fa-brands fa-linkedin"
              ></motion.i>
            </a>
          </li>
          <li>
            <a
              className={styles.github}
              href="https://github.com/ok-timmy?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.i
                whileHover={{
                  scale: 2,
                  color: "#c9510c",
                  transition: { duration: 1 },
                }}
                className="fa fa-brands fa-github"
              ></motion.i>
            </a>
          </li>
        </motion.ul>
      </div>
    </>
  );
}
