import { shoots } from "../../../constants/shoots";
import styles from "./Shoots.module.scss";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { images } from "../../../constants/images";
import { useState } from "react";
import ImageCard from "../imageCard/ImageCard";
import { RiGalleryView } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function Shoots() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All Category");

  const filterCategory = [...new Set(shoots.map((categ) => categ.category))];
  const categories = ["All Category", ...filterCategory];

  const mapCategory =
    selectedCategory !== "All Category"
      ? shoots.filter((categ) => categ.category === selectedCategory)
      : shoots;

  const handleRedirect = () => {
    navigate("/shots");
  };

  return (
    <div className={styles.shoot}>
      <div className={styles.heading}>
        <div className={styles.titleCategoryWrapper}>
          <div className={styles.titleWrapper}>
            <img className={styles.titleIcon} src={images.shootIcon} />
            <h2>Clicks & Captures</h2>
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={styles.categorySelector}
          >
            {categories &&
              categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>
        <button onClick={handleRedirect} className={styles.btnViewAll}>
          <RiGalleryView className={styles.viewAllIcon} />
          View All
        </button>
      </div>
      <div className={styles.shootsContainerWrapper}>
        <BsArrowLeftCircle className={styles.leftButtonIcon} />

        <div className={styles.shootsContainer}>
          {mapCategory &&
            mapCategory.slice(0, 10).map((item) => {
              return <ImageCard item={item} key={item.id} />;
            })}
        </div>

        <BsArrowRightCircle className={styles.rightButtonIcon} />
      </div>
    </div>
  );
}

export default Shoots;
