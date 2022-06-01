import mongoDB from "../../public/Stacks/Database/mongoDB.png";
import mongoose from "../../public/Stacks/Database/mongoose.png";
import { motion, useAnimation } from "framer-motion";
import styles from "../../styles/About.module.css";
import Image from "next/image";

const DatabaseStacks = [
  {
    name: "MongoDB",
    logo: mongoDB,
  },
  {
    name: "Mongoose",
    logo: mongoose,
  },
];

function Database() {
  return (
    <motion.card
      initial={{ x: "-1000vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 2, delay: 3.5 }}
      className={styles.card}
    >
      <h2>Database</h2>
      <p>Here is a list of database technologies I use effectively</p>
      <ul className={styles.stack__list}>
        {DatabaseStacks.map((DatabaseStack) => {
          return (
            <li className={styles.listed__item} key={DatabaseStack.name}>
              <Image
                src={DatabaseStack.logo}
                alt={"logo"}
                width={35}
                height={35}
              />
              <span>{DatabaseStack.name}</span>
            </li>
          );
        })}
      </ul>
    </motion.card>
  );
}

export default Database;
