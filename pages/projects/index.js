import React from "react";

import styles from "./index.module.scss";
import { projects } from "~services/projectsService";

import Project from "~components/Projects/Project";

const Projects = () => {
  return (
    <div className={styles.screen}>
      {projects.map((project) => (
        <Project project={project} key={project.title} />
      ))}
    </div>
  );
};

export default Projects;
