import React, { Component } from 'react';
import Slider from 'react-slick';
import './Home.css';

class Carousel extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="container">
            <Slider {...settings}>
              <div><img src="https://placeimg.com/800/300/nature" alt="" /></div>
              <div><img src="https://placeimg.com/800/300/people" alt="" /></div>
              <div><img src="https://placeimg.com/800/300/tech" alt="" /></div>
            </Slider>
        </div>
    );
  }
}

export default Carousel;
