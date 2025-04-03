"use client";
import React from "react";
import styles from "./AboutCompany.module.css";

const TeamMemberCard = ({ name, role, image, description }) => {
  return (
    <article className={styles.memberCard}>
      <img src={image} alt={name} className={styles.memberImage} />
      <h3 className={styles.memberName}>{name}</h3>
      <p className={styles.memberRole}>{role}</p>
      <p className={styles.memberDescription}>{description}</p>
    </article>
  );
};

const CompanyIntro = () => {
  return (
    <section className={styles.introSection}>
      <h1 className={styles.mainTitle}>About Our Team</h1>
      <p className={styles.introText}>
        We are a forward-thinking environmental solutions company dedicated to
        creating sustainable futures through innovative waste management and
        ecological preservation. Our team of experts brings together decades of
        combined experience in environmental science, technology, and
        sustainability practices.
      </p>
      <p className={styles.introText}>
        Through our commitment to excellence and environmental stewardship, we
        have established ourselves as industry leaders in developing
        cutting-edge solutions for modern environmental challenges.
      </p>
    </section>
  );
};

const TeamOverview = () => {
  return (
    <section className={styles.teamOverview}>
      <div className={styles.teamImageContainer}>
        <img
          src="./team members.jpeg"
          alt="Our Team"
          className={styles.teamImage}
        />
      </div>
      <h2 className={styles.teamTitle}>Meet Our Team</h2>
      <p className={styles.teamSubtitle}>
        The passionate individuals behind our success
      </p>
    </section>
  );
};

const TeamGrid = ({ teamMembers }) => {
  const [featured, ...rest] = teamMembers;

  return (
    <section className={styles.teamGrid}>
      <div className={styles.featuredMember}>
        <TeamMemberCard {...featured} />
      </div>
      <div className={styles.memberRow}>
        {rest.slice(0, 3).map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
      <div className={styles.memberRow}>
        {rest.slice(3).map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
};

const About = () => {
  const teamMembers = [
    {
      name: "Karthick Ganesh M",
      role: "Team Leader",
      image: "./kartick_ganesk_pic.jpeg",
      description:
        "Visionary leader with 15+ years in environmental innovation. Specializes in developing sustainable waste management strategies.",
    },
    {
      name: "Harshini M",
      role: "Iot Engineer",
      image: "./Harshini_pic.jpeg",
      description:
        "Expert in waste management systems with a PhD in Environmental Engineering. Leads our technical innovations.",
    },
    {
      name: "Abhinanda V",
      role: "App Developer",
      image: "./abhinanda_pic.jpeg",
      description:
        "Leading research in sustainable practices with expertise in circular economy principles.",
    },
    {
      name: "Madhumithaa U",
      role: "Iot Engineer",
      image: "./madhu_pic.jpeg",
      description:
        "Streamlining processes with 10+ years experience in large-scale environmental project management.",
    },
    {
      name: "HariHaran S",
      role: "Web Developer",
      image: "./hari_pic.jpeg",
      description:
        "Pioneering new approaches to environmental challenges with focus on AI-driven solutions.",
    },
    {
      name: "Kanimozhi B",
      role: "Iot Engineer",
      image: "./kanimozhi_pic.jpeg",
      description:
        "Driving ecological initiatives with expertise in environmental policy and corporate programs.",
    },
  ];

  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <CompanyIntro />
        <TeamOverview />
        <TeamGrid teamMembers={teamMembers} />
      </div>
    </main>
  );
};

export default About;
