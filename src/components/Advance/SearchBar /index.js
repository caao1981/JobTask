import PropTypes from "prop-types";
import React, { useState } from "react";
import TextFieldComponent from "./../../Base/TextFieldComponent";
import SearchBarIcon from "./../../../assets/icons/common/SearchBar.png";

const SearchBarComponent = ({
  searchVal,
  setSearchVal,
  placeholder,
  ...otherProps
}) => {
  return (
    <TextFieldComponent
      iconSource={SearchBarIcon}
      {...otherProps}
      value={searchVal}
      onInputChange={setSearchVal}
      placeholder={placeholder}
    />
  );
};

SearchBarComponent.propTypes = {
  placeholder: PropTypes.string,
  searchVal: PropTypes.string.isRequired,
  setSearchVal: PropTypes.func.isRequired,
};

SearchBarComponent.defaultProps = {
  placeholder: "Search here...",
};

export default SearchBarComponent;
