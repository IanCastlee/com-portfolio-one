import { MdLocalPhone, MdLocationOn } from "react-icons/md";
import styles from "./Header.module.scss";
function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <span>p</span>io
      </h1>

      <ul className={styles.ul}>
        <li>Home</li>
        <li>Projects</li>
        <li>Services</li>
        <li>Contacts</li>
      </ul>

      <ul className={styles.ul2}>
        <li>
          <MdLocationOn className={styles.icon} />
          San Antonio Luna, Dimahamak
        </li>
        <li>
          <MdLocalPhone className={styles.icon} />
          +63 908 6788 987
        </li>
      </ul>
    </div>
  );
}

export default Header;
