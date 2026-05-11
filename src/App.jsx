import React from "react";
import "./styles.css";

const certifications = [
  "AI Ambassadors Program – Basic Level",
  "AI Ambassadors Program – Advanced Level",
  "Governance & Digital Transformation – Basic Level",
  "Governance & Digital Transformation – Advanced Level",
];

const skills = [
  "Governance",
  "Digital Transformation",
  "Artificial Intelligence",
  "International Relations",
  "Sustainability",
  "Strategic Leadership",
  "Logistics",
  "Community Development",
  "Public Communication",
  "Research & Analysis",
];

const App = () => {
  return (
    <div className="portfolio-app">
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <p className="hero-tag">Ahmed ElGioushy</p>
          <h1>Governance, Innovation & Sustainable Leadership</h1>
          <p className="hero-summary">
            Ahmed ElGioushy is a multidisciplinary professional with academic and practical interests in Governance, Digital Transformation, Artificial Intelligence, Sustainability, International Relations, and Logistics.
          </p>
          <p className="hero-subtitle">
            Passionate about leadership, innovation, youth empowerment, and creating meaningful community impact through technology and sustainable development initiatives.
          </p>
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>About Me</h2>
          <p>
            Academic and community-focused professional with a background in Legal Studies, International Relations, and International Transactions & Logistics. Dedicated to supporting governance awareness, digital transformation initiatives, sustainability culture, and youth engagement across Egypt.
          </p>
        </div>

        <div className="grid-layout">
          <div className="glass-card">
            <h3>Professional Development</h3>
            <p>
              Continuously developing expertise in governance frameworks, emerging technologies, artificial intelligence, sustainability strategy, and digital transformation methodologies through advanced learning programs and community participation.
            </p>
          </div>

          <div className="glass-card">
            <h3>Organizations & Memberships</h3>
            <p>
              Official Member at Engineers for Sustainable Egypt Foundation.
            </p>
          </div>

          <div className="glass-card">
            <h3>Community Engagement</h3>
            <p>
              Active participant in graduation events, professional activities, and development initiatives related to Cohort 5, Cohort 6, and Cohort 7 with a focus on collaboration, learning, and leadership growth.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="section-header">
          <h2>Certifications</h2>
          <p>Professional programs focused on AI, governance, innovation, and digital transformation.</p>
        </div>

        <div className="grid-layout">
          {certifications.map((item, index) => (
            <div className="certificate-card" key={index}>
              <span className="certificate-badge">Certified</span>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-header">
          <h2>Volunteer Work</h2>
        </div>

        <div className="grid-layout">
          <div className="glass-card">
            <h3>Community Service</h3>
            <p>
              Contributed to volunteer activities supporting sustainability awareness, youth participation, and positive social impact initiatives.
            </p>
          </div>

          <div className="glass-card">
            <h3>Digital Awareness Initiatives</h3>
            <p>
              Participated in awareness activities promoting digital literacy, responsible technology use, governance culture, and innovation-driven community development.
            </p>
          </div>

          <div className="glass-card">
            <h3>Team Collaboration</h3>
            <p>
              Worked within collaborative environments focused on leadership, teamwork, project coordination, and supporting sustainable community engagement programs.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section dark-section">
        <div className="section-header">
          <h2>Skills</h2>
        </div>

        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <span key={index} className="skill-pill">{skill}</span>
          ))}
        </div>
      </section>

      <section className="content-section leadership-section">
        <div className="section-header">
          <h2>Leadership & Sustainability</h2>
          <p>
            Focused on combining governance principles, sustainable development goals, innovation, and digital transformation to support impactful initiatives that empower communities and encourage future-ready leadership.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
