import React from "react";
import styles from "./Hero.module.css";

const Hero = ({ isDark }) => {
  return (
    <section
      className={styles.hero}
      style={{ backgroundColor: isDark ? "#1F2937" : "#FFFFFF" }}
    >
      <div className={styles.imageContainer}>
        <img
          src="./smart_bin.jpeg"
          alt="Hero Image"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
      <h3 className={styles.title}>
          Smart E Bin
        </h3>
        <h1 className={styles.title}>
          Igniting Innovation in Solid Waste Management
        </h1>
        <p
          className={styles.description}
          style={{ color: isDark ? "#E0E0E0" : "#666666" }}
        >
         Our **Binfinity** platform is an all-in-one solution designed to revolutionize waste management. It provides real-time bin fill levels, waste collection insights, and essential technical updates to ensure efficient operations. Whether you're optimizing waste disposal or enhancing sustainability efforts, **Binfinity** empowers you with data-driven decisions to make a lasting environmental impact.
          
        </p>
      </div>
    </section>
  );
};

export default Hero;
