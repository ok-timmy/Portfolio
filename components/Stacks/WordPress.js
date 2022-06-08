import wordpress from "../../public/Stacks/WordPress/wordpress.png";
import woocommerce from "../../public/Stacks/WordPress/woocommerce.png";
import elementorlogo from "../../public/Stacks/WordPress/elementorlogo.png";
import diviLogo from "../../public/Stacks/WordPress/diviLogo.png";
import { motion, useAnimation } from "framer-motion";
import styles from "../../styles/About.module.css";
import Image from "next/image";

const WordPressStacks = [
  {
    name: "WordPress",
    logo: wordpress,
  },
  {
    name: "WooCommerce",
    logo: woocommerce,
  },
  {
    name: "Elementor",
    logo: elementorlogo,
  },
  {
    name: "Divi",
    logo: diviLogo,
  },
];

function WordPress() {

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
      <h2>WordPress</h2>
      <p>
        Here is a list of technologies I use for creating amazing wordpress
        websites
      </p>
      <ul className={styles.stack__list}>
        {WordPressStacks.map((WordPressStack) => {
          return (
            <li className={styles.listed__item} key={WordPressStack.name}>
              <Image
                src={WordPressStack.logo}
                alt={"logo"}
                height={35}
                width={35}
              />
              <span>{WordPressStack.name}</span>
            </li>
          );
        })}
      </ul>
    </motion.card>
  );
}

export default WordPress;
