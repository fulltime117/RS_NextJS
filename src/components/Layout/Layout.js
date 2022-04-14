import Head from "next/head";
// import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer";

const Layout = ({ children, title = "artcryption", isFooter }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      {isFooter && <Footer />}
    </div>
  );
};

export default Layout;
