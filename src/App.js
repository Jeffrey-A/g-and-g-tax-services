import React from 'react';
import NavigationComponent from './components/Nav';
import CarouselComponent from './components/Carousel'; 
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <NavigationComponent/>
        <CarouselComponent />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default App;
