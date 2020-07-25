import React from "react";
import NavigationComponent from "./components/Nav";
import CarouselComponent from "./components/Carousel";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Fade from "react-reveal/Fade";


class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationComponent />
        <CarouselComponent />
        <Fade bottom>
          <About />
        </Fade>
        <Fade bottom>
          <Services />
        </Fade>
        <Fade right>
          <Contact />
        </Fade>

        <Footer />
      </div>
    );
  }
}

export default App;
