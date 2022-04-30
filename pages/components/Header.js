import Link from "next/link";
import styles from "../../styles/header.module.css"

function Header() {
  return (
    <div>
      <nav className={styles.nav__wrapper}>
        <div id="navBackgroundDemo1" className={styles.nav}>
          <div className={styles.left}>
            <Link href={"/"}>
              <a className="navbar-item">Home</a>
            </Link>
          </div>

          <div className={styles.right}>
                <Link href={"/abour"}>
                  <a className={styles.link}>Resume</a>
                </Link>
                <Link href={"/about"}>
                  <a className={styles.link}>About</a>
                </Link>
                <Link href={"/contact"}>
                  <a className={styles.link}>Contact</a>
                </Link>  
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
