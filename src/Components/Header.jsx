/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.95)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#certifications">Certifications</a>
      <a href="#organizations">Organizations</a>
      <a href="#volunteering">Volunteering</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#footer">Contact</a>
    </div>
  );
};

export default Header;
