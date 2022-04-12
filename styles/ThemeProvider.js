import React from "react";
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";

import styles from "./variables.module.scss";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Red Hat Display",
    },
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: styles.primary,
    },
    secondary: {
      main: styles.secondary,
    },
    error: {
      main: styles.danger,
    },
    background: {
      main: styles.background,
    },
    black: {
      main: styles.black,
    },
    white: {
      main: styles.white,
    },
    gray: {
      main: styles.gray,
    },
  },
});

export default function CustomStyles({ children }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
