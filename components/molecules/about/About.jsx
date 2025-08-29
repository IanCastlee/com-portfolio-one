import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./About.module.scss";
import { images } from "../../../constants/images";
import { motion } from "framer-motion";

function About() {
  return (
    <div className={styles.about}>
      {/* Image Section */}
      <motion.div
        ref={inViewRefImage}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        animate={{ opacity: isInViewImage ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={styles.aboutImageWrapper}
      >
        <img
          className={styles.aboutImg}
          src={images.aboutBgImage}
          alt="About background"
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        ref={inViewRefContent}
        initial={{ opacity: 0 }}
        viewport={{ once: true }}
        animate={{ opacity: isInViewContent ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={styles.aboutContent}
      >
        <div className={styles.titleWrapper}>
          <img
            className={styles.titleIcon}
            src={images.cameraIcon}
            alt="Camera icon"
          />
          <h2>Who Am I and What Do I Do?</h2>
        </div>

        <p>Hi, my name is Martin Vegas. I am an artist and photographer...</p>

        <div className={styles.buttons}>
          <button>Hire Me</button>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
