import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = ({ center, zoom }) => {
  const defaultProps = {
    center: {
      lat: 42.3265,
      lng: -122.8756,
    },
    zoom: 5,
  };

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDNqZHC1TD2kcPAxZkK-N_xoFAkbXj3z84" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker lat={defaultProps.center.lat} lng={defaultProps.center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
