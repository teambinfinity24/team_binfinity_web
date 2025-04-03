import React from "react";
import styles from "./Footer.module.css";

const QuickLinks = () => {
  const links = ["Home", "About Us", "Services", "Blog", "Contact"];

  return (
    <nav className={styles.quickLinks}>
      <h3 className={styles.quickLinksTitle}>Quick Links</h3>
      <div className={styles.linksList}>
        {links.map((link) => (
          <a key={link} href="#" className={styles.link}>
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default QuickLinks;
