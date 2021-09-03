import React, { useState, useEffect, useRef } from "react";

import NET from "vanta/dist/vanta.net.min";
import styles from "../styles/home.module.scss";

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
      <div ref={vantaContainerRef} className={styles.vantaContainer}></div>
    </div>
  );
};

export default Home;
