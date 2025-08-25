import styles from "./Home.module.scss";
import Hero from "../../molecules/hero/Hero";
import About from "../../molecules/about/About";
import Shoots from "../../molecules/shoots/Shoots";

function Home() {
  return (
    <div className={styles.homePage}>
      <Hero />
      <About />
      <Shoots />
    </div>
  );
}

export default Home;
