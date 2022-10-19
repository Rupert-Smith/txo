import styles from "./_header.module.scss";
import "./mui-header-styles.scss";

function Header() {
  return (
    <header className={styles["header"]}>
      <ul>
        <li>ENQUIRIES</li>
        <li>General</li>
        <li>+44 (0) 020 3613 4733</li>
        <li>Info@txowork.com</li>
      </ul>
      <ul>
        <li>&nbsp;</li>
        <li>Sales</li>
        <li>+44 (0) 020 3613 4733 </li>
        <li>Info@txowork.com</li>
      </ul>
      <ul>
        <li>ADDRESS</li>
        <li>Morelands</li>
        <li>5-23 Old Street</li>
        <li>London EC1V 9HL</li>
      </ul>
      <ul>
        <li>CONNECT</li>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>Facebook</li>
      </ul>
    </header>
  );
}

export { Header };
