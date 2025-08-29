import { useState, useRef, useEffect } from "react";
import styles from "./Home.module.scss";
import { images } from "../../../constants/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaFacebookSquare, FaLinkedin, FaTiktok } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PiInstagramLogoFill } from "react-icons/pi";
import { motion } from "framer-motion";
import Header from "../../molecules/header/Header";
import { shoots } from "../../../constants/shoots";
import { RiGalleryView } from "react-icons/ri";
import ImageCard from "../../molecules/imageCard/ImageCard";
import About from "../../molecules/about/About";
import Shoots from "../../molecules/shots/Shoots";
function Home() {
  //HERO
  const [flash, setFlash] = useState(false);
  const [flashPos, setFlashPos] = useState({ top: 0, left: 0 });
  const [flashKey, setFlashKey] = useState(0);
  const wrapperRef = useRef(null);

  // const handleClick = () => {
  //   if (wrapperRef.current) {
  //     const rect = wrapperRef.current.getBoundingClientRect();
  //     const lensX = rect.left + rect.width * 0.6;
  //     const lensY = rect.top + rect.height * 0.5;

  //     setFlashPos({ top: lensY, left: lensX });
  //     setFlash(true);

  //     setTimeout(() => {
  //       setFlash(false);
  //     }, 300);
  //   }
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleClick();
  //   }, 5500);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className={styles.home}>
      <div className={styles.heroWrapper}>
        <Header />
        <div className={styles.hero}>
          <div className={styles.leftHero}>
            <h1>
              Hello, I’m{" "}
              <span
                style={{
                  color: "#000000",
                  fontSize: "60px",
                  WebkitTextStroke: "1px #ff6600",
                }}
              >
                Pio
              </span>
            </h1>

            <h2>Visual storyteller & Photographer.</h2>
            <p>
              Capturing moments that speak louder than words. Turning everyday
              scenes into timeless stories. <br />
              <br />
              Let’s create something unforgettable together.
            </p>

            <div className={styles.socialLinks}>
              <Link>
                <FaFacebookSquare className={styles.socIcon} />
              </Link>
              <Link>
                <PiInstagramLogoFill className={styles.socIcon} />
              </Link>
              <Link>
                <FaTiktok className={styles.socIcon} />
              </Link>
              <Link>
                <FaLinkedin className={styles.socIcon} />
              </Link>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            ref={wrapperRef}
            className={styles.profileWrapper}
          >
            <LazyLoadImage
              alt="Description"
              src={images.heroProfile}
              effect="blur"
              className={styles.image}
            />
          </motion.div>
          {/* {flash && (
            <>
              <div
                key={flashKey}
                className={styles.flash}
                style={{
                  top: flashPos.top,
                  left: flashPos.left,
                  transform: "translate(-50%, -50%)",
                }}
              />
              <div
                style={{
                  position: "fixed",
                  top: flashPos.top,
                  left: flashPos.left,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  zIndex: 10000,
                }}
              />
            </>
          )} */}
        </div>
      </div>

      <About />
      <Shoots />
    </div>
  );
}

export default Home;
