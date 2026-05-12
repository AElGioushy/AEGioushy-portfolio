import React from "react";

const certifications = [
  {
    title: "Bachelor’s Degree in Legal Studies & International Relations",
    issuer: "Pharos University in Alexandria (PUA)",
    certifiedBy: "Pharos University in Alexandria",
    year: "2019",
    description:
      "Academic qualification focused on legal studies, political science, and international relations.",
    image: "/certificates/pharos-degree.jpg",
    category: "Academic Qualification",
  },
  {
    title: "M.Sc. in International Commercial Transactions & Logistics",
    issuer:
      "Arab Academy for Science, Technology & Maritime Transport (AASTMT)",
    certifiedBy: "AASTMT",
    year: "2024",
    description:
      "Master’s degree specializing in international commercial transactions, logistics, and global trade systems.",
    image: "/certificates/master-cert.jpg",
    category: "Master’s Degree",
  },
  {
    title: "AI Ambassadors Program – Basic Level",
    issuer:
      "Engineers for Sustainable Egypt Foundation in cooperation with NTI",
    certifiedBy:
      "Engineers for Sustainable Egypt Foundation & NTI – National Telecommunication Institute",
    year: "2025",
    description:
      "Foundational training in artificial intelligence concepts, applications, and digital innovation.",
    image: "/certificates/ai_basic_ibm.png",
    category: "Professional Certification",
  },
  {
    title: "AI Ambassadors Program – Advanced Level",
    issuer:
      "Engineers for Sustainable Egypt Foundation in cooperation with NTI",
    certifiedBy:
      "Engineers for Sustainable Egypt Foundation & NTI – National Telecommunication Institute",
    year: "2025",
    description:
      "Advanced expertise in AI implementation, governance, and organizational digital transformation.",
    image: "/certificates/ai_advanced_ms.png",
    category: "Professional Certification",
  },
  {
    title: "Governance & Digital Transformation Program – Basic Level",
    issuer:
      "Engineers for Sustainable Egypt Foundation in cooperation with NTI",
    certifiedBy:
      "Engineers for Sustainable Egypt Foundation & NTI – National Telecommunication Institute",
    year: "2025",
    description:
      "Fundamentals of governance frameworks, digital transformation strategies, and institutional development.",
    image: "/certificates/gov_basic_nca.png",
    category: "Professional Certification",
  },
  {
    title: "Governance & Digital Transformation Program – Advanced Level",
    issuer:
      "Engineers for Sustainable Egypt Foundation in cooperation with NTI",
    certifiedBy:
      "Engineers for Sustainable Egypt Foundation & NTI – National Telecommunication Institute",
    year: "2025",
    description:
      "Advanced governance principles and digital innovation implementation for modern institutions.",
    image: "/certificates/gov_advanced_nca.png",
    category: "Professional Certification",
  },
];

const Certifications = () => {
  return (
    <section className="padding" id="certifications" style={{ backgroundColor: "#f8f9fa" }}>
      <div style={{ width: "90%", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#4E567E" }}>
          Certifications & Academic Qualifications
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "750px",
            margin: "0 auto 3rem auto",
            color: "#666",
            lineHeight: "1.7",
          }}
        >
          Academic and professional achievements focused on governance,
          digital transformation, artificial intelligence, sustainability,
          and international commercial studies.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "14px",
                boxShadow: "0 4px 18px rgba(78, 86, 126, 0.12)",
                border: "1px solid #E8EEF7",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "1rem",
                  gap: "1rem",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: "#4E567E",
                    fontSize: "1.1rem",
                    lineHeight: "1.5",
                  }}
                >
                  {cert.title}
                </h3>

                <span
                  style={{
                    backgroundColor: "#D2F1E4",
                    color: "#4E567E",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.85rem",
                    fontWeight: "600",
                    whiteSpace: "nowrap",
                  }}
                >
                  {cert.year}
                </span>
              </div>

              <p style={{ margin: "0.5rem 0", color: "#666" }}>
                <strong>Category:</strong> {cert.category}
              </p>

              <p style={{ margin: "0.5rem 0", color: "#666" }}>
                <strong>Certified by:</strong> {cert.certifiedBy}
              </p>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#555",
                  lineHeight: "1.7",
                  marginTop: "1rem",
                }}
              >
                {cert.description}
              </p>

              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  style={{
                    width: "100%",
                    maxWidth: "240px",
                    margin: "1.5rem auto 0",
                    display: "block",
                    borderRadius: "10px",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
