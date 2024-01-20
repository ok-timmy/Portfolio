import styles from "../styles/footer.module.css";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, display:"none" }}
      animate={{ opacity: 1, display: "block" }}
      transition={{ duration: 2, delay: 3 }}
      className={styles.footer}
    >
      <div>Built by Using NextJS  Timmy &copy;</div>
      <div>Reach me on LinkedIn</div>
    </motion.div>
  );
}

export default Footer;
