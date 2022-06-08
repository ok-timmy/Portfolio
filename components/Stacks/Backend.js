import nodejs from "../../public/Stacks/Backend/nodejs.png";
import expressjs from "../../public/Stacks/Backend/expressjs.png";
import jsLogo from "../../public/Stacks/Backend/jsLogo.png";
import { motion, useAnimation } from "framer-motion";
import styles from "../../styles/About.module.css";
import Image from "next/image";


const BackendStacks = [
    {
        name: "Node JS",
        logo: nodejs
    },
    {
        name: "Express JS",
        logo: expressjs
    },
    {
        name: "JavaScript",
        logo: jsLogo
    },
]


function Backend() {

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.card
            
      initial={boxVariant.hidden}
      whileInView={boxVariant.visible}
            className={styles.card}
          >
            <h2>Back-End</h2>
            <p>
              On the backend, I am very much comfortable using the following
              stacks
            </p>
            <ul className={styles.stack__list}>
            {
                BackendStacks.map((BackendStack)=> {
                   return <li className={styles.listed__item} key={BackendStack.name}>
                        <Image src={BackendStack.logo} alt={'logo'} width={35} height={35} />
                <span>{BackendStack.name}</span>
              </li>
                })
            }
            </ul>
          </motion.card>
  )
}

export default Backend