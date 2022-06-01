import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/About.module.css";
// import timmy from "../public/timmy.jpg";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Frontend from "./Stacks/Frontend";
import Backend from "./Stacks/Backend";
import WordPress from "./Stacks/WordPress";
import Database from "./Stacks/Database";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function About() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);

  return (
    <>
      <motion.section
        // ref={ref}
        // variants={boxVariant}
        // initial="hidden"
        // animate={control}
        className={styles.section}
      >
        <h2 className={styles.header}>About Timmy</h2>

        <h3>Description</h3>
        <div className={styles.about__me}>
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className={styles.article}
          >
            <p>
              I am a young, hardworking and responsible web developer. I have
              been coding since my early teenage years. I enjoy writing code.
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
          {/* <div className={styles.image__div}>
          <Image src={timmy} alt="timmy" className={styles.timmy__image} />
        </div> */}
        </div>

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
