import React from "react";
import StackComponent from "../../Base/StackComponent";
import TypographyComponent from "../../Base/TypographyComponent";
import CheckBoxComponent from "../../Base/CheckboxComponent";

const CheckboxGroup = ({ groupArr, heading, containerStyles }) => {
  return (
    <StackComponent sx={{ ...containerStyles }} direction="column">
      <TypographyComponent
        sx={{ textTransform: "capitalize" }}
        variant="labelText"
        component="label"
      >
        {heading}
      </TypographyComponent>
      {groupArr.map((eachGroup) => (
        <CheckBoxComponent key={eachGroup.id} {...eachGroup.props} />
      ))}
    </StackComponent>
  );
};

export default CheckboxGroup;
