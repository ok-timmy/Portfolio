import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../styles/projects.module.css";
import ecommerce_app from "../public/timshop.jpg"
import weather_app from '../public/weather-app.jpg';
import todo_app from '../public/todos.jpg';
import note_app from '../public/note-app.jpg'
import Link from "next/link";

export default function projectsPage() {
  return (
    <>
    <Head>
        <title>My Projects</title>
        <meta name="description" content="Ok_Timmy Portfolio Website" />
        <link rel="icon" href="/tim-logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>


    <section className={styles.project__page}>
      <h3 className={styles.project__header}>My Projects</h3>

      <p>Here is a List of Some awesome projects I have built in the past</p>
      <div>
        <motion.card initial={{x:"-200vw"}} animate={{x:"0"}} transition={{delay:1.5}}
          className={styles.project__card}
        >
          <div className={styles.project__left}>
              <Image src={ecommerce_app} alt='ecommerce_app' className={styles.project__image}/>
          </div>
          <div className={styles.project__right}>
            <h3 >Ecommerce Store</h3>
            <p>An Ecommerce Store integrated with Stripe Payment gateway</p>
            <p>Built with</p> 
            <ul className={styles.stack__list}>
                <li className={styles.listed__item}> ReactJS</li>
                <li className={styles.listed__item}>Material UI</li>
                <li className={styles.listed__item}>React Bootstrap</li>
                <li className={styles.listed__item}>CommerceJS</li>
                <li className={styles.listed__item}>Stripe</li>
            </ul>
            <div>
              <span>
                <Link href={'https://www.timshop.netlify.app'} passHref target='_blank'>
                  <i className="fa fa-light fa-link">Link  </i>
                </Link>
              </span>
              <span>
                <Link href="https://github.com/ok-timmy/Ecommerce-store" passHref >
                  <i target='_blank' className="fa fa-brands fa-github">github</i>
                </Link>
              </span>
            </div>
          </div>
        </motion.card>

        <motion.card initial={{x:"200vw"}} animate={{x:"0"}} transition={{delay:1.5}}
            className={styles.project__card}
          >
            <div className={styles.project__left}>
              <Image src={todo_app} alt="todo_app" className={styles.project__image}/>
            </div>
            <div className={styles.project__right}>
              <h3>Todo App</h3>
              <p>
                An App built with Javascript that allows users create their
                todos and also mark it as done when they complete their task
              </p>
              <div>
                <Link href="https://timmy-todo.netlify.app/" passHref
                  ><a 
                    ><i className="fa fa-light fa-link"></i></a
                ></Link>
                <Link href="https://github.com/ok-timmy/Todo-app" passHref
                  ><a 
                    ><i className="fa fa-brands fa-github"></i></a
                ></Link>
              </div>
            </div>
          </motion.card>
          <motion.card initial={{x:"-200vw"}} animate={{x:"0"}} transition={{delay:1.5}}
            className={styles.project__card}
          >
            <div className={styles.project__left}>
              <Image src={weather_app} alt="weather_app" className={styles.project__image}/>
            </div>
            <div className={styles.project__right}>
              <h3>Weather App</h3>
              <p>
                A simple Weather App built with React JS and OpenWeatherMap API
              </p>
              <div>
                <Link href="https://timmy-weather.netlify.app/" passHref
                  ><a 
                    ><i className="fa fa-light fa-link"></i></a
                ></Link>
                <Link href="https://github.com/ok-timmy/Notes-App" passHref
                  ><a 
                    ><i className="fa fa-brands fa-github"></i></a
                ></Link>
              </div>
            </div>
          </motion.card>

          <motion.card initial={{x:"-200vw"}} animate={{x:"0"}} transition={{delay:1.5}}
            className={styles.project__card}
          >
            <div className={styles.project__left}>
              <Image src={note_app} alt='note_app' className={styles.project__image}/>
            </div>
            <div className={styles.project__right}>
              <h3>Note App</h3>
              <p>
                An App where users can sign up and sign in and create, update
                and delete amazing notes written by them
              </p>
              <p>Built with</p>
              <ul className={styles.stack__list}>
                <li className={styles.listed__item}> ReactJS</li>
                <li className={styles.listed__item}>Tailwind CSS</li>
                <li className={styles.listed__item}>NodeJS</li>
                <li className={styles.listed__item}>ExpressJS</li>
                <li className={styles.listed__item}>MongoDB</li>
            </ul>
              <div>
                <Link href="https://timmy-notes.netlify.app/" passHref
                  ><a 
                    ><i className="fa fa-light fa-link"></i></a
                ></Link>
                <Link href=""
                  ><a ><i className="fa fa-brands fa-github"></i></a
                ></Link>
              </div>
            </div>
          </motion.card>
      </div>

      <div>
          <p>Want To Check Out More Projects?</p>
          <p>Feel Free to Check My GitHub Repo</p>
          <Link href={'https://www.github.com/ok-timmy'} passHref><a> GitHub</a></Link>
      </div>
    </section>
    </>
  );
}
