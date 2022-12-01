import { Analytics } from "@vercel/analytics/react";
import { config } from "@fortawesome/fontawesome-svg-core";

import "~styles/globals.css";

import ThemeProvider from "~styles/ThemeProvider";

import Navbar from "~components/Navbar";
import Vanta from "~components/Vanta";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider>
        <Vanta />
        <Navbar />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
