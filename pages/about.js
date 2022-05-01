import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/About.module.css";
import timmy from "../public/timmy.jpg";

export default function aboutPage() {
  return (
<>
    <Head>
        <title>About Me</title>
        <meta name="description" content="Ok_Timmy Portfolio Website" />
        <link rel="icon" href="/tim-logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
    <section className={styles.section}>
      <h2 className={styles.header}>About Timmy</h2>

      <h3>Description</h3>
      <div className={styles.about__me}>
        <motion.article initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5, delay:2}} className={styles.article}>
          <p>
            I am a young, hardworking and responsible web developer. I have been coding
            since my early teenage years. I enjoy writing code.
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
        <div className={styles.image__div}>
          <Image src={timmy} alt="timmy" className={styles.timmy__image} />
        </div>
      </div>

      <h3 className={styles.header}>My Stacks</h3>
      <div className={styles.stack__section}>
        <card className={styles.card}>
          <h2>Front-End</h2>
          <p>
            Here is a list of stack I use best for creating beautiful layout and
            designs
          </p>
          <ul className={styles.stack__list}>
            <li className={styles.listed__item}>
              <span>HTML</span>
            </li>
            <li className={styles.listed__item}>
              <span>CSS</span>
            </li>
            <li className={styles.listed__item}>
              <span>Bootstrap</span>
            </li>
            <li className={styles.listed__item}>
              <span>Bulma</span>
            </li>
            <li className={styles.listed__item}>
              <span>Tailwind CSS</span>
            </li>
            <li className={styles.listed__item}>
              <span>SCSS</span>
            </li>
            <li className={styles.listed__item}>
              <span>Material UI</span>
            </li>
            <li className={styles.listed__item}>
              <span>Semantic UI</span>
            </li>
            <li className={styles.listed__item}>
              <span>Javascript</span>
            </li>
            <li className={styles.listed__item}>
              <span>React Js</span>
            </li>
            <li className={styles.listed__item}>
              <span>Typescript</span>
            </li>
            <li className={styles.listed__item}>
              <span>NextJs</span>
            </li>
          </ul>
        </card>
        <card className={styles.card}>
          <h2>Back-End</h2>
          <p>
            On the backend, I am very much comfortable using the following
            stacks
          </p>
          <ul className={styles.stack__list}>
            <li className={styles.listed__item}>
              <span>Nodejs</span>
            </li>
            <li className={styles.listed__item}>
              <span>Expressjs</span>
            </li>
            <li className={styles.listed__item}>
              <span>Javascript</span>
            </li>
          </ul>
        </card>
        <card className={styles.card}>
          <h2>Database</h2>
          <p>Here is a list of database technologies I use effectively</p>
          <ul className={styles.stack__list}>
            <li className={styles.listed__item}>
              <span>Mongo DB</span>
            </li>
            <li className={styles.listed__item}>
              <span>Mongoose</span>
            </li>
          </ul>
        </card>
        <card className={styles.card}>
          <h2>Wordpress</h2>
          <p>
            Here is a list of technologies I use for creating amazing wordpress
            websites
          </p>
          <ul className={styles.stack__list}>
            <li className={styles.listed__item}>
              <span>Wordpress</span>
            </li>
            <li className={styles.listed__item}>
              <span>WooCommerce</span>
            </li>
            <li className={styles.listed__item}>
              <span>Elementor</span>
            </li>
            <li className={styles.listed__item}>
              <span>Divi</span>
            </li>
          </ul>
        </card>
      </div>
    </section>
    </>
  );
}
