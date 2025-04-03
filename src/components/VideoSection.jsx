"use client";
import React, { useState } from "react";
import styles from "./VideoSection.module.css";

const VideoSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={styles.videoSection}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-4px)" : "none",
        transition: "transform 0.3s ease",
      }}
    >
      <h2 className={styles.title}>Team Video</h2>
      <div className={styles.videoContainer}>
        <div className={styles.placeholderContent}>
          <p className={styles.placeholderText}>
            Replace with YouTube embed code
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
