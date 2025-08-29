import { shoots } from "../../../constants/shoots";
import styles from "./Shoots.module.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { images } from "../../../constants/images";
import { useEffect, useMemo, useRef, useState } from "react";
import ImageCard from "../imageCard/ImageCard";
import { RiGalleryView } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Shoots() {
  const iconRef = useRef(null);

  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  const filterCategory = useMemo(() => {
    return [...new Set(shoots.map((categ) => categ.category))];
  }, []);

  const mapCategory = useMemo(() => {
    return selectedCategory !== "All Category"
      ? shoots.filter((categ) => categ.category === selectedCategory)
      : shoots;
  }, [selectedCategory]);

  const categories = ["All Category", ...filterCategory];

  const handleRedirect = () => {
    navigate(`/shots/${selectedCategory}`);
  };

  //animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          iconRef.current.classList.add(styles.visible);
        } else {
          iconRef.current.classList.remove(styles.visible);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => {
      if (iconRef.current) observer.unobserve(iconRef.current);
    };
  }, []);

  return (
    <div className={styles.shoot}>
      <div className={styles.heading}>
        <div className={styles.titleCategoryWrapper}>
          <div className={styles.titleWrapper}>
            <img
              ref={iconRef}
              className={styles.titleIcon}
              src={images.shootIcon}
            />
            <h2>Clicks & Captures</h2>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.categorySelector}
          >
            {categories &&
              categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
          </select>
        </div>
        <button onClick={handleRedirect} className={styles.btnViewAll}>
          <RiGalleryView className={styles.viewAllIcon} />
          View All
        </button>
      </div>
      <div className={styles.shootsContainerWrapper}>
        <div className={styles.shootsContainer}>
          {mapCategory &&
            mapCategory.slice(0, 8).map((item) => {
              console.log("🔁 ImageCard re-rendered:", item);

              return <ImageCard item={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Shoots;
