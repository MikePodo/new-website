import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "~styles/home.module.scss";
import links from "~services/links";

import ContactModal from "~components/ContactModal";
import Footer from "~components/Footer";

const Home = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.footerPositioner}>
      <ContactModal open={contactModalOpen} setOpen={setContactModalOpen} />
      <div className={styles.screen}>
        <div className={styles.leftContainer}>
          <h2>Hello, my name is</h2>
          <h1>
            Michael <br />
            <span>Podolsky,</span>
          </h1>
          <div className={styles.typeWriterContainer}>
            <Typewriter
              skipAddStyles
              options={{
                strings: [
                  "Software Engineer.",
                  "Frontend Developer.",
                  "React Developer.",
                  "Designer.",
                  "Coder.",
                  "Builder.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <Button
            variant="contained"
            className={styles.contactButton}
            onClick={() => setContactModalOpen(true)}
          >
            Contact Me
          </Button>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.iconsContainer}>
            <div
              className={styles.socialContainer}
              onClick={() => {
                handleRedirect(links.GITHUB);
              }}
            >
              <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />

              <h4>Github</h4>
            </div>
            <div
              className={styles.socialContainer}
              onClick={() => {
                handleRedirect(links.LINKEDIN);
              }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${styles.socialIcon} ${styles.linkedin}`}
              />
              <h4>LinkedIn</h4>
            </div>
          </div>
          <div className={styles.profileContainer}>
            <img
              src="/assets/profile.png"
              alt="profile"
              className={styles.profileImage}
            />
            <div className={styles.colorWheelContainer}>
              <div className={styles.colorWheel}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
