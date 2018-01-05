import React, { Component } from 'react';
import Carousel from './Carousel';
import Banner from './Banner';
import Features from './Features';

class Home extends Component {
  render() {
    return (
        <div className="App-home">
            <Carousel />
            <Banner />
            <Features />
        </div>
    );
  }
}

export default Home;
