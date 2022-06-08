import bootstrapLogo from "../../public/Stacks/Frontend/bootstrapLogo.png";
import bulmaLogo from "../../public/Stacks/Frontend/bulmaLogo.png";
import htmlLogo from "../../public/Stacks/Frontend/htmlLogo.png";
import cssLogo from "../../public/Stacks/Frontend/cssLogo.png";
import SCLogo from "../../public/Stacks/Frontend/SCLogo.png";
import jsLogo from "../../public/Stacks/Frontend/jsLogo.png";
import sassLogo from "../../public/Stacks/Frontend/sassLogo.png";
import tailwindLogo from "../../public/Stacks/Frontend/tailwindLogo.png";
import ReactLogo from "../../public/Stacks/Frontend/ReactLogo.png";
import tsLogo from "../../public/Stacks/Frontend/tsLogo.png";
import NextLogo from "../../public/Stacks/Frontend/NextLogo.png";
import materialui from "../../public/Stacks/Frontend/materialui.png";
import semanticui from "../../public/Stacks/Frontend/semanticui.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/About.module.css";
import { useEffect } from "react";

const FrontendStacks = [
  {
    name: "HTML",
    logo: htmlLogo,
  },
  {
    name: "CSS",
    logo: cssLogo,
  },
  {
    name: "Bootstrap",
    logo: bootstrapLogo,
  },
  {
    name: "Tailwind",
    logo: tailwindLogo,
  },
  {
    name: "Bulma",
    logo: bulmaLogo,
  },
  {
    name: "SASS",
    logo: sassLogo,
  },
  {
    name: "Material UI",
    logo: materialui,
  },
  {
    name: "Styled Components",
    logo: SCLogo,
  },
  {
    name: "Semantic UI",
    logo: semanticui,
  },
  {
    name: "JavaScript",
    logo: jsLogo,
  },
  {
    name: "Typescript",
    logo: tsLogo,
  },
  {
    name: "ReactJS",
    logo: ReactLogo,
  },
  {
    name: "Next",
    logo: NextLogo,
  },
];



export function Frontend() {
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
      <h2>Front-End</h2>
      <p>
        Here is a list of stack I use best for creating beautiful layout and
        designs
      </p>
      <ul className={styles.stack__list}>
        {FrontendStacks.map((FrontendStack) => {
          return (
            <li className={styles.listed__item} key={FrontendStack.name}>
              <Image
                src={FrontendStack.logo}
                alt={"logo"}
                height={30}
                width={30}
              />
              <span>{FrontendStack.name}</span>
            </li>
          );
        })}
      </ul>
    </motion.card>
  );
}

export default Frontend;
