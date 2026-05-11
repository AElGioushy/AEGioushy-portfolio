import React from "react";
import "./styles.css";

const certifications = [
  "AI Ambassadors Program – Basic Level",
  "AI Ambassadors Program – Advanced Level",
  "Governance & Digital Transformation – Basic Level",
  "Governance & Digital Transformation – Advanced Level",
];

const visionCards = [
  {
    title: "Governance",
    description: "Focused on governance awareness, transparency, digital transformation frameworks, and institutional development.",
  },
  {
    title: "Legal Tech",
    description: "Exploring the future of legal systems through AI, automation, and digital legal innovation.",
  },
  {
    title: "AI & Sustainability",
    description: "Combining artificial intelligence and sustainability initiatives to support future-ready communities.",
  },
  {
    title: "Digital Society",
    description: "Advocating for digital literacy, responsible innovation, and inclusive digital communities.",
  },
];

const timeline = [
  "Legal Studies & International Relations — Pharos University",
  "M.Sc. International Transactions & Logistics — AASTMT",
  "Customer Service Experience — Amazon UK, Emaar Dubai, Dubai Mall, Altice USA",
  "Sales Executive at ECC Solutions",
  "Governance & Digital Transformation Activities",
  "AI & Sustainability Initiatives",
];

const languages = [
  "Arabic (Native)",
  "English (Professional)",
  "French (Learning)",
  "German (Learning)",
];

const App = () => {
  return (
    <div className="portfolio-app">
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <p className="hero-tag">Ahmed ElGioushy</p>
          <h1>Legal & Governance Professional</h1>
          <div className="typing-text">
            Governance & Digital Transformation Specialist
          </div>

          <p className="hero-summary">
            Academic researcher and multidisciplinary professional focused on governance, legal technology, sustainability, artificial intelligence, and digital transformation.
          </p>

          <div className="hero-buttons">
            <a className="hero-btn" href="#">Download Academic CV</a>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Professional Vision</h2>
          <p>
            Building a modern professional identity centered around governance, digital society, legal technology, sustainability, and innovation.
          </p>
        </div>

        <div className="grid-layout">
          {visionCards.map((card, index) => (
            <div className="glass-card glow-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="section-header">
          <h2>Academic & Professional Journey</h2>
        </div>

        <div className="timeline-wrapper">
          {timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Current Research Focus</h2>
          <p>
            International Commercial Arbitration & Digital Governance.
            Researching the relationship between legal systems, digital governance frameworks, and emerging technologies in modern institutions.
          </p>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="section-header">
          <h2>Languages</h2>
        </div>

        <div className="skills-wrapper">
          {languages.map((language, index) => (
            <span key={index} className="skill-pill">{language}</span>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Certifications</h2>
        </div>

        <div className="grid-layout">
          {certifications.map((item, index) => (
            <div className="certificate-card glow-card" key={index}>
              <span className="certificate-badge">Certified</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer-section">
        <h3>Ahmed ElGioushy</h3>
        <p>AI & Sustainability Advocate | Academic Researcher | Community-Oriented Leader</p>

        <div className="footer-links">
          <a href="https://linkedin.com/in/aelgioushy">LinkedIn</a>
          <a href="https://github.com/AElGioushy">GitHub</a>
          <a href="mailto:aelgioushy@example.com">Email</a>
        </div>

        <span>© 2026 Ahmed ElGioushy. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default App;
