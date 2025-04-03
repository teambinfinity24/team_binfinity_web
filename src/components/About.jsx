"use client";
import { useState } from "react";
import styles from "./TeamShowcase.module.css";

const About = () => {
  const teamMembers = [
    {
      name: "Kartick Ganesh ",
      role: "Team Leader",
      bio: "Visionary leader with 15+ years in environmental innovation. Specializes in developing sustainable waste management strategies and building high-performance teams.",
      image: "./kartick_ganesk_pic.jpeg",
    },
    {
      name: "Harshini",
      role: "Technical Director",
      bio: "Expert in waste management systems with a PhD in Environmental Engineering. Leads our technical innovations and smart city solutions.",
      image: "./Harshini_pic.jpeg",
    },
    {
      name: "Madhumithaa U",
      role: "Environmental Specialist",
      bio: "Leading research in sustainable practices with expertise in circular economy principles and zero-waste initiatives.",
      image: "./madhu_pic.jpeg",
    },
    {
      name: "HariHaran S",
      role: "Web Developer",
      bio: "Streamlining processes with 10+ years experience in large-scale environmental project management and team coordination.",
      image: "./hari_pic.jpeg",
    },
    {
      name:"Abhinanda",
      role: "Innovation Lead",
      bio: "Pioneering new approaches to environmental challenges with focus on AI-driven waste sorting and recycling technologies.",
      image: "./abhinanda_pic.jpeg",
    },
    {
      name: "Kanimozhi",
      role: "Sustainability Director",
      bio: "Driving ecological initiatives with expertise in environmental policy and corporate sustainability programs.",
      image: "./kanimozhi_pic.jpeg",
    },
  ];

  const Button = ({ children, variant = "primary", onClick }) => {
    const buttonClass =
      variant === "primary" ? styles.primaryButton : styles.secondaryButton;

    return (
      <button className={buttonClass} onClick={onClick}>
        {children}
      </button>
    );
  };

  const TeamHeader = () => {
    return (
      <header className={styles.headerSection}>
        <h1 className={styles.mainTitle}>Our Dedicated Team</h1>
        <p className={styles.headerDescription}>
          Our diverse team of experts brings together decades of combined
          experience in environmental science, technology, and waste management.
          Each member contributes unique insights and expertise to our mission of
          creating sustainable solutions for tomorrow.
        </p>
        <div className={styles.heroImageContainer}>
          <img
            src="./team members.jpeg"
            alt="Team Photo"
            className={styles.heroImage}
          />
        </div>
      </header>
    );
  };

  const TeamMemberCard = ({ member, onSelect }) => {
    return (
      <article
        className={styles.memberCard}
        onClick={() => onSelect(member)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onSelect(member);
          }
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          className={styles.memberImage}
        />
        <h3 className={styles.memberName}>{member.name}</h3>
        <p className={styles.memberRole}>{member.role}</p>
      </article>
    );
  };

  const TeamMemberModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-labelledby="modal-title"
          aria-modal="true"
        >
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
          <img
            src={member.image}
            alt={member.name}
            className={styles.modalImage}
          />
          <h2 id="modal-title" className={styles.modalTitle}>
            {member.name}
          </h2>
          <p className={styles.modalRole}>{member.role}</p>
          <p className={styles.modalBio}>{member.bio}</p>
          <div className={styles.modalActions}>
            <Button variant="primary">Contact</Button>
            <Button variant="secondary">View Projects</Button>
          </div>
        </div>
      </div>
    );
  };

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <TeamHeader />

        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Team Members</h2>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={index}
                member={member}
                onSelect={setSelectedMember}
              />
            ))}
          </div>
        </section>

        {selectedMember && (
          <TeamMemberModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </div>
    </main>
  );
};

export default About;
