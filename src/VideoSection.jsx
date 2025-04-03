import React from "react";
import styles from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <section className={styles.videoSection}>
      <h2 className={styles.title}>Animation Video</h2>
      <div className={styles.videoContainer}>
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KACAg17FIoY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
