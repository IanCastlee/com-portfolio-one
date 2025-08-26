import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import styles from "./ImageCard.module.scss";
import { memo } from "react";

function ImageCard({ item }) {
  return (
    <motion.div
      key={item.id}
      src="image.jpg"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={styles.card}
    >
      <LazyLoadImage
        width="100%"
        height="auto"
        effect="blur"
        src={item.wImage}
        alt="Picture"
        className={styles.wImagec}
      />
    </motion.div>
  );
}

export default memo(ImageCard);
