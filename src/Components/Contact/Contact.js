import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import './Contact.css';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 12.8467187, lng: 77.644128 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));

// Map with a Marker

class Contact extends Component {
  render() {
    return (
        <div className="contact">
            <h1 className="container">Contact</h1>
            <div className="container">
                <form>
                    <label htmlFor="email">Email</label>
                    <input required type="email" id="email" className="form-control" placeholder="your email" />
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="your name" />
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="form-control" placeholder="your message"></textarea>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Send</button>
                </form>
            </div>
            <MyMapComponent
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
  }
}

export default Contact;
