import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/About.module.css";
import nodejs from "../public/Stacks/Backend/nodejs.png";
import expressjs from "../public/Stacks/Backend/expressjs.png";
import jsLogo from "../public/Stacks/Backend/jsLogo.png";
import mongoDB from "../public/Stacks/Database/mongoDB.png";
import tailwindLogo from "../public/Stacks/Frontend/tailwindLogo.png";
import ReactLogo from "../public/Stacks/Frontend/ReactLogo.png";
import tsLogo from "../public/Stacks/Frontend/tsLogo.png";
import NextLogo from "../public/Stacks/Frontend/NextLogo.png";
import wordpress from "../public/Stacks/WordPress/wordpress.png";
import woocommerce from "../public/Stacks/WordPress/woocommerce.png";
import elementorlogo from "../public/Stacks/WordPress/elementorlogo.png";
import DockerLogo from "../public/Stacks/Backend/docker.png"
import KubernetesLogo from "../public/Stacks/Backend/Kubernetes.png"
import NestJSLogo from "../public/Stacks/Backend/nestjs.png"
import SolidityLogo from "../public/Stacks/Backend/solidity.png"
import PrismaLogo from "../public/Stacks/Backend/prisma-orm.png"
import { useEffect } from "react";

export default function About() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };

  const stacks = [
    {
      name: "JavaScript",
      logo: jsLogo,
    },
    {
      name: "Tailwind",
      logo: tailwindLogo,
    },
    {
      name: "Typescript",
      logo: tsLogo,
    },
    {
      name: "React",
      logo: ReactLogo,
    },
    {
      name: "Nextjs",
      logo: NextLogo,
    },
    {
      name: "NodeJS",
      logo: nodejs,
    },
    {
      name: "Express",
      logo: expressjs,
    },
    {
      name: "MongoDB",
      logo: mongoDB,
    },
    {
      name: "NestJS",
      logo: NestJSLogo,
    },
    {
      name: "Prisma",
      logo: PrismaLogo,
    },
    {
      name: "Solidity",
      logo: SolidityLogo,
    },
    {
      name: "Docker",
      logo: DockerLogo,
    },
    {
      name: "Kubernetes",
      logo: KubernetesLogo,
    },
    {
      name: "WordPress",
      logo: wordpress,
    },
    {
      name: "Elementor",
      logo: elementorlogo,
    },
    {
      name: "Woocommerce",
      logo: woocommerce,
    },
  ];

  return (
    <>
      <motion.section className={styles.section} id={"About"}>
        {/* <h2 className={styles.header}>About Timmy</h2> */}

        {/*  */}

        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className={styles.header}
        >
          My Stacks
        </motion.h3>
        <p>
          My primary stack includes React, Tailwindcss & Typescript (React +
          Nexjs on the front-end and Express/Nestjs on the back-end). I have
          listed some of the languages/tools I have used or still use below (not
          *really* including frameworks).
        </p>

        <div className={styles.stacks}>
          {stacks.map((stack) => {
            return <div key={stack.name} className={styles.listed__item}>
              <Image src={stack.logo} height={32} width={32} alt={stack.logo} style={{marginRight:"12px"}}></Image>
              <span>{stack.name}</span>
            </div>;
          })}
        </div>

        {/* <div className={styles.stack__section}>
          <Frontend />
          <Backend />
          <Database />
          <WordPress />
        </div> */}
      </motion.section>
    </>
  );
}
