import React from "react";
import "./styles.css";

const typingRoles = [
  "Legal Tech & AI Advocate",
  "Governance Specialist",
  "Sustainability Researcher",
  "Digital Transformation Professional",
];

const researchTags = [
  "Digital Governance",
  "Legal Informatics",
  "AI Ethics",
  "Smart Cities",
  "Cyber Governance",
  "ESG",
  "Sustainable Development",
  "International Law",
];

const App = () => {
  return (
    <div className="portfolio-app">
      <nav className="floating-navbar">
        <div className="nav-logo">AE</div>

        <div className="nav-links">
          <a href="#research">Research</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#mission">Mission</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="hero-tag">Ahmed ElGioushy</p>

          <h1>Governance & Digital Transformation Researcher</h1>

          <div className="typing-text">
            {typingRoles[0]}
          </div>

          <p className="hero-summary">
            Building bridges between governance, technology, sustainability, and society through academic research, innovation, and community-oriented leadership.
          </p>

          <div className="hero-buttons">
            <a className="hero-btn" href="#">Download Academic CV</a>
          </div>
        </div>
      </section>

      <section className="content-section" id="mission">
        <div className="section-header">
          <h2>Professional Mission</h2>

          <p>
            My mission is to bridge governance, technology, sustainability, and law to support digitally empowered and socially sustainable communities.
          </p>
        </div>
      </section>

      <section className="content-section dark-section" id="research">
        <div className="section-header">
          <h2>Research Interests</h2>
        </div>

        <div className="skills-wrapper">
          {researchTags.map((tag, index) => (
            <span className="skill-pill" key={index}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="content-section" id="case-studies">
        <div className="section-header">
          <h2>Featured Case Studies</h2>

          <p>
            Research-driven conceptual projects focused on governance, sustainability, and digital society transformation.
          </p>
        </div>

        <div className="grid-layout">
          <div className="glass-card glow-card">
            <h3>Hayah Karima Initiative</h3>
            <p>
              Analytical perspective on sustainable rural development and social transformation initiatives in Egypt.
            </p>
          </div>

          <div className="glass-card glow-card">
            <h3>Digital Justice Concept</h3>
            <p>
              Exploring AI-powered legal accessibility and future digital justice systems.
            </p>
          </div>

          <div className="glass-card glow-card">
            <h3>Smart Governance Vision</h3>
            <p>
              Frameworks for integrating governance principles with digital infrastructure and smart services.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="section-header">
          <h2>Professional Insights</h2>

          <p>
            Sharing perspectives on governance, AI ethics, sustainability, and digital transformation.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p>The Future of AI in Legal Systems</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p>Governance & Digital Society Transformation</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p>Sustainability and Community Innovation</p>
          </div>
        </div>
      </section>

      <footer className="footer-section" id="contact">
        <h3>Ahmed ElGioushy</h3>

        <p>
          Governance • Legal Tech • AI • Sustainability • Digital Society
        </p>

        <div className="footer-links">
          <a href="https://linkedin.com/in/aelgioushy">LinkedIn</a>
          <a href="https://github.com/AElGioushy">GitHub</a>
          <a href="mailto:aelgioushy@example.com">Email</a>
        </div>

        <span>© 2026 Ahmed ElGioushy — Academic & Professional Portfolio</span>
      </footer>
    </div>
  );
};

export default App;
