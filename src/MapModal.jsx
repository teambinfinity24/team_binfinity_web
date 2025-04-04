"use client";
import React, { useState } from "react";

import styles from "./MapModal.module.css";

const defaultBins = [
  {
    id: 1,
    name: "Bin 1",
    alertLevel: 85,
    position: { top: "20%", left: "30%" },
  },
  {
    id: 2,
    name: "Bin 2",
    alertLevel: 45,
    position: { top: "40%", left: "50%" },
  },
  {
    id: 3,
    name: "Bin 3",
    alertLevel: 90,
    position: { top: "60%", left: "25%" },
  },
  {
    id: 4,
    name: "Bin 4",
    alertLevel: 20,
    position: { top: "30%", left: "70%" },
  },
  {
    id: 5,
    name: "Bin 5",
    alertLevel: 75,
    position: { top: "50%", left: "80%" },
  },
  {
    id: 6,
    name: "Bin 6",
    alertLevel: 30,
    position: { top: "70%", left: "60%" },
  },
];

const getAlertColor = (level) => {
  if (level >= 80) return "#FF4444";
  if (level >= 40) return "#FFA500";
  return "#2CA58D";
};

const getAlertStatus = (level) => {
  if (level >= 80) return "Critical";
  if (level >= 40) return "Warning";
  return "Normal";
};

const MapModal = ({ isDark, onClose, updateNavigation, showMap }) => {
  const [bins] = useState(defaultBins);
  const [selectedBin, setSelectedBin] = useState(null);

  const handleClose = () => {
    if (updateNavigation) {
      updateNavigation();  // ✅ Call the function safely
    }
    onClose();
  };

  const handleBinClick = (bin) => {
    setSelectedBin(bin.id === selectedBin?.id ? null : bin);
  };

  if (!showMap) return null;

  return (
    <div className={styles.overlay}>
      <div
        className={styles.container}
        style={{ backgroundColor: isDark ? "#1a1a1a" : "#DAF9DE" }}
      >
        <div className={styles.content}>
          <header className={styles.header}>
            <h2 className={styles.title}>Waste Collection Points</h2>
            <button
              onClick={handleClose}
              className={styles.closeButton}
              style={{ color: isDark ? "#E0E0E0" : "#666666" }}
              aria-label="Close map view"
            >
              X
            </button>
          </header>

          <div className={styles.mainContent}>
            <div className={styles.mapSection}>
              <div className={styles.mapContainer}>
                <iframe
                  className={styles.mapFrame}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2022.6773163310243!2d77.89947258599196!3d10.415980378207463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9ffb95456ce7f%3A0x14d566dfc1364080!2sPSNA%20College%20Of%20Engineering%20And%20Technology!5e0!3m2!1sen!2sin!4v1743671418513!5m2!1sen!2sin"
                  title="Waste Collection Points Map"
                ></iframe>
                <div className={styles.markersContainer}>
                  {bins.map((bin) => (
                    <div
                      key={bin.id}
                      className={`${styles.binMarkerContainer} ${
                        selectedBin?.id === bin.id ? styles.selected : ""
                      }`}
                      style={{
                        top: bin.position.top,
                        left: bin.position.left,
                      }}
                    >
                      <button
                        className={styles.binMarker}
                        style={{
                          backgroundColor: getAlertColor(bin.alertLevel),
                        }}
                        onClick={() => handleBinClick(bin)}
                        aria-label={`${bin.name} - Alert Level: ${bin.alertLevel}%`}
                      >
                        <span className={styles.markerLabel}>
                          {bin.alertLevel}%
                        </span>
                      </button>
                      <div className={styles.tooltip}>
                        <strong>{bin.name}</strong>
                        <br />
                        Status: {getAlertStatus(bin.alertLevel)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.alertSection}>
              <h3 className={styles.alertTitle}>Bin Alerts</h3>
              <div className={styles.alertList}>
                {bins.map((bin) => (
                  <div
                    key={bin.id}
                    className={`${styles.alertItem} ${
                      selectedBin?.id === bin.id ? styles.selectedAlert : ""
                    }`}
                    onClick={() => handleBinClick(bin)}
                  >
                    <div className={styles.alertHeader}>
                      <span className={styles.binName}>{bin.name}</span>
                      <span
                        className={styles.alertStatus}
                        style={{ color: getAlertColor(bin.alertLevel) }}
                      >
                        {getAlertStatus(bin.alertLevel)}
                      </span>
                    </div>
                    <div className={styles.alertBar}>
                      <div
                        className={styles.alertBarFill}
                        style={{
                          width: `${bin.alertLevel}%`,
                          backgroundColor: getAlertColor(bin.alertLevel),
                        }}
                      />
                    </div>
                    <span className={styles.alertLevel}>
                      Fill Level: {bin.alertLevel}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;
