import React from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";

import styles from "~styles/404.module.scss";

const _404 = () => {
  const router = useRouter();

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div className={styles.screen}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Button variant="contained" size="large" onClick={handleReturnHome}>
        Back to home
      </Button>
    </div>
  );
};

export default _404;
