import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I am extremely passionate about creating elegant and
            efficient solutions to overcome complex problems. My area of
            expertise lies in software development, especially in web
            technologies such as HTML, CSS, and JavaScript. I enjoy working on
            the front end of projects and am currently developing my skills in
            back-end development. My constant pursuit involves optimizing
            performance, enhancing user experience, and maintaining the highest
            standards of code quality.
          </p>
          <p>
            In June 2023, I successfully earned my bachelor's degree in Computer
            Engineering. Over the course of my academic journey, I've undertaken
            two internships to gain practical experience. During my initial
            two-month internship, I served as a frontend developer intern,
            primarily focusing on basic design and component creation utilizing
            tools such as Figma, HTML, and CSS. My second internship spanned
            five months, during which I delved into frontend development,
            utilizing technologies like ReactJs and TailwindCSS.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/profile2.jpg"
            className="profile-img"
            width={300}
            height={500}
            alt="about-img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
