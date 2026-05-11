/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AI Ambassadors Program",
    description:
      "Comprehensive training program covering AI concepts, applications, and strategic implementation for organizational transformation.",
    url: "https://github.com",
  },
  {
    title: "Digital Transformation Initiative",
    description:
      "Framework and strategy for integrating digital technologies across governance structures and organizational operations.",
    url: "https://github.com",
  },
  {
    title: "Engineers for Sustainable Egypt",
    description:
      "Community-driven platform promoting engineering solutions for sustainable development and environmental stewardship.",
    url: "https://github.com",
  },
  {
    title: "Community Leadership Program",
    description:
      "Youth empowerment initiative fostering next-generation leaders through mentorship, skills development, and practical experience.",
    url: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "#f8f9fa" }}>
      <h2 style={{ textAlign: "center", marginBottom: "3rem", color: "#4E567E" }}>Projects & Initiatives</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "1rem",
          gap: "2rem",
          width: "90%",
          maxWidth: "1200px",
          margin: "0 auto",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1", minWidth: "300px", maxWidth: "400px", animation: "slideInLeft 0.8s ease-out" }}>
          <img
            src={image}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
            alt={imageAltText}
          />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            flex: 1,
            minWidth: "300px",
          }}
        >
          {projectList.map((project, index) => (
            <div
              key={project.title}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                border: "1px solid #E8EEF7",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                padding: "1.8rem",
                textAlign: "left",
                transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                cursor: "pointer",
                animation: "slideInUp 0.6s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(78, 86, 126, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
              }}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <h3
                  style={{
                    flexBasis: "auto",
                    margin: "0 0 1rem 0",
                    color: "#4E567E",
                    fontSize: "1.1rem",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#D2F1E4")}
                  onMouseLeave={(e) => (e.target.style.color = "#4E567E")}
                >
                  {project.title}
                </h3>
              </a>
              <p style={{ fontSize: "0.95rem", color: "#555", lineHeight: "1.6", margin: 0 }}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
