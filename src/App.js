import React from 'react';
import NavigationComponent from './components/Nav';
import CarouselComponent from './components/Carousel'; 
import About from './components/About';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <NavigationComponent/>
        <CarouselComponent />
        <About />
      </div>
    )
  }
}

export default App;
