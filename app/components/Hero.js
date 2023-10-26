import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image
        src="/profile1.jpg"
        className="profile-img"
        width={300}
        height={300}
        alt="profile"
      />

      <div className="hero-text">
        <h1>Hey, I'm Jesal Thakur 👋</h1>
        <p>
          I am a novice software developer, currently sharpening my skills in
          creating frontend web applications using ReactJS and NextJS. My future
          goals are centered around expanding my knowledge to encompass backend
          development and becoming good in Typescript.
        </p>
        <div className="social-icons">
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
    </div>
  );
};

export default Hero;
