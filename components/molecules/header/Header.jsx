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
    </div>
  );
}

export default Header;
