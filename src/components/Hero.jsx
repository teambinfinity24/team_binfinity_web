import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src="https://placehold.co/212x300"
        alt="Waste Management Illustration"
        className={styles.heroImage}
      />
      <div className={styles.divider} />
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          Igniting Innovation in Solid Waste Management
        </h1>
        <p className={styles.description}>
          Our innovative platform revolutionizes how cities handle solid waste
          through real-time monitoring and smart analytics. By leveraging
          cutting-edge technology, we enable municipalities to track collection
          points, monitor fill levels, and optimize routes efficiently. This
          data-driven approach transforms traditional waste management into a
          proactive system, ensuring cleaner cities and more sustainable
          communities. Through our comprehensive solution, we're addressing
          environmental challenges while improving operational efficiency and
          community well-being.
        </p>
      </div>
    </section>
  );
};

export default Hero;
