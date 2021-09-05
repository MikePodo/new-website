import React from "react";
import { useRouter } from "next/router";

import styles from "./index.module.scss";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className={styles.container}>
      <h1 onClick={() => router.push("/")}>MikePodo.net</h1>
      <div className={styles.linksContainer}>
        <div className={styles.link} onClick={() => router.push("/")}>
          <h3>Home</h3>
          <div
            className={`${styles.navLine} ${
              pathname === "/" ? styles.active : styles.inactive
            }`}
          ></div>
        </div>
        <div className={styles.link} onClick={() => router.push("/experience")}>
          <h3>Experience</h3>
          <div
            className={`${styles.navLine} ${
              pathname === "/experience" ? styles.active : styles.inactive
            }`}
          ></div>
        </div>
        <div className={styles.link} onClick={() => router.push("/projects")}>
          <h3>Projects</h3>
          <div
            className={`${styles.navLine} ${
              pathname === "/projects" ? styles.active : styles.inactive
            }`}
          ></div>
        </div>
        <div
          className={styles.link}
          onClick={() => router.push("/certificates")}
        >
          <h3>Certificates</h3>
          <div
            className={`${styles.navLine} ${
              pathname === "/certificates" ? styles.active : styles.inactive
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
