import React, { Component } from 'react';
import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Contact />
            <Footer />
        </div>
    );
  }
}

export default App;
