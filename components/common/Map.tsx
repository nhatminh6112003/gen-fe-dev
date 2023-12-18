import React, { useState } from 'react';
import Map, { Layer, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapBox = () => {
  const [latitude, setLatitude] = useState(37.7749);
  const [longitude, setLongitude] = useState(-122.4194);

  return (
    <Map
      style={{ width: '100%', height: 615, borderRadius: '8px' }}
      accessToken="pk.eyJ1IjoibGlhbXRyYW4iLCJhIjoiY2xtNGhqdGsxNDhoajNrdGhoaTYxczhobyJ9.blaWwUEosupwLrfFPo9Dog"
      latitude={latitude}
      longitude={longitude}
      mapboxAccessToken={
        process.env.MAPBOX_TOKEN
        // 'pk.eyJ1IjoibGlhbXRyYW4iLCJhIjoiY2xtNGhqdGsxNDhoajNrdGhoaTYxczhobyJ9.blaWwUEosupwLrfFPo9Dog'
      }
      mapStyle="mapbox://styles/mapbox/streets-v9"
      zoom={14}
    >
      <Marker longitude={longitude} latitude={latitude} />
    </Map>
  );
};

export default MapBox;
