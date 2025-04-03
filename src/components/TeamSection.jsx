"use client";
import React, { useState } from "react";
import styles from "./TeamSection.module.css";

const TeamSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id="team"
      className={styles.teamContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "translateY(-4px)" : "none",
        transition: "transform 0.3s ease",
      }}
    >
      <img
        src="./project descirption image.jpeg"
        alt="Team description image"
        className={styles.teamImage}
      />
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Project Description</h2>
        <p className={styles.description}>
        Our system leverages IoT technology for seamless automation and real-time waste monitoring. When waste is deposited into our bin, an integrated camera captures the input, and YOLO v11 performs real-time object detection and classification. The identified waste then moves along a conveyor belt, where a crawler mechanism directs it into designated compartments for proper segregation.

Key sensors enhance the efficiency of our system:
Infrared (IR) sensors count the number of waste items deposited.Ultrasonic sensors measure bin capacity.Load cells in each bin track the weight of collected waste.

To enhance user engagement, we have developed a user-friendly mobile application that allows users to locate bins, earn rewards, and receive automated updates. Additionally, Twilio-based SMS notifications alert authorities about bin status, ensuring timely waste collection and optimized management.By integrating cutting-edge AI and IoT technologies, our solution significantly contributes to a cleaner environment and responsible waste disposal
        </p>
        
      </div>
    </section>
  );
};

export default TeamSection;
