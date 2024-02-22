import React from "react";
import StackComponent from "../../../Base/StackComponent";
import ImageComponent from "../../../Base/ImageComponent";
import TypographyComponent from "../../../Base/TypographyComponent";
import DividerComponent from "../../../Base/DividerComponent";
import { useTheme } from "@emotion/react";
import RippleCardWithoutBorders from "../../../Advance/RippleCardWithoutBorders";
import defaultImage from "./../../../../assets/images/temp/profilePicture (1).png";

const UsersList = ({ users }) => {
  const theme = useTheme();

  return (
    <StackComponent direction="column">
      {users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <RippleCardWithoutBorders>
              <StackComponent
                alignItems="center"
                sx={{
                  height: "86px",
                  borderBottom: `1px solid rgba(0,0,0,0.1)`,
                }}
              >
                <ImageComponent
                  containerStyles={{ marginRight: "15px" }}
                  width="38px"
                  height="38px"
                  source={user.img ? user.img : defaultImage}
                />
                <StackComponent sx={{ flexGrow: 1 }} direction="column">
                  <TypographyComponent
                    component="h5"
                    variant="bodySlightlyBold"
                  >
                    {user.name}
                  </TypographyComponent>
                  <TypographyComponent
                    component="p"
                    sx={{ color: theme.palette.grey[400] }}
                    variant="bodySmall"
                  >
                    {user.role}
                  </TypographyComponent>
                </StackComponent>
                <TypographyComponent
                  variant="bodySmall"
                  component="p"
                  sx={{ color: theme.palette.grey[400] }}
                >
                  {user.lastMessage}
                </TypographyComponent>
              </StackComponent>
            </RippleCardWithoutBorders>
          </React.Fragment>
        );
      })}
    </StackComponent>
  );
};

export default UsersList;
