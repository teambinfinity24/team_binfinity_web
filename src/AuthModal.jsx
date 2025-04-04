"use client";
import React, { useState } from "react";
import styles from "./AuthModal.module.css";

const AuthModal = ({ isDark, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      alert("Please fill all fields");
      return;
    }

    onLogin(); // ✅ tells parent to log in
    onClose(); // ✅ closes this modal
  };

  return (
    <div className={styles.overlay}>
      <div
        className={styles.modal}
        style={{ backgroundColor: isDark ? "#1F2937" : "#FFFFFF" }}
      >
        <button
          onClick={onClose}
          className={styles.closeButton}
          style={{ color: isDark ? "#E0E0E0" : "#666666" }}
        >
          ×
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>{isLogin ? "Login" : "Register"}</h2>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className={styles.switchButton}
          >
            {isLogin ? "Need an account?" : "Have an account?"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {!isLogin && (
            <div className={styles.formGroup}>
              <label
                htmlFor="name"
                style={{ color: isDark ? "#E0E0E0" : "#666666" }}
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your name"
                className={styles.input}
                style={{ color: isDark ? "#FFFFFF" : "#666666" }}
              />
            </div>
          )}

          <div className={styles.formGroup}>
            <label
              htmlFor="email"
              style={{ color: isDark ? "#E0E0E0" : "#666666" }}
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className={styles.input}
              style={{ color: isDark ? "#FFFFFF" : "#666666" }}
            />
          </div>

          <div className={styles.formGroup}>
            <label
              htmlFor="password"
              style={{ color: isDark ? "#E0E0E0" : "#666666" }}
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter your password"
              className={styles.input}
              style={{ color: isDark ? "#FFFFFF" : "#666666" }}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
