import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import styles from "./ImageCard.module.scss";
import { memo, useState } from "react";
import ViewShotDetails from "../viewShotDetails/ViewShotDetails";

function ImageCard({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [clickedImageDetails, setClickedImageDetails] = useState({});

  const clickImage = (item) => {
    setClickedImageDetails(item);
    setShowModal(true);
  };
  return (
    <>
      <motion.div
        key={item.id}
        src="image.jpg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.card}
      >
        <LazyLoadImage
          onClick={() => clickImage(item)}
          effect="blur"
          src={item.wImage}
          alt="Picture"
          className={styles.wImagec}
        />
      </motion.div>

      {showModal && (
        <ViewShotDetails
          closeModal={() => setShowModal(false)}
          details={clickedImageDetails}
        />
      )}
    </>
  );
}

export default memo(ImageCard);
