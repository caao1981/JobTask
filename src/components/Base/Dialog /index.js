import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import BoxComponent from "../BoxComponent";
import TypographyComponent from "../TypographyComponent";
import DividerComponent from "../DividerComponent";
import ButtonComponent from "../ButtonComponent";
import { styles } from "./style";
import { relative_height_size_generator } from "utils/helpers";

function FormDialog({
  open,
  handleClose,
  title,
  subTitle,
  children,
  handleSave,
  ButtonText,
  ...otherProps
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      sx={{ border: "1px solid rgba(18, 18, 18, 0.2)", borderRadius: "10px" }}
    >
      <BoxComponent sx={styles.mainDiv}>
        <BoxComponent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: relative_height_size_generator(1.81),
            // flexWrap: "wrap",
            mb: relative_height_size_generator(49),
          }}
        >
          <BoxComponent sx={styles.headerDiv}>
            <TypographyComponent
              sx={styles.dialogText}
              variant="DialogText"
              component="p"
            >
              {title}
            </TypographyComponent>
          </BoxComponent>
          {subTitle && (
            <TypographyComponent
              sx={styles.dialogSubtitle}
              variant="DialogSubTitle"
              component="p"
            >
              {subTitle}
            </TypographyComponent>
          )}
        </BoxComponent>
        <DialogContent
          sx={{
            p: "0px",
            overflow: "visible",
            mb: relative_height_size_generator(76),
          }}
        >
          {children}
        </DialogContent>
        <DialogActions sx={styles.dialogAction}>
          {/* <BoxComponent sx={styles.buttonBox}> */}
          <ButtonComponent sx={styles.saveButton} onClick={handleSave}>
            {ButtonText}
          </ButtonComponent>
          {/* </BoxComponent> */}
        </DialogActions>
      </BoxComponent>
    </Dialog>
  );
}

export default FormDialog;

FormDialog.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  handleSave: PropTypes.func,
  ButtonText: PropTypes.string,
};

FormDialog.defaultProps = {
  open: false,
  children: <></>,
  handleClose: () => {},
  title: "I am title",
  subTitle: undefined,
  handleSave: () => {},
  ButtonText: "Next",
};
