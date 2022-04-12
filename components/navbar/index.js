import React, { useState } from "react";
import { useRouter } from "next/router";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";
import { mediumSmall } from "../../services/mediaQuery";

import PageHead from "../PageHead";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const router = useRouter();
  const isMobile = useMediaQuery(mediumSmall);

  const { pathname } = router;

  const handleRedirect = (route) => {
    router.push(route);

    if (isMobile) {
      setMobileNavOpen(false);
    }
  };

  return (
    <>
      <PageHead route={pathname} />
      <div className={styles.container}>
        <h1 onClick={() => router.push("/")} className={styles.navHeader}>
          MikePodo.net
        </h1>
        {!isMobile ? (
          <div className={styles.linksContainer}>
            <div className={styles.link} onClick={() => handleRedirect("/")}>
              <h3>Home</h3>
              <div
                className={`${styles.navLine} ${
                  pathname === "/" ? styles.active : styles.inactive
                }`}
              ></div>
            </div>
            <div
              className={styles.link}
              onClick={() => handleRedirect("/experience")}
            >
              <h3>Experience</h3>
              <div
                className={`${styles.navLine} ${
                  pathname === "/experience" ? styles.active : styles.inactive
                }`}
              ></div>
            </div>
            <div
              className={styles.link}
              onClick={() => handleRedirect("/projects")}
            >
              <h3>Projects</h3>
              <div
                className={`${styles.navLine} ${
                  pathname === "/projects" ? styles.active : styles.inactive
                }`}
              ></div>
            </div>
            <div
              className={styles.link}
              onClick={() => handleRedirect("/certificates")}
            >
              <h3>Certificates</h3>
              <div
                className={`${styles.navLine} ${
                  pathname === "/certificates" ? styles.active : styles.inactive
                }`}
              ></div>
            </div>
          </div>
        ) : (
          <>
            <FontAwesomeIcon
              icon="bars"
              className={styles.mobileNavMenuIcon}
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            />
            <SwipeableDrawer
              anchor="right"
              open={mobileNavOpen}
              onClose={() => setMobileNavOpen(false)}
              className={styles.mobileNavContainer}
            >
              <div
                className={`${styles.mobileNavLinkContainer} ${
                  pathname === "/" ? styles.active : null
                }`}
                onClick={() => handleRedirect("/")}
              >
                <h4>Home</h4>
              </div>
              <div
                className={`${styles.mobileNavLinkContainer} ${
                  pathname === "/experience" ? styles.active : null
                }`}
                onClick={() => handleRedirect("/experience")}
              >
                <h4>Experience</h4>
              </div>
              <div
                className={`${styles.mobileNavLinkContainer} ${
                  pathname === "/projects" ? styles.active : null
                }`}
                onClick={() => handleRedirect("/projects")}
              >
                <h4>Projects</h4>
              </div>
              <div
                className={`${styles.mobileNavLinkContainer} ${
                  pathname === "/certificates" ? styles.active : null
                }`}
                onClick={() => handleRedirect("/certificates")}
              >
                <h4>Certificates</h4>
              </div>
            </SwipeableDrawer>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
