/**
 * Certifications component
 *
 * Showcases professional certifications, training programs, and
 * professional development achievements.
 */

import React from "react";

const certifications = [
  {
    title: "AI Ambassadors Program – Basic Level",
    issuer: "Professional Development Program",
    year: "2025",
    description: "Foundational training in AI concepts, applications, and ethical considerations.",
  },
  {
    title: "AI Ambassadors Program – Advanced Level",
    issuer: "Professional Development Program",
    year: "2025",
    description: "Advanced expertise in AI implementation, strategy, and organizational transformation.",
  },
  {
    title: "Governance and Digital Transformation Program – Basic Level",
    issuer: "Professional Development Program",
    year: "2025",
    description: "Fundamentals of governance frameworks and digital transformation strategies.",
  },
  {
    title: "Governance and Digital Transformation Program – Advanced Level",
    issuer: "Professional Development Program",
    year: "2025",
    description: "Advanced principles of organizational governance and digital innovation implementation.",
  },
];

const Certifications = () => {
  return (
    <section className="padding" id="certifications" style={{ backgroundColor: "#f8f9fa" }}>
      <div style={{ width: "90%", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "3rem", color: "#4E567E" }}>
          Certifications & Professional Development
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 2px 12px rgba(78, 86, 126, 0.15)",
                border: "2px solid #E8EEF7",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                cursor: "pointer",
                animation: "slideInUp 0.6s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(78, 86, 126, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(78, 86, 126, 0.15)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1rem" }}>
                <h3 style={{ margin: 0, color: "#4E567E", fontSize: "1.1rem", flex: 1 }}>{cert.title}</h3>
                <span
                  style={{
                    backgroundColor: "#D2F1E4",
                    color: "#4E567E",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                    marginLeft: "1rem",
                  }}
                >
                  {cert.year}
                </span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "#666", margin: "0.5rem 0 1rem 0" }}>{cert.issuer}</p>
              <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6", margin: 0 }}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
