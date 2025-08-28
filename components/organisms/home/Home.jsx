import styles from "./Home.module.scss";
import Hero from "../../molecules/hero/Hero";
import About from "../../molecules/about/About";
import Shoots from "../../molecules/shots/Shoots";
import Competiiton from "../../molecules/competitionShots/Competiiton";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Competiiton />
      <Shoots />
    </>
  );
}

export default Home;
