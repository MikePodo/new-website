import Navbar from "../components/navbar";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../styles/globals.css";

library.add(faGithub, faLinkedin);

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
