import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

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
        animate={{ opacity: 0 }}
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
                y: "-700px",
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
          </motion.div>
          <p></p>
        </motion.div>

        <section className="contact-me">
          <div >
            <motion.ul initial={{opacity:0}} animate={{opacity:1}} transition={{delay:5, duration:2}} className={styles.side__nav}>
              <li>
                <Link href="mailto:oktimmy45@gmail.com" passHref>
                  <a>
                    <i className={`fa fa-solid fa-envelope ${styles.email}`}></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Ok_Timmy">
                  <a className={styles.twitter} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-brands fa-twitter"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="www.linkedin.com/in/okunola-timilehin-37aa101a0">
                  <a className={styles.linkedIn} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-brands fa-linkedin"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/ok-timmy?tab=repositories">
                  <a className={styles.g} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-brands fa-github"></i>
                  </a>
                </Link>
              </li>
            </motion.ul>
          </div>
        </section>
      </div>
    </>
  );
}
