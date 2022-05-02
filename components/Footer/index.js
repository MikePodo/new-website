import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";

import { RESUME } from "~services/links";
import { mediumSmall } from "~services/mediaQuery";
import styles from "./index.module.scss";

const Footer = () => {
  const isMobile = useMediaQuery(mediumSmall);

  return (
    <>
      <Button
        variant="outlined"
        size={isMobile ? "normal" : "large"}
        className={styles.footerResumeBtn}
        onClick={() => window.open(RESUME, "_blank")}
      >
        View Resume
      </Button>
      <h6 className={styles.footerText}>&copy; 2022 Michael Podolsky</h6>
    </>
  );
};

export default Footer;
