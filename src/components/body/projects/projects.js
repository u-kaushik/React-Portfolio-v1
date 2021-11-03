import React from "react";
import Separator from "../../common/separator/separator";
import { ProjectData } from "../../data/projects-data";
import ProjectCard from "./project-card";
import "./projects.css";

function Projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Latest Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
