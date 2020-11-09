import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_MAPS_KEY } from "./config";

// const mapStyles = {
//   width: "1420px",
//   height: "700px",
//   position: "inherit !important;"
// };

const mapStyles = {
  position: 'absolute',
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 53.431296, 
            lng: -2.962714
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_KEY
})(MapContainer);

