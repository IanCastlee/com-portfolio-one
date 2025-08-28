import { useEffect, useRef } from "react";
import styles from "./ViewAllShots.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ImageCard from "../../molecules/imageCard/ImageCard";
import { shoots } from "../../../constants/shoots";
import ViewShotDetails from "../../molecules/viewShotDetails/ViewShotDetails";

function ViewAllShots() {
  const { categId } = useParams();
  const navigate = useNavigate();

  const mapCategory =
    categId !== "All Category"
      ? shoots.filter((categ) => categ.category === categId)
      : shoots;

  const handleReturn = () => {
    navigate("/home");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <MdOutlineKeyboardArrowLeft
            onClick={handleReturn}
            className={styles.backIcon}
          />

          <h2>{categId}</h2>
        </div>

        <div className={styles.content}>
          {mapCategory &&
            mapCategory.map((item) => {
              return <ImageCard item={item} key={item.id} />;
            })}
        </div>
      </div>
      {/* <ViewShotDetails /> */}
    </>
  );
}

export default ViewAllShots;
