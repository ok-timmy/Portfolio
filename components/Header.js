import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <motion.div
      initial={{ y: "-100vh" }}
      animate={{ y: "0" }}
      transition={{ delay: 4, duration: 2 }}
      className={styles.header__div}
    >
      <nav className={styles.nav__wrapper}>
        <div id="navBackgroundDemo1" className={styles.nav}>
          <div className={styles.left}>
            <Link href={"/"}>
              <a className="navbar-item">Home</a>
            </Link>
          </div>

          <div className={styles.right}>
            <Link
              href={
                "https://docs.google.com/document/d/1-a0uXiqhcoPKQCKQE63t_GD0J0BQPKQfuCf907I9Ra4/edit"
              }
            >
              <a className={styles.link}>Resume</a>
            </Link>
            <Link href={"#About"} passHref>
              <a className={styles.link}>About</a>
            </Link>
            <Link href={"#Projects"} passHref>
              <a className={styles.link}>Projects</a>
            </Link>
            <Link href={"#Contact"} passHref>
              <a className={styles.link}>Contact</a>
            </Link>
          </div>
          <div className={styles.menu}>
            <input
              type="checkbox"
              className={styles.menu__checkbox}
              id="menu_checkbox"
            ></input>
            <label htmlFor="menu_checkbox" className={styles.menu__label}>
              <div className={styles.menu__text__bar}></div>
            </label>

            <nav className={styles.menu__nav__items}>
              <ul className={styles.menu__nav__items__list}>
                <li>
                  <Link href={"#Projects"} className={styles.menu__tab}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href={"#About"} className={styles.menu__tab}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"#Contact"} className={styles.menu__tab}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                   href= "https://docs.google.com/document/d/1-a0uXiqhcoPKQCKQE63t_GD0J0BQPKQfuCf907I9Ra4/edit"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.header__menu__tab}
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </nav>
    </motion.div>
  );
}

export default Header;
