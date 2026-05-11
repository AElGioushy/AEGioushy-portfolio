/**
 * Organizations component
 *
 * Highlights memberships, organizational affiliations, and
 * professional associations.
 */

import React from "react";

const organizations = [
  {
    name: "Engineers for Sustainable Egypt Foundation",
    role: "Official Member",
    year: "2025",
    description: "Dedicated to promoting engineering solutions for sustainable development and environmental stewardship in Egypt. Actively contributing to initiatives that bridge technology and sustainability.",
    focus: ["Sustainability", "Engineering", "Community Development", "Youth Empowerment"],
  },
];

const Organizations = () => {
  return (
    <section className="padding" id="organizations">
      <div style={{ width: "90%", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "3rem", color: "#4E567E" }}>
          Memberships & Organizations
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {organizations.map((org, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "2.5rem",
                borderRadius: "10px",
                boxShadow: "0 2px 12px rgba(78, 86, 126, 0.15)",
                border: "3px solid #D2F1E4",
                transition: "all 0.3s ease",
                animation: "fadeInLeft 0.7s ease-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(78, 86, 126, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(78, 86, 126, 0.15)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3 style={{ margin: 0, color: "#4E567E", fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                    {org.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: "1.1rem", color: "#666", fontWeight: "600" }}>
                    {org.role}
                  </p>
                </div>
                <span
                  style={{
                    backgroundColor: "#D2F1E4",
                    color: "#4E567E",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    fontWeight: "600",
                  }}
                >
                  Since {org.year}
                </span>
              </div>
              <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "1.5rem", fontSize: "1rem" }}>
                {org.description}
              </p>
              <div>
                <p style={{ margin: "0.5rem 0", fontSize: "0.9rem", color: "#4E567E", fontWeight: "600" }}>
                  Key Focus Areas:
                </p>
                <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap", marginTop: "0.8rem" }}>
                  {org.focus.map((focus, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: "#F0F3FF",
                        color: "#4E567E",
                        padding: "0.4rem 0.9rem",
                        borderRadius: "15px",
                        fontSize: "0.85rem",
                        fontWeight: "500",
                      }}
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizations;
