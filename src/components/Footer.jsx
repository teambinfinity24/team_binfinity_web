"use client";
import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState("");

  const quickLinks = [
    { text: "Home", href: "#" },
    { text: "About Us", href: "#" },
    { text: "Services", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Contact", href: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <div className={styles.brandWrapper}>
            <img
              src="https://placehold.co/60x60"
              alt="Brand logo"
              className={styles.brandLogo}
            />
            <span className={styles.brandName}>Brand</span>
          </div>
        </div>

        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <span className={styles.contactLabel}>Email:</span>
            <span className={styles.contactText}>
              contact@wastemanagement.com
            </span>
          </div>
          <div className={styles.contactInfo}>
            <span className={styles.contactLabel}>Address:</span>
            <address className={styles.contactText}>
              123 Green Street, Eco City
              <br />
              EC 12345, Sustainable State
            </address>
          </div>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596698663!2d-74.25987368715491!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v164732745750!5m2!1sen!2sin"
              className={styles.map}
              loading="lazy"
              title="Location map"
            />
          </div>
        </div>

        <nav className={styles.quickLinks}>
          <h3 className={styles.quickLinksTitle}>Quick Links</h3>
          <div className={styles.linksList}>
            {quickLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className={styles.link}
                onMouseEnter={() => setHoveredLink(link.text)}
                onMouseLeave={() => setHoveredLink("")}
                style={{
                  transform:
                    hoveredLink === link.text
                      ? "translateX(-8px)"
                      : "translateX(0)",
                  transition: "all 0.3s",
                }}
              >
                {link.text}
              </a>
            ))}
          </div>
          <div className={styles.socialLinks}>
            <a
              href="#"
              className={styles.socialLink}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <svg
                className={styles.socialIcon}
                fill="currentColor"
                viewBox="0 0 24 24"
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
