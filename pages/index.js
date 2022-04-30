import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Ok_Timmy Portfolio Website" />
        <link rel="icon" href="/tim-logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className={styles.body}>
        <div>
          <p>Hello There</p>
          <h2>I am Timmy</h2>
          <h4>Frontend Developer</h4>
          <p></p>
        </div>

      <section className="contact-me">
        <h2>Get In Touch</h2>
        <div>
          <p>
            I would love to connect with you. My inbox is always open, Feel free
            to contact me anytime if you have any question or about relevant job
            updates
          </p>
          <ul>
            <li>
              <Link href="mailto:oktimmy45@gmail.com" passHref>
                <a>
                  <i className="fa fa-solid fa-envelope"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/Ok_Timmy">
                <a target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-brands fa-twitter"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="www.linkedin.com/in/okunola-timilehin-37aa101a0">
                <a target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-brands fa-linkedin"></i>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/ok-timmy?tab=repositories">
                <a target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-brands fa-github"></i>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      </div>
    </>
  );
}
