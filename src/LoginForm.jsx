import React from "react";
import styles from "./InputDesign.module.css";

export const LoginForm = ({
  formData,
  errors,
  loading,
  onChange,
  onSubmit,
  onMapClick,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={styles.input}
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className={styles.errorText}>{errors.email}</span>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Password</label>
        <input
          type="password"
          value={formData.password}
          onChange={(e) => onChange("password", e.target.value)}
          className={styles.input}
          placeholder="Enter your password"
        />
        {errors.password && (
          <span className={styles.errorText}>{errors.password}</span>
        )}
      </div>
      <button type="submit" onClick={onMapClick} disabled={loading} className={styles.submitButton}>
        {loading ? "Processing..." : "Login"}
      </button>
    </form>
  );
};
