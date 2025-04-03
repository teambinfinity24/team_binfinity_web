import React from "react";
import styles from "./WasteCard.module.css";

const WasteCard = ({ title, image, description, isDark }) => {
  return (
    <article
      className={styles.card}
      style={{ backgroundColor: isDark ? "#1F2937" : "#FFFFFF" }}
    >
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p
        className={styles.description}
        style={{ color: isDark ? "#E0E0E0" : "#666666" }}
      >
        {description}
      </p>
    </article>
  );
};

export default WasteCard;
