import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  relative_height_size_generator,
  relative_width_size_generator,
} from "utils/helpers";
import { ButtonBase, IconButton } from "@mui/material";
import IconButtonComponent from "../IconButton";
import BoxComponent from "../BoxComponent";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus({
  label,
  width,
  fullWidth,
  rigidWidth,
  btnProps,
  transparent,
  iconBtn,
  children,
  customStyles,
  containerStyles,
  options,
              width: "max-content",
              height: "max-content",
              margin: 0,
              padding: 0,
              justifyContent: "space-between",
              ...customStyles,
            }}
            id="demo-customized-Button"
            variant="contained"
            disableElevation
            onClick={handleClick}
            // endIcon={<KeyboardArrowDownIcon />}
          >
            {children}
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            sx={{ zIndex: 100000000 }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {options.map((eachOption, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  eachOption.clickAction(eachOption);
                  handleClose();
                }}
                disableRipple
              >
                <EditIcon />
                {eachOption.label}
              </MenuItem>
            ))}
          </StyledMenu>
        </BoxComponent>
      </>
    );
  return (
    <div>
      <Button
        {...btnProps}
        sx={
          customStyles
            ? { ...customStyles }
            : {
                background: "#ffff",
                color: "#000",
                textTransform: "capitalize",
                width: fullWidth ? "100%" : width,
                minWidth: rigidWidth ? "auto" : "max-content",
                padding: `${relative_height_size_generator(
                  14
                )} ${relative_width_size_generator(
                  30
                )} ${relative_height_size_generator(
                  14
                )} ${relative_width_size_generator(41)}`,
                "&:hover": {
                  background: "#c4c4c4",
                },
              }
        }
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {label ? label : children}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((eachOption, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              eachOption.clickAction(eachOption);
              handleClose();
            }}
            disableRipple
          >
            <EditIcon />
            {eachOption.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}

CustomizedMenus.defaultProps = {
  width: "max-content",
  fullWidth: false,
  rigidWidth: false,
  manuallyBuildBtn: false,
  withIconBtn: false,
  options: [
    {
      value: "edit",
      label: "Edit",
      clickAction: (e) => {
        return;
      },
    },
    {
      value: "delete",
      label: "Delete",
      clickAction: (e) => {
        return;
      },
    },
  ],
};
