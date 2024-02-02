import React from "react";
import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import { AppNav } from "./AppNav";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>LIST OF CITIES</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &Copyright {new Date().getFullYear()} by WorldWise Pty ltd
        </p>
      </footer>
    </div>
  );
};
