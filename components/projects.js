import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";
import ecommerce_app from "../public/timshop.jpg";
import weather_app from "../public/weather-app.jpg";
import todo_app from "../public/todos.jpg";
import note_app from "../public/note-app.jpg";
import Link from "next/link";
// import { gsap } from "gsap";
// import  {ScrollTrigger}  from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

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

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const revealRefs = useRef([]);
  revealRefs.current = [];

  //   useEffect(() => {

  //     revealRefs.current.forEach((el, index) => {

  //         gsap.fromTo(el, {
  //             autoAlpha: 0
  //         }, {
  //             duration: 1,
  //             autoAlpha: 1,
  //             ease: 'none',
  //             scrollTrigger: {
  //                 id: `section-${index+1}`,
  //                 trigger: el,
  //                 start: 'top center+=100',
  //                 toggleActions: 'play none none reverse'
  //             }
  //         });

  //     });

  // }, []);

  return (
    <>
      <section className={styles.project__page} id={"Projects"}>
        <h3 className={styles.project__header}>My Projects</h3>

        <p className={styles.project__subheader}>
          Here is a List of Some awesome projects I have built in the past
        </p>
        <div className={styles.projectdiv}>
          {projectsList.map((p) => {
            return (
              <div
                key={p.name}
                ref={addToRefs}
                className={styles.project__card}
              >
                <div className={styles.project__name}>
                  <div className={styles.project__name__normal}>{p.name}</div>
                  <div className={styles.project__name__hover}>{p.name}</div>
                </div>
                <p>{p.description}</p>
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
