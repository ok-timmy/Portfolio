import bootstrapLogo from "../../public/Stacks/Frontend/bootstrapLogo.png";
import bulmaLogo from "../../public/Stacks/Frontend/bulmaLogo.png";
import htmlLogo from "../../public/Stacks/Frontend/htmlLogo.png";
import cssLogo from "../../public/Stacks/Frontend/cssLogo.png";
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
import { useInView } from "react-intersection-observer";
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

const boxVariant = {
  visible: { x: 0, transition: { duration: 0.5 } },
  hidden: { x: "-1000vw" },
};

export function Frontend() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.card
    //   ref={ref}
    //   variants={boxVariant}
    //   initial="hidden"
    //   animate={control}
    //   transition={{ duration: 2, delay: 1.5 }}
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
