"use client";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img
          src="https://placehold.co/40x40"
          alt="Brand Logo"
          className={styles.logo}
        />
        <span className={styles.brandName}>Brand</span>
      </div>

      <div className={styles.navContainer}>
        <div className={styles.avatar} />
        <nav className={styles.nav}>
          <span className={styles.navLink}>Home</span>
          <span
            className={styles.navLinkSecondary}
            onClick={() => scrollToSection("team")}
          >
            About
          </span>
          <span
            className={styles.navLink}
            onClick={() => scrollToSection("contact")}
          >
            Contact Us
          </span>
          <button className={styles.primaryButton}>Login/Signup</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
