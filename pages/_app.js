import "../styles/globals.css";

import { NavBar, Footer } from "../components";
import { CrowdFundingProvider } from "../Context/CroudFunding";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <CrowdFundingProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </CrowdFundingProvider>
    </div>
  );
}
