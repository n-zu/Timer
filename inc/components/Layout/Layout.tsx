import styles from "./Layout.module.scss";

const Header = () => {
  return <header className={styles.header}>Timer</header>;
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
