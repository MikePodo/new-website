import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import Typewriter from "typewriter-effect";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as THREE from "three";
import styles from "../styles/home.module.scss";
import links from "../services/links";

import ContactModal from "../components/ContactModal";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const vantaContainerRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          THREE: THREE,
          el: vantaContainerRef.current,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3399ff,
          backgroundColor: 0x001e3c,
          points: 9.0,
          maxDistance: 19.0,
          spacing: 16.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <ContactModal open={contactModalOpen} setOpen={setContactModalOpen} />
      <div ref={vantaContainerRef} className={styles.vantaContainer}></div>
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
                  "Frontend Developer.",
                  "Software Engineer.",
                  "Designer.",
                  "React Developer.",
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
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className={styles.socialIcon}
              />

              <h4>Github</h4>
            </div>
            <div
              className={styles.socialContainer}
              onClick={() => {
                handleRedirect(links.LINKEDIN);
              }}
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className={`${styles.socialIcon} ${styles.linkedin}`}
              />
              <h4>LinkedIn</h4>
            </div>
          </div>
          <div className={styles.profileContainer}>
            <img
              src="/profile.png"
              alt="profile"
              className={styles.profileImage}
            />
            <div className={styles.colorWheelContainer}>
              <div className={styles.colorWheel}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
