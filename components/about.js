import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/About.module.css";
import { useEffect } from "react";
import Frontend from "./Stacks/Frontend";
import Backend from "./Stacks/Backend";
import WordPress from "./Stacks/WordPress";
import Database from "./Stacks/Database";

export default function About() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <>
      <motion.section className={styles.section} id={"About"}>
        <h2 className={styles.header}>About Timmy</h2>

        <motion.div
          className={styles.about__me}
          initial={boxVariant.hidden}
          whileInView={boxVariant.visible}
        >
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className={styles.article}
          >
            <p>
              Hello World, I am a young, hardworking and responsible web
              developer. I have been coding since my early teenage years. I
              enjoy writing code.
            </p>
            <p>
              I have experience using both frontend and backend technologies to
              build beautiful, responsive and fuctional web apps
            </p>
            <p>
              Leaving my clients impressed and delivering quality service are my
              biggest motivation while writing codes.
            </p>
          </motion.article>
        </motion.div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className={styles.header}
        >
          My Stacks
        </motion.h3>
        <div className={styles.stack__section}>
          <Frontend />
          <Backend />
          <Database />
          <WordPress />
        </div>
      </motion.section>
    </>
  );
}
