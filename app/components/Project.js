import React from "react";
import { projectData } from "../constant";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";

const Project = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectData &&
          projectData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-header">
                <div className="small-icons">
                  <a href={project.liveLink}>
                    <AiOutlineLink />
                  </a>
                </div>
                <div className="small-icons">
                  <a href={project.gitHubLink}>
                    <AiFillGithub />
                  </a>
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Project;
