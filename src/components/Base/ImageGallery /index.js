import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import { DEFAULT_IMAGES } from "./default_data";
import BoxComponent from "../BoxComponent";
import styled from "@emotion/styled";
import { relative_width_size_generator } from "utils/helpers";

const ImageGalleryComponent = ({ images, containerStyles, ...otherProps }) => {
  return (
    <BoxComponent sx={{ ...containerStyles }}>
      <ImageGallery items={images} {...otherProps} />
    </BoxComponent>
  );
};
ImageGalleryComponent.defaultProps = {
  images: DEFAULT_IMAGES,
};
export default ImageGalleryComponent;
