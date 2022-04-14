import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./index.module.scss";
import { mediumSmall } from "~services/mediaQuery";
import { vantaStyles } from "~services/vantaStyles";

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(0);

  const vantaContainerRef = useRef(null);
  const isMobile = useMediaQuery(mediumSmall, { noSsr: true });

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          ...vantaStyles,
          el: vantaContainerRef.current,
          mouseControls: !isMobile,
          spacing: !isMobile ? 16.0 : 24.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect, isMobile]);

  return <div ref={vantaContainerRef} className={styles.vantaContainer}></div>;
};

export default Vanta;
