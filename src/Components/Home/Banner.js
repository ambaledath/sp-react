import React, { Component } from 'react';

class Banner extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
          <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          <p><a className="btn btn-primary btn-lg" href="" role="button">Learn more &raquo;</a></p>
        </div>
      </div>
    );
  }
}

export default Banner;
