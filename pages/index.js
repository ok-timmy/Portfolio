import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import About from "../components/about";
import Projects from "../components/projects";
import Contact from "../components/Contact";
import wave from "../public/Waving-Hand .png";
import Main from "../components/Main";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Timmy&apos;s Portfolio</title>
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
        animate={{ opacity: 0, display: "none",  }}
        transition={{ delay: 3, duration: 2 }}
        className={styles.p}
      >
        <motion.div
          style={{ width: "100px", margin: " 0 auto" }}
          animate={{
            rotate: [0, 24, -8, 20, 4, 10, 0]
          }}
          transition={{duration: 1, repeat: 4}}
        >
          {" "}
          <Image src={wave} alt={wave} height={100} width={100} />
        </motion.div>
        Hello There 
        {/* <br/> I am Timmy and welcome to my Portfolio */}
      </motion.div>
      
     <Main/>
      <motion.div
        initial={{
          opacity: 0,
          display: "none",
          zIndex: 10,
        }}
        animate={{ opacity: 0, display: "contents" }}
        transition={{ delay: 3, duration: 1 }}
      >
        {" "}
        <About />{" "}
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          display: "none",
          zIndex: 10,
        }}
        animate={{ opacity: 0, display: "contents" }}
        transition={{ delay: 5, duration: 1 }}
      >
        <Projects />
        <Articles/>
        <Contact />
      </motion.div>
    </>
  );
}



{/* <div>
<motion.ul
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, zIndex: 10 }}
  transition={{ delay: 4, duration: 2 }}
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
          scale: 1.2,
          color: "rgb(220, 220, 220)",
          transition: { duration: 0.5 },
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
          scale: 1.2,
          color: "#055181",
          transition: { duration: 0.5 },
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
          scale: 1.2,
          color: "#4491de",
          transition: { duration: 0.5 },
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
          scale: 1.2,
          color: "#c9510c",
          transition: { duration: 0.5 },
        }}
        className="fa fa-brands fa-github"
      ></motion.i>
    </a>
  </li>
</motion.ul>
</div> */}