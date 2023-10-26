import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import {
  BiLogoJava,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
} from "react-icons/bi";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="grid-skills">
        <div className="skill-card html">
          <AiFillHtml5 style={{ fontSize: "1.5rem" }} />
          <p>HTML</p>
        </div>
        <div className="skill-card css">
          <FaCss3Alt style={{ fontSize: "1.5rem" }} />
          <p>CSS</p>
        </div>
        <div className="skill-card js">
          <BiLogoJavascript style={{ fontSize: "1.5rem" }} />
          <p>JavaScript</p>
        </div>
        <div className="skill-card react">
          <BiLogoReact style={{ fontSize: "1.5rem" }} />
          <p>ReactJS</p>
        </div>
        <div className="skill-card node">
          <BiLogoNodejs style={{ fontSize: "1.5rem" }} />
          <p>NodeJS</p>
        </div>
        <div className="skill-card java">
          <BiLogoJava style={{ fontSize: "1.5rem" }} />
          <p>Java</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
