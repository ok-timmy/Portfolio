import styles from "../styles/footer.module.css";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, display: "content" }}
      transition={{ duration: 2, delay: 3 }}
      className={styles.footer}
    >
      Built by Timmy Using NextJS Copyright
    </motion.div>
  );
}

export default Footer;
