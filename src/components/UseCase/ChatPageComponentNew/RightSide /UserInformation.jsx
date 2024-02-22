import React from "react";
import StackComponent from "../../../Base/StackComponent";
import TypographyComponent from "../../../Base/TypographyComponent";
import ImageComponent from "../../../Base/ImageComponent";
import defaultImage from "./../../../../assets/images/temp/profilePicture (1).png";

const UserInformation = ({ data }) => {
  const { img, name } = data;
  return (
    <StackComponent
      alignItems="center"
      justifyContent="space-between"
      sx={{ height: "105px", borderBottom: "1px solid rgba(0,0,0,0.1)" }}
    >
      <TypographyComponent
        sx={{ ml: "48px" }}
        variant="chatWindowHeading"
        component="h2"
      >
        {name}
      </TypographyComponent>
      <ImageComponent
        containerStyles={{ marginRight: "52px" }}
        width="53px"
        height="53px"
        source={img ? img : defaultImage}
        alt="profile-picture"
      />
    </StackComponent>
  );
};

export default UserInformation;
