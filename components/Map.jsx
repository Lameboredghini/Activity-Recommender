import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {
  const defaultProps = {
    center: {
      lat: 43.689160,
      lng: -79.489843
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
          lat={parseFloat(props.latitude)}
          lng={parseFloat(props.longitude)}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap