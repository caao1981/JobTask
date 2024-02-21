import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function ButtonGroupComponent({ buttonsArr, ...otherProps }) {
  return (
    <ButtonGroup
      variant="contained"
      {...otherProps}
      aria-label="outlined primary button group"
    >
      {buttonsArr.map((eachBtn, index) => (
        <Button key={index} {...eachBtn.props}>
          {eachBtn.label}
        </Button>
      ))}
    </ButtonGroup>
  );
}

ButtonGroupComponent.defaultProps = {
  buttonsArr: [
    {
      label: "One",
      props: {
        onClick: (e) => {
          return;
        },
      },
    },
    {
      label: "One",
      props: {},
    },
    {
      label: "One",
      props: {},
    },
  ],
};
