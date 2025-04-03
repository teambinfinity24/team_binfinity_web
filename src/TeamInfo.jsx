import React from "react";
import styles from "./TeamInfo.module.css";

const TeamInfo = () => {
  return (
    <section className={styles.teamInfoContainer}>
      <div className={styles.imageWrapper}>
        <img
          src="https://placehold.co/400x400"
          alt="Team"
          className={styles.teamImage}
        />
      </div>
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Project Description</h1>
        <p className={styles.description}>
        Our system employs IoT technology for seamless automation and monitoring. When waste material enters the bin, a camera captures an image, and YOLOv11 performs real-time object detection and classification.  The material then travels via conveyor belt to a crawler, which disposes of the waste into designated compartments.  An IR sensor counts the number of items deposited, an ultrasonic sensor measures bin capacity, and a load cell in each bin determines the weight of the contents.
        </p>
        <p className={styles.description}>
        We've developed a user-friendly application for locating bins, rewarding users, and sending automatic alerts to authorities.  SMS notifications via Twilio alert authorities about bin capacities and status updates.  This comprehensive solution contributes significantly to a cleaner environment and responsible waste management
        </p>
      </div>
    </section>
  );
};

export default TeamInfo;
