import React from "react";

import styles from "./index.module.scss";
import { certificates } from "~services/certificatesService";

import Certificate from "~components/Certificates/Certificate";
import Footer from "~components/Footer";

const Certificates = () => {
  return (
    <div className={styles.screen}>
      {certificates.map((certificate) => (
        <Certificate certificate={certificate} key={certificate.name} />
      ))}
      <Footer />
    </div>
  );
};

export default Certificates;
