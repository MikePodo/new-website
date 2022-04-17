import React from "react";

import styles from "./index.module.scss";

const Project = ({ project: { title, subtitle, image, technologies } }) => {
  console.log(title);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subTitle}>{subtitle}</h2>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.imageOverlay}>
          <h3>Technologies Used:</h3>
          <ul>
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
