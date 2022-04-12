import Navbar from "../components/navbar";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "../styles/globals.css";

import ThemeProvider from "../styles/ThemeProvider";

library.add(faGithub, faLinkedin, faBars);

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
