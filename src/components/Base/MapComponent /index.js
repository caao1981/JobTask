import React, { memo } from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { config } from "config";

const MapComponent = ({
  children,
  mapOptions,
  defaultCenter,
  defaultZoom = 11,
  ...otherProps
}) => {
  const mapsApiKey = config.MAPS_API_KEY;
  const defaultProps = {
    center: defaultCenter,
    zoom: defaultZoom,
  };

  const defaultMapOptions = {
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
    styles: [
      {
        stylers: [
          { saturation: -100 },
          { gamma: 1 },
          { lightness: 4 },
          { visibility: "on" },
        ],
      },
    ],
    ...mapOptions,
  };

  return (
    <GoogleMapReact
      options={defaultMapOptions}
      bootstrapURLKeys={{ key: mapsApiKey }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      {...otherProps}
    >
      {children}
    </GoogleMapReact>
  );
};

MapComponent.propTypes = {
  defaultCenter: PropTypes.node.isRequired,
  defaultZoom: PropTypes.node.isRequired,
  mapRef: PropTypes.node.isRequired,
};
MapComponent.defaultProps = {
  children: <></>,
};

export default memo(MapComponent);
