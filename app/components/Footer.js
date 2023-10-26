import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Jesal's Portfolio</p>
        <div className="social_icons">
          <a
            href="https://github.com/jd984"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jesalthakur984/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
