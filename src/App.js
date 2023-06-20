import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";

import Navigation from "./components/Navigation";
import Home from "./components/Sections/Home"
import About from "./components/Sections/About"
import Roadmap from "./components/Sections/Roadmap"
import ShowCase from "./components/Sections/Showcase"
import Team from "./components/Sections/Team"
import Faq from "./components/Sections/Faq"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <>
      <GlobalStyles />
        <ThemeProvider theme={light}>
            <Navigation />
            <Home />
            <About />
            <Roadmap />
            <ShowCase />
            <Team />
            <Faq />
            <Footer />
            <ScrollToTop />
        </ThemeProvider>
    </>
  );
}

export default App;
