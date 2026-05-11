/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Passionate professional with expertise in Digital Transformation, Governance, and Artificial Intelligence. Background in Legal Studies and International Relations, with a strong commitment to community leadership and sustainability initiatives. Dedicated to leveraging technology and inclusive practices to drive positive change and empower emerging leaders.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Artificial Intelligence Awareness",
  "Digital Transformation",
  "Governance Principles",
  "Sustainability Initiatives",
  "Community Leadership",
  "Public Communication",
  "Event Coordination",
  "Strategic Thinking",
  "Legal Studies & Analysis",
  "International Relations",
  "Logistics & Operations",
  "Youth Empowerment",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I believe in the power of education and community engagement to create sustainable solutions. With a diverse background spanning legal frameworks, international relations, and digital innovation, I'm committed to bridging the gap between governance and technological advancement. My passion lies in empowering the next generation of leaders to tackle global challenges through collaboration, critical thinking, and creative problem-solving.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "90%",
          maxWidth: "900px",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          animation: "fadeInUp 0.8s ease-out",
        }}
      >
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <hr />
        <h3 style={{ marginBottom: "1.5rem", color: "#4E567E" }}>Professional Skills & Expertise</h3>
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.1rem",
            margin: "2rem 3rem",
            gap: "3rem",
            listStylePosition: "inside",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill} style={{ marginBottom: "0.8rem", lineHeight: "1.8" }}>
              {skill}
            </li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", fontSize: "1rem", lineHeight: "1.8" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
