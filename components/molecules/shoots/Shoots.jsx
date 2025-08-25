import { LazyLoadImage } from "react-lazy-load-image-component";
import { shoots } from "../../../constants/shoots";
import { motion } from "framer-motion";
import styles from "./Shoots.module.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { images } from "../../../constants/images";
import { memo } from "react";

const ShootsContent = memo(({ item }) => {
  return (
    <motion.div
      key={item.id}
      src="image.jpg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={styles.card}
    >
      <LazyLoadImage src={item.wImage} alt="Picture" />
    </motion.div>
  );
});

function Shoots() {
  return (
    <div className={styles.shoot}>
      <div className={styles.titleWrapper}>
        <img className={styles.titleIcon} src={images.shootIcon} />
        <h2>My Shoots</h2>
      </div>

      <div className={styles.shootsContainerWrapper}>
        <BsArrowLeftCircle className={styles.leftButtonIcon} />

        <div className={styles.shootsContainer}>
          {shoots &&
            shoots.map((item) => <ShootsContent item={item} key={item.id} />)}
        </div>

        <BsArrowRightCircle className={styles.rightButtonIcon} />
      </div>
    </div>
  );
}

export default Shoots;
