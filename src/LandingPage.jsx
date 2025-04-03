import React, { useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import WasteClassification from "./WasteClassification";
import MapModal from "./MapModal";
import AuthModal from "./AuthModal";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import TeamSection from "./components/TeamSection";
import VideoSection from "./VideoSection";
import styles from "./LandingPage.module.css";

const LandingPage = ({ contactRef }) => {
  const [isDark, setIsDark] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDark = () => setIsDark(!isDark);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className={`${styles.container} ${isDark ? styles.darkMode : ""}`}>
      <Navigation
        isDark={isDark}
        toggleDark={toggleDark}
        isLoggedIn={isLoggedIn}
        onAuthClick={() => setIsAuthOpen(true)}
        onMapClick={() => setShowMap(true)}
        onLogout={handleLogout}
        contactRef={contactRef}
      />

      <main className={styles.main}>
        <Hero isDark={isDark} />
        <WasteClassification isDark={isDark} />
        <div className={styles.section}>
          <TeamSection isDark={isDark} />
        </div>
        <div className={styles.section}>
          <VideoSection isDark={isDark} />
        </div>
        <div className={styles.section} id="contact" ref={contactRef}>
          <ContactForm isDark={isDark} />
        </div>
      </main>

      <Footer isDark={isDark} />

      {showMap && <MapModal isDark={isDark} onClose={() => setShowMap(false)} />}
      {isAuthOpen && (
        <AuthModal
          isDark={isDark}
          onClose={() => setIsAuthOpen(false)}
          onLogin={() => setIsLoggedIn(true)}
        />
      )}
    </div>
  );
};

export default LandingPage;
