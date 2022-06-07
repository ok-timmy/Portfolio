import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";
import ecommerce_app from "../public/timshop.jpg";
import weather_app from "../public/weather-app.jpg";
import todo_app from "../public/todos.jpg";
import note_app from "../public/note-app.jpg";
import Link from "next/link";

const projectsList = [
  {
    name: "Ecommerce Store",
    description: "An Ecommerce Store integrated with Stripe Payment gateway",
    stackUsed: [
      "React",
      "Material UI",
      "React Bootstrap",
      "CommerceJS",
      "Stripe",
    ],
    githubLink: "https://github.com/ok-timmy/Ecommerce-store",
    liveLink: "https://www.timshop.netlify.app",
    image: ecommerce_app,
  },
  {
    name: "Todo App",
    description:
      "An App built with Javascript that allows users create their todos and also mark it as done when they complete their task",
    stackUsed: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/ok-timmy/Todo-app",
    liveLink: "https://timmy-todo.netlify.app/",
    image: todo_app,
  },
  {
    name: " Weather App",
    description:
      " A simple Weather App where visitors can check the weather conditions of any location in the world",
    stackUsed: ["ReactJS", "CSS", "OpenWeatherMap API"],
    githubLink: "https://github.com/ok-timmy/Notes-App",
    liveLink: "https://timmy-weather.netlify.app/",
    image: weather_app,
  },
  {
    name: "Note App",
    description:
      " An App where users can sign up and sign in and create, update and delete amazing notes written by them",
    stackUsed: [
      "ReactJS",
      "Tailwind CSS",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
    ],
    githubLink: "https://github.com/ok-timmy/Notes-App",
    liveLink: "https://timmy-notes.netlify.app/",
    image: note_app,
  },
];

export default function Projects() {
  const fade = {
    y: [50, 0],
    opacity: [0, 1],
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  };
  const revealer = {
    backgroundColor: "rgba(72, 72, 235, 0.3)",
    width: ["0%", "100%", "0%"],
    right: ["100%", "0%", "100%"],
    transition: {
      delay: 0,
      duration: 1.5,
    },
  };

  return (
    <>
      <section className={styles.project__page}>
        <h3 className={styles.project__header}>My Projects</h3>

        <p className={styles.project__subheader}>
          Here is a List of Some awesome projects I have built in the past
        </p>
        <div>
          {projectsList.map((p) => {
            return (
              <div className={styles.projectdiv} key={p.name}>
              <motion.card
              initial={{ y: 50, opacity: 0}}
                whileInView={fade}
                // animate={{ x: "0" }}
                // transition={{ delay: 1, duration: 1.5, stiffness: 100 }}
                className={styles.project__card}
               
              >
                <div className={styles.project__left}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    responsive={"100"}
                    className={styles.project__image}
                  />
                </div>
                <div className={styles.project__right}>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <p>Built with</p>
                  <ul className={styles.stack__list}>
                    {p.stackUsed.map((s) => {
                      return (
                        <li className={styles.listed__item} key={s}>
                          {" "}
                          {s}
                        </li>
                      );
                    })}
                  </ul>
                  <div>
                    <span>
                      <a
                        href={p.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.i
                          whileHover={{
                            scale: 1.5,
                            originX: 0,
                            color: "rgba(72, 72, 235, 0.6)",
                            transition: { duration: 1 },
                          }}
                          className={`fa fa-light fa-link ${styles.link__icon}`}
                        ></motion.i>
                      </a>
                    </span>
                    <span>
                      <a
                        href={p.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.i
                          whileHover={{
                            scale: 1.5,
                            originX: 0,
                            color: "#c9510c",
                            transition: { duration: 1 },
                          }}
                          className={`fa fa-brands fa-github  ${styles.link__icon}`}
                        ></motion.i>
                      </a>
                    </span>
                  </div>
                </div>
              </motion.card>
                <motion.div
                  className={styles.projectdiv__revealer}
                  whileInView={revealer}
                  initial={{ width: "0%", right: "100%" }}
                ></motion.div>
              </div>
            );
          })}
        </div>

        <div>
          <p className={styles.advice}>
            Check Out More Projects on My Repo on{" "}
            <Link href={"https://www.github.com/ok-timmy"} passHref>
              <button data-text="Awesome" className={styles.button}>
                <span className={styles.actual__text}>&nbsp;GitHub&nbsp;</span>
                <span className={styles.hover__text} aria-hidden="true">
                  &nbsp;GitHub&nbsp;
                </span>
              </button>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
