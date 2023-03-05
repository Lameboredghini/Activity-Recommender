import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 12.8379119,
      lng: 80.1316818
    },
    zoom: 12
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={12.8379119}
          lng={80.1316818}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}