"use client";
import React from "react";
import TeamSection from "./TeamSection";
import VideoSection from "./VideoSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const InputDesign = () => {
  return (
    <>
      <TeamSection />
      <VideoSection />
      <ContactForm />
      <Footer />
      <WasteClassificationCard/>
    </>
  );
};

export default InputDesign;
