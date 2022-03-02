import Link from "next/link";
import styles from "./Layout.module.scss";

type MenuProps = {
  show: boolean;
};

const Menu = ({ show }: MenuProps) => {
  return (
    <div className={`${styles.menuwrapper} ${show ? "" : styles.hideMenu}`}>
      <div className={styles.menu}>
        <Link href="/events/timer">
          <a className={styles.menuItem}>Timer</a>
        </Link>
        <Link href="/events/timeline">
          <a className={styles.menuItem}>Timeline</a>
        </Link>
        <Link href="/events/statistics">
          <a className={styles.menuItem}>Statistics</a>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
