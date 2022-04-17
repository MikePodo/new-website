import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./index.module.scss";

const Project = ({
  project: { title, subtitle, image, technologies, url },
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChangeVisibility = (visible) => {
    setIsVisible(visible);
  };

  const handleOpenUrl = () => {
    window.open(url, "_blank");
  };

  return (
    <div className={`${styles.screen} ${isVisible ? styles.visible : ""}`}>
      <VisibilitySensor
        onChange={onChangeVisibility}
        partialVisibility
        offset={{ top: 200, bottom: 200 }}
      >
        <div className={styles.container} onClick={handleOpenUrl}>
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
      </VisibilitySensor>
    </div>
  );
};

export default Project;
