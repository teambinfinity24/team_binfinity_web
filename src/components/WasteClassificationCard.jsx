import React from "react";
import styles from "./WasteClassificationCard.module.css";

const WasteClassificationCard = ({ title, description, imageUrl }) => {
  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={`${title} waste`} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default WasteClassificationCard;
