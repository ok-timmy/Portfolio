import Link from "next/link";
import {motion} from 'framer-motion';
import styles from "../styles/header.module.css"

function Header() {
  return (
    <motion.div initial={{y:"-100vh"}} animate={{y:"0"}} transition={{delay:2, duration:2}}>
      <nav className={styles.nav__wrapper}>
        <div id="navBackgroundDemo1" className={styles.nav}>
          <div className={styles.left}>
            <Link href={"/"}>
              <a className="navbar-item">Home</a>
            </Link>
          </div>

          <div className={styles.right}>
                <Link href={"https://docs.google.com/document/d/1-a0uXiqhcoPKQCKQE63t_GD0J0BQPKQfuCf907I9Ra4/edit"}>
                  <a className={styles.link}>Resume</a>
                </Link>
                <Link href={"/about"}>
                  <a className={styles.link}>About</a>
                </Link>
                <Link href={"/projects"}>
                  <a className={styles.link}>Projects</a>
                </Link>  
          </div>
        </div>
      </nav>
    </motion.div>
  );
}

export default Header;
