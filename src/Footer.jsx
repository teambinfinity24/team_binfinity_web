import React, { useEffect } from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src =
          "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Branding & Contact Section */}
        <div className={styles.leftSection}>
          <div className={styles.brandSection}>
            <img src="./67eed00796736_download-removebg-preview.png" alt="Logo" className={styles.logo} />
            <span className={styles.brandName}>Binfinity</span>
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span>
              <span className={styles.contactValue}>teambinfinity24@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Address:</span>
              <span className={styles.contactValue}>
                PSNA College Of Engineering And Technology, Tamil Nadu
              </span>
            </div>
          </div>
        </div>

        {/* Quick Links & Map Section */}
        <div className={styles.quickLinksAndMap}>
          <div className={styles.quickLinksSection}>
            <div className={styles.quickLinksTitle}>Quick Links</div>
            <div className={styles.linksList}>
              <a href="/" className={styles.link}>Home</a>
              <a href="/about" className={styles.link}>About Us</a>
              <a href="/services" className={styles.link}>Services</a>
              <a href="/blog" className={styles.link}>Blog</a>
              <a href="/contact" className={styles.link}>Contact</a>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0992040951843!2d77.96769087408914!3d10.41859256789305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c72249782db3%3A0x6bbd0e501a53588a!2sPSNA%20College%20Of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1712145600000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Translate & Social Media Section */}
        <div className={styles.translateAndSocial}>
          <div className={styles.translateContainer}>
            <div className={styles.translateTitle}>Translate:</div>
            <div id="google_translate_element"></div>
          </div>

          <div className={styles.socialMedia}>
            <div className={styles.socialTitle}>Follow Us:</div>
            <div className={styles.icons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={styles.icon} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={styles.icon} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
