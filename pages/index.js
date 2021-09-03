import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

import styles from "../styles/home.module.scss";

import Typewriter from "typewriter-effect";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaContainerRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaContainerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xaa1f27,
          backgroundColor: 0x26262d,
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

  return (
    <div>
      <div ref={vantaContainerRef} className={styles.vantaContainer}>
        <div className={styles.screen}>
          <div className={styles.leftContainer}>
            <h2>Hello, my name is</h2>
            <h1>
              Michael <br />
              <span>Podolsky,</span>
            </h1>
            {/* <h3>Frontend Developer.</h3> */}

            <Typewriter
              skipAddStyles
              options={{
                strings: [
                  "Frontend Developer.",
                  "Software Engineer.",
                  "Designer.",
                  "Builder.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.iconsContainer}>
              <div className={styles.socialContainer}>
                <img src="/github.svg" alt="github" />
                <h4>Github</h4>
              </div>
              <div className={styles.socialContainer}>
                <img src="/linkedin.svg" alt="linkedin" />
                <h4>LinkedIn</h4>
              </div>
            </div>
            <img src="/profile.png" alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
