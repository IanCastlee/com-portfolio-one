import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./About.module.scss";
import { motion } from "framer-motion";
import { images } from "../../../constants/images";

function About() {
  return (
    <div className={styles.about}>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.2 }}
        className={styles.aboutImageWrapper}
      >
        <LazyLoadImage
          className={styles.aboutImg}
          src={images.aboutBgImage}
          alt="About background"
          effect="blur"
          visibleByDefault={true}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.aboutContent}
      >
        <div className={styles.titleWrapper}>
          <img className={styles.titleIcon} src={images.cameraIcon} />
          <h2>Who Im I and whats I do?</h2>
        </div>

        <p>
          Hi, my name is Martin Vegas. I am an artist and photographer.
          Sollicitudin diam vitae, amet lacus donec eu, donec vulputate duis
          nullam nulla, suscipit nulla orci, ornare maecenas eget gravida. Nemo
          enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.{" "}
          <br /> <br />
          Vivamus at nibh tincidunt, bibendum ligula id. Nemo enim ipsam
          voluptatem quiatotam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
          enim ipsam voluptatem quia voluptas enimoa.
        </p>

        <div className={styles.buttons}>
          <button>Hire Me</button>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
