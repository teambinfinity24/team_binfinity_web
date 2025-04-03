"use client";
import React from "react";
import styles from "./TeamPage.module.css";
import TeamInfo from "./TeamInfo";
import VideoSection from "./VideoSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const TeamPage = () => {
  return (
    <main className={styles.pageContainer}>
      <TeamInfo />
      <VideoSection />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default TeamPage;
