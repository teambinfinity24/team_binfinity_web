"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = ({
  isDark,
  toggleDark,
  isLoggedIn,
  onAuthClick,
  onMapClick,
  onLogout,
  contactRef,
  showMapButton,
  userEmail = "user@example.com",
}) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScrollToContact = () => {
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={styles.nav}
      style={{ backgroundColor: isDark ? "#1F2937" : "#2CA58D" }}
    >
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img
            src="./67eed00796736_download-removebg-preview.png"
            alt="Logo"
            className={styles.logo}
          />
          <span className={styles.brand}>Binfinity</span>
        </div>

        <div className={styles.themeToggle}>
          <button
            onClick={toggleDark}
            className={styles.themeButton}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>

        <div className={styles.links}>
          <span className={styles.link}>Home</span>
          <span className={styles.link}>
  <Link to="/About" style={{ textDecoration: "none", color: "inherit" }}>
    About Us
  </Link>
</span>

          <span onClick={handleScrollToContact} className={styles.link}>
            Contact Us
          </span>

          {showMapButton && (
            <button
              onClick={onMapClick}
              className={styles.mapButton}
              aria-label="View waste collection points map"
            >
              View Map
            </button>
          )}

          {isLoggedIn ? (
            <div className={styles.profileContainer} ref={profileRef}>
              <button
                className={styles.profileIcon}
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                aria-label="Profile menu"
              >
                <img
                  src="/profile-icon.png"
                  alt="Profile"
                  className={styles.profileImage}
                />
              </button>
              {isProfileOpen && (
                <div
                  className={styles.profileDropdown}
                  style={{
                    backgroundColor: isDark ? "#1F2937" : "white",
                    boxShadow: isDark
                      ? "0 4px 12px rgba(0, 0, 0, 0.3)"
                      : "0 4px 12px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div
                    className={styles.profileEmail}
                    style={{ color: isDark ? "#E0E0E0" : "#666666" }}
                  >
                    {userEmail}
                  </div>
                  <div
                    className={styles.dropdownDivider}
                    style={{ backgroundColor: isDark ? "#374151" : "#e0e0e0" }}
                  />
                  <button
                    className={styles.logoutButton}
                    onClick={onLogout}
                    style={{ color: isDark ? "#FF6B6B" : "#ff4444" }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onAuthClick}
              className={styles.authButton}
              aria-label="Login or sign up"
            >
              Login/Signup
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
