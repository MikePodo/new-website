import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import styles from "./index.module.scss";

const Certificate = ({ certificate: { name, image } }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onChangeVisibility = (visible) => {
    setIsVisible(visible);
  };

  return (
    <div className={`${styles.screen} ${isVisible ? styles.visible : ""}`}>
      <VisibilitySensor
        onChange={onChangeVisibility}
        partialVisibility
        offset={{ top: 300, bottom: 150 }}
      >
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={image} alt={name} />
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default Certificate;
