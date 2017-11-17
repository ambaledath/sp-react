import React, { Component } from 'react';
import Banner from './Banner';
import Features from './Features';

class Home extends Component {
  render() {
    return (
        <div className="App-home">
            <Banner />
            <Features />
        </div>
    );
  }
}

export default Home;