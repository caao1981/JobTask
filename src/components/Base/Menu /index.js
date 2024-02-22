import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButtonComponent from "../IconButton";

export default function MenuComponent({
  icon,
  isIcon,
  menuOptions,
  ...otherProps
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {isIcon ? (
        <IconButtonComponent
          sx={{ p: "0" }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {icon}
        </IconButtonComponent>
      ) : (
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
      )}
      <Menu
        {...otherProps}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuOptions.map((eachMenuOption) => (
          <>
            <MenuItem
              key={eachMenuOption.name}
              onClick={(e) => {
                if (eachMenuOption.clickSideEffects) {
                  eachMenuOption.clickSideEffects(eachMenuOption.name);
                }
                handleClose();
              }}
            >
              {eachMenuOption.label}
            </MenuItem>
          </>
        ))}
      </Menu>
    </div>
  );
}

MenuComponent.defaultProps = {
  icon: <></>,
  isIcon: false,

  menuOptions: [
    {
      label: "Profile",
      name: "profile",
      clickSideEffects: (name) => {
        return;
      },
    },
    {
      label: "My Account",
      name: "my-account",
    },
    {
      label: "Logout",
      name: "logout",
    },
  ],
};
