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
  return (
    <motion.card
            initial={{ x: "1000vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 2, delay: 2.5 }}
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