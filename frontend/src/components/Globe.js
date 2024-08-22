// src/components/Globe.js
import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

const MyGlobe = () => {
  const globeEl = useRef();

  useEffect(() => {
    // Optionally adjust the globe's settings here
    globeEl.current.pointOfView({ altitude: 4 }, 4000);
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      pointsData={[{ lat: 0, lng: 0, size: 1.5 }]} // Example data
      pointColor={() => 'red'}
      pointAltitude={(d) => d.size}
      pointRadius={0.1}
      onGlobeClick={(event) => console.log(event)}
    />
  );
};

export default MyGlobe;
