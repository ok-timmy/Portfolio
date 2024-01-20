import { motion } from "framer-motion";
import Image from "next/image";
import timmy from "../public/nerd-geek-img.png";
import styles from "../styles/Main.module.css";
import About from "./about";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

const Main = () => {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 5 } },
    hidden: { opacity: 0, scale: 0 },
  };

    return (
      <>
        <motion.div  className={styles.body}>
        <motion.div className={styles.main__div}>
          <motion.div className={styles.name__div}>
            <motion.div
              initial={{
                scaleY: "1",
                position:"absolute",
                // width: "200vw",
                margin: "auto auto"
              }}
              animate={{
                scale: "1",
                position: "relative",
                fontSize: "5rem",
                width: "100%",
                scaleY: "1.8"
              }}
              transition={{ delay: 3, duration: 5 }}
              className={styles.my__name}
            >
              <AnimatedTextCharacter text={"FULLSTACK DEVELOPER"}/>
              {/* <span>FULLSTACK DEVELOPER</span> */}
            </motion.div>


            {/* <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1.5 }}
              className={styles.my__desc}
            >
              && Technical Writer
            </motion.p> */}

            <AnimatedTextCharacter text={"&& Technical Writer"}/>


            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 2 }}
              className={styles.hire__me}
            >
              {/* <motion.a
                className={styles.hire__link}
                href={"mailto:oktimmy45@gmail.com"}
              > */}
                Contact Me
              {/* </motion.a> */}
            </motion.button>


          </motion.div>
        </motion.div>
      </motion.div>



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
              Leaving my clients impressed and delivering quality service are my
              biggest motivation while writing codes.
            </p>
          </motion.article>
        </motion.div>
        </>
    );
}

export default Main;