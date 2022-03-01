import Link from "next/link";
import Menu from "./Menu";

import styles from "./Layout.module.scss";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <Link href={"/events/timer"}>
          <a className="material-icons">home</a>
        </Link>
      </div>
      <div>Timer</div>
      <div className={styles.icon}>
        <i className="material-icons" onClick={toggleMenu}>
          menu
        </i>
      </div>
      <Menu show={showMenu} />
    </header>
  );
};

const Footer = () => {
  return <footer className={styles.footer}>Made by Z</footer>;
};

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
