/**
 * Volunteering component
 *
 * Highlights volunteer work, community engagement, and
 * professional service contributions.
 */

import React from "react";

const volunteerExperiences = [
  {
    title: "Community Event Coordination & Graduation Activities",
    organization: "Engineers for Sustainable Egypt Foundation",
    description: "Coordinated and facilitated graduation events and celebration activities for cohorts 5, 6, and 7. Ensured seamless execution of large-scale community events and celebrated achievements of emerging young leaders.",
    responsibilities: [
      "Event planning and coordination",
      "Logistics management",
      "Participant engagement",
      "Post-event evaluation and feedback collection",
    ],
  },
  {
    title: "Youth Empowerment & Leadership Development",
    organization: "Community Engagement Initiatives",
    description: "Actively involved in empowering young professionals and emerging leaders through mentorship, skills development, and exposure to industry opportunities. Dedicated to fostering a culture of continuous learning and professional growth.",
    responsibilities: [
      "Mentoring and guidance",
      "Workshop facilitation",
      "Leadership training",
      "Career development support",
    ],
  },
  {
    title: "Digital Awareness & Sustainability Advocacy",
    organization: "Digital Transformation & Sustainability Programs",
    description: "Promoting digital literacy and awareness of sustainable practices among diverse audiences. Delivering educational content and awareness sessions on digital transformation, governance, and environmental sustainability.",
    responsibilities: [
      "Digital literacy training",
      "Public awareness campaigns",
      "Sustainability education",
      "Community advocacy",
    ],
  },
];

const Volunteering = () => {
  return (
    <section className="padding" id="volunteering" style={{ backgroundColor: "#f8f9fa" }}>
      <div style={{ width: "90%", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "3rem", color: "#4E567E" }}>
          Volunteer Experience & Community Engagement
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {volunteerExperiences.map((exp, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "10px",
                boxShadow: "0 2px 12px rgba(78, 86, 126, 0.15)",
                border: "2px solid #E8EEF7",
                transition: "all 0.3s ease",
                animation: "slideInUp 0.6s ease-out forwards",
                animationDelay: `${index * 0.15}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(8px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(78, 86, 126, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(78, 86, 126, 0.15)";
              }}
            >
              <h3 style={{ margin: "0 0 0.5rem 0", color: "#4E567E", fontSize: "1.25rem" }}>
                {exp.title}
              </h3>
              <p style={{ margin: "0 0 1rem 0", color: "#666", fontSize: "1rem", fontWeight: "600" }}>
                {exp.organization}
              </p>
              <p style={{ color: "#555", lineHeight: "1.7", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                {exp.description}
              </p>
              <div>
                <p style={{ margin: "0.5rem 0", fontSize: "0.9rem", color: "#4E567E", fontWeight: "600" }}>
                  Key Responsibilities:
                </p>
                <ul style={{ margin: "0.8rem 0 0 0", paddingLeft: "1.5rem" }}>
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} style={{ marginBottom: "0.5rem", color: "#555", fontSize: "0.95rem" }}>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
