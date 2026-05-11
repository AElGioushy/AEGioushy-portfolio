/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
        width: "100vw",
        animation: "fadeIn 0.8s ease-out",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
          flexWrap: "wrap",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img
              src={envelopeIcon}
              alt="email"
              className="socialIcon"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2) rotate(10deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1) rotate(0deg)")}
            />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img
              src={devDotToIcon}
              alt="Dev.to"
              className="socialIcon"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2) rotate(10deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1) rotate(0deg)")}
            />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img
              src={gitHubIcon}
              alt="GitHub"
              className="socialIcon"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2) rotate(10deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1) rotate(0deg)")}
            />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instagramIcon}
              alt="Instagram"
              className="socialIcon"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2) rotate(10deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1) rotate(0deg)")}
            />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="socialIcon"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2) rotate(10deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1) rotate(0deg)")}
            />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img
              src={mediumIcon}
              alt="Medium"
              className="socialIcon"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2) rotate(10deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1) rotate(0deg)")}
            />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="socialIcon"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2) rotate(10deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1) rotate(0deg)")}
            />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={youTubeIcon}
              alt="YouTube"
              className="socialIcon"
              style={{ transition: "transform 0.3s ease" }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.2) rotate(10deg)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1) rotate(0deg)")}
            />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white", fontSize: "0.95rem" }}>
        © 2025 {name}. All rights reserved. | Committed to Digital Transformation, Governance, and Sustainable Development.
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
