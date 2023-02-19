import React, { useRef, useEffect } from "react";

import "./Map.css";

const Map = ({ className, style }, props) => {
  const mapRef = useRef();

  const { center, zoom } = props;
  console.log(mapRef);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return (
    <div ref={mapRef} className={`map ${className}`} style={style}>
      Map
    </div>
  );
};

export default Map;
