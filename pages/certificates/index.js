import React from "react";

import styles from "./index.module.scss";
import { certificates } from "~services/certificatesService";

import Certificate from "~components/Certificates/Certificate";

const Certificates = () => {
  return (
    <div className={styles.screen}>
      {certificates.map((certificate) => (
        <Certificate certificate={certificate} key={certificate.name} />
      ))}
    </div>
  );
};

export default Certificates;
