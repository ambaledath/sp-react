import React, { Component } from 'react';
import Album from './Album';
import './About.css';

class About extends Component {
  render() {
    return (
        <div className="container">
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">First featurette heading. <span className="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5">
                  <img className="featurette-image img-fluid mx-auto" src="https://placeimg.com/500/500/tech" alt="" />
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See for yourself.</span></h2>
                    <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img className="featurette-image img-fluid mx-auto" src="https://placeimg.com/500/500/tech" alt="" />
                </div>
            </div>
            <hr className="featurette-divider" />
            <Album />
        </div>
    );
  }
}

export default About;