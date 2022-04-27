import React from "react";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import MarkerCard from "./MarkerCard";

const Map = ({ center, zoom, data }) => {
  const defaultProps = {
    center: {
      lat: 45.3265,
      lng: -100.8756,
    },
    zoom: 5,
  };

  const [locationInfo, setLocationInfo] = useState();

  const markers = data.map((event) => {
    if (event.categories[0].id === 8) {
      return (
        <Marker
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: event.id, title: event.title })}
        />
      );
    }
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_NASA_API_KEY}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo ? <MarkerCard info={locationInfo} /> : null}
    </div>
  );
};

export default Map;
