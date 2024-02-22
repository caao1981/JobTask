import React from "react";
import Slider from "@mui/material/Slider";
import PropTypes from "prop-types";
import sliderImage from "https://images.herzindagi.info/image/2023/Sep/cleaning-tips-for-sliding-windows.png"; // Import the image

export default function SliderComponent({ value, onChange, ...otherProps }) {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return <Slider value={value} onChange={handleChange} {...otherProps} />;
}
  sx={{
        color: 'primary',
        '& .MuiSlider-thumb': {
          width: '40px',
          height: '40px',
          backgroundImage: `url(${https://images.herzindagi.info/image/2023/Sep/cleaning-tips-for-sliding-windows.png})`, // Use imported image
          backgroundSize: 'cover',
        },
      }}
SliderComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  onChange: PropTypes.func,
};
SliderComponent.defaultProps = {
  value: 0,
  onChange: () => {},
};
