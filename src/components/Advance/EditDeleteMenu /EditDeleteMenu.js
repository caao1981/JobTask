import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButtonComponent from "../../Base/IconButton";
import ImageComponent from "../../Base/ImageComponent";
import editIcon from "./../../../assets/icons/common/Edit.png";
import deleteIcon from "./../../../assets/icons/common/Delete.png";
import TypographyComponent from "../../Base/TypographyComponent";
import ButtonComponent from "../../Base/ButtonComponent";
import { useTheme } from "@emotion/react";

const CustomMenuItem = ({
  actionHandler,
  handleClose,
  label,
  icon,
  backgroundColor,
  color,
}) => {
  return (
    <MenuItem
      disableGutters
      sx={{
        p: "10px",
        "&:hover": {
          backgroundColor: "transparent",
        },
      }}
      onClick={(e) => {
        actionHandler();
        handleClose();
      }}
      disableTouchRipple
    >
      <ButtonComponent
        alignItems="center"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "6.25px",
          p: "10.25px",
          background: backgroundColor,
          borderRadius: "5px",
          width: "100%",
          textTransform: "capitalize",
          fontFamily: "inherit",
          boxShadow: "none",
          color: `${color}`,
          "&:hover": {
            backgroundColor: color,
            color: "#ffffff",
          },
        }}
      >
        <ImageComponent
          containerStyles={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          height="auto"
          width="7.5px"
          source={icon}
        />
        <TypographyComponent>{label}</TypographyComponent>
      </ButtonComponent>
    </MenuItem>
  );
};

export default function EditDeleteMenu({
  icon,
  isIcon,
  editHandler,
  deleteHandler,
  ...otherProps
}) {
  const theme = useTheme();
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
        dense
        {...otherProps}
        id="basic-menu"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          borderRadius: "10px",
          "& *": {
            fontSize: "10px",
            fontWeight: 400,
          },
          "& .MuiPaper-root": {
            width: "150px",
          },
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {/* <CustomMenuItem
          color={theme.palette.primary.main}
          actionHandler={editHandler}
          icon={editIcon}
          label={"Edit"}
          handleClose={handleClose}
          backgroundColor="rgba(91, 147, 255, 0.05)"
        /> */}
        <CustomMenuItem
          color={theme.palette.error.main}
          backgroundColor="rgba(231, 29, 54, 0.05)"
          actionHandler={deleteHandler}
          icon={deleteIcon}
          label={"Delete"}
          handleClose={handleClose}
        />
      </Menu>
    </div>
  );
}

EditDeleteMenu.defaultProps = {
  icon: <></>,
  isIcon: false,
  editHandler: () => {
    return;
  },
  deleteHandler: () => {
    return;
  },
};
