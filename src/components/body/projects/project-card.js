import React from "react";
import "./project-card.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                <p>Demo</p>
              </div>
            </a>
          )}
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original"></i>
                <p>Github</p>
              </div>
            </a>
          )}
        </div>
        <p>{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return (
              <div className="project-tag">
                <p>{tag}</p>
              </div>
            );
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" alt="project" />
    </div>
  );
}

export default ProjectCard;
