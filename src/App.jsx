import React from "react";
import "./styles.css";

const certifications = [
  "AI Ambassadors Program – Basic Level",
  "AI Ambassadors Program – Advanced Level",
  "Governance & Digital Transformation – Basic Level",
  "Governance & Digital Transformation – Advanced Level",
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

const stats = [
  "5+ Professional Programs",
  "4 Languages",
  "3+ Years Experience",
  "Governance & AI Researcher",
];

const App = () => {
  return (
    <div className="portfolio-app">
      <section className="hero-section">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="hero-tag">Ahmed ElGioushy</p>

          <h1>Governance & Digital Transformation Researcher</h1>

          <div className="typing-text">
            Legal Tech & AI Advocate
          </div>

          <p className="hero-summary">
            Building bridges between governance, technology, sustainability, and society through academic research, innovation, and community-oriented leadership.
          </p>

          <div className="hero-buttons">
            <a className="hero-btn" href="#">Download Academic CV</a>
          </div>
        </div>
      </section>

      <section className="content-section stats-section">
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div className="stats-card glow-card" key={index}>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Current Research Interests</h2>
          <p>
            Exploring the intersection between law, governance, sustainability, artificial intelligence, and digital transformation.
          </p>
        </div>

        <div className="skills-wrapper">
          {researchTags.map((tag, index) => (
            <span className="skill-pill" key={index}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="section-header">
          <h2>Research & Publications</h2>
          <p>
            Academic and professional exploration of governance systems, AI ethics, legal technology, sustainability frameworks, and digital governance transformation.
          </p>
        </div>

        <div className="grid-layout">
          <div className="glass-card glow-card">
            <h3>AI & Legal Transformation</h3>
            <p>
              Exploring how artificial intelligence is reshaping legal systems, legal accessibility, and future justice frameworks.
            </p>
          </div>

          <div className="glass-card glow-card">
            <h3>Digital Governance in Egypt</h3>
            <p>
              Researching governance modernization and digital transformation strategies within public institutions.
            </p>
          </div>

          <div className="glass-card glow-card">
            <h3>Sustainable Logistics Frameworks</h3>
            <p>
              Examining sustainable logistics systems and future-ready transportation models.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Speaking & Conferences</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p>Cairo ICT Participation & Networking Activities</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p>Governance & Digital Transformation Programs</p>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <p>Community Leadership & Sustainability Events</p>
          </div>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="section-header">
          <h2>What I’m Working On</h2>
        </div>

        <div className="grid-layout">
          <div className="glass-card glow-card">
            <h3>AI in Legal Systems</h3>
          </div>

          <div className="glass-card glow-card">
            <h3>Digital Governance Models</h3>
          </div>

          <div className="glass-card glow-card">
            <h3>Smart Community Solutions</h3>
          </div>
        </div>
      </section>

      <footer className="footer-section">
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
