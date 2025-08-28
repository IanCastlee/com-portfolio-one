import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import styles from "./ViewShotDetails.module.scss";

function ViewShotDetails({ closeModal, details }) {
  console.log(details);

  return (
    <motion.div
      onClick={closeModal}
      className={styles.backdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={styles.modal}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <LazyLoadImage
          className={styles.image}
          src={details.wImage}
          effect="blur"
          width="100%"
        />

        <div className={styles.details}>
          <h3>{details.title}</h3>
          <span className={styles.category}>
            <span>Category:</span>
            {details.category}
          </span>
          <p>{details.desc}</p>

          <span className={styles.light}>{details.camera}</span>
          <span className={styles.light}>
            <span>Date Captured:</span>
            {details.date}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ViewShotDetails;
