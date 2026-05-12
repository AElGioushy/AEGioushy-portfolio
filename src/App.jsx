import React from "react";
import "./styles.css";

const typingRoles = [
  "Legal Researcher",
  "Digital Transformation Specialist",
  "Governance & Sustainability Advocate",
  "Legal Tech & AI Research Enthusiast",
];

const researchTags = [
  "Digital Governance",
  "International Commercial Arbitration",
  "Legal Technology",
  "AI Regulation",
  "Cyber Governance",
  "ESG & Sustainability",
  "Digital Society",
  "International Commercial Transactions",
];

const languages = [
  "Arabic — Native",
  "English — Professional",
  "French — Learning",
  "German — Learning",
];

const App = () => {
  return (
    <div className="portfolio-app">
      <nav className="floating-navbar">
        <div className="nav-logo">AE</div>

        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#languages">Languages</a>
          <a href="#mission">Mission</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="hero-tag">Ahmed ElGioushy</p>

          <h1>
            Legal Researcher | Digital Transformation Specialist
          </h1>

          <div className="typing-text">{typingRoles[0]}</div>

          <p className="hero-summary">
            A multidisciplinary professional with expertise in governance,
            legal studies, digital transformation, sustainability, and
            artificial intelligence, focused on supporting innovative and
            sustainable digital societies.
          </p>

          <div className="hero-buttons">
            <a className="hero-btn" href="#">
              Download Academic CV
            </a>
          </div>
        </div>
      </section>

      <section className="content-section" id="mission">
        <div className="section-header">
          <h2>Professional Vision</h2>

          <p>
            Dedicated to bridging governance, law, sustainability, and digital
            transformation to empower smarter institutions, inclusive digital
            societies, and innovation-driven communities.
          </p>
        </div>
      </section>

      <section className="content-section dark-section" id="research">
        <div className="section-header">
          <h2>Current Research Focus</h2>

          <p>
            Research interests focused on governance innovation, legal
            technology, sustainability, and digital transformation.
          </p>
        </div>

        <div className="skills-wrapper">
          {researchTags.map((tag, index) => (
            <span className="skill-pill" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="content-section" id="languages">
        <div className="section-header">
          <h2>Languages</h2>
        </div>

        <div className="skills-wrapper">
          {languages.map((lang, index) => (
            <span className="skill-pill" key={index}>
              {lang}
            </span>
          ))}
        </div>
      </section>

      <section className="content-section" id="case-studies">
        <div className="section-header">
          <h2>Featured Academic & Professional Initiatives</h2>

          <p>
            Conceptual projects and analytical initiatives related to
            governance, sustainability, legal innovation, and digital society
            transformation.
          </p>
        </div>

        <div className="grid-layout">
          <div className="glass-card glow-card">
            <h3>Hayah Karima Initiative</h3>
            <p>
              Analytical perspective on sustainable rural development and
              community transformation initiatives in Egypt.
            </p>
          </div>

          <div className="glass-card glow-card">
            <h3>Digital Justice Concept</h3>
            <p>
              Exploring AI-powered legal accessibility and future digital
              justice systems.
            </p>
          </div>

          <div className="glass-card glow-card">
            <h3>Smart Governance Vision</h3>
            <p>
              Frameworks for integrating governance principles with digital
              infrastructure and smart public services.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer-section" id="contact">
        <h3>Ahmed ElGioushy</h3>

        <p>
          Governance • Legal Tech • Artificial Intelligence • Sustainability •
          Digital Society
        </p>

        <div className="footer-links">
          <a href="https://linkedin.com/in/aelgioushy">LinkedIn</a>
          <a href="https://github.com/AElGioushy">GitHub</a>
          <a href="mailto:aelgioushy@example.com">Email</a>
        </div>

        <span>© 2026 Ahmed ElGioushy — All Rights Reserved</span>
      </footer>
    </div>
  );
};

export default App;
