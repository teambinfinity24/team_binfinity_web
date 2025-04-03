import React from "react";
import WasteCard from "./WasteCard";
import styles from "./WasteClassification.module.css";

const wasteTypes = [
  {
    title: "Plastic",
    image: "./04532950-ac4a-4f5f-a295-ddbca0a7892c.jpg",
    description:
      "Common plastic waste includes bottles, containers, and packaging materials. These items take hundreds of years to decompose naturally. Proper segregation and recycling of plastic waste is crucial for environmental protection.",
  },
  {
    title: "Paper",
    image: "./86114305-2641-4044-8561-a37bd81b6a6b.jpg",
    description:
      "Paper waste consists of newspapers, magazines, cardboard, and office paper. Recycling paper helps save trees and reduces landfill waste. Paper can be recycled multiple times into new products.",
  },
  {
    title: "Metal",
    image: "./2a2934c0-a85d-4efb-be9c-6b0288a1435b.jpg",
    description:
      "Metal waste includes cans, appliances, and industrial scrap. Metals are highly recyclable and can be reused indefinitely. Recycling metal saves energy and reduces mining impact.",
  },
];

const WasteClassification = ({ isDark }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Classification of Waste Materials</h2>
      <div className={styles.grid}>
        {wasteTypes.map((waste, index) => (
          <WasteCard key={index} {...waste} isDark={isDark} />
        ))}
      </div>
    </section>
  );
};

export default WasteClassification;
