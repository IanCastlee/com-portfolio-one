import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.scss";
import { useEffect, useState } from "react";

function Landing() {
  const [count, setCount] = useState(3);
  const [visible, setVisible] = useState(true);
  const [animKey, setAnimKey] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 1) {
      const timer = setTimeout(() => {
        setCount(count - 1);
        setAnimKey((k) => k + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (count === 1) {
      const timer = setTimeout(() => {
        setVisible(false);
        navigate("/home");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  if (!visible) return null;

  return (
    <div className={styles.landing}>
      <div className={styles.container}>
        <img src="../../../src/assets/icons/shoots.png" alt="" />
        <span key={animKey} className={styles.countdown}>
          {count}
        </span>
      </div>
    </div>
  );
}

export default Landing;
