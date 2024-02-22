import React, { useState } from "react";
import StackComponent from "../../components/Base/StackComponent";
import LabelComponent from "../../components/Advance/LabelComponent";
import TypographyComponent from "../../components/Base/TypographyComponent";
import IconButtonComponent from "../../components/Base/IconButton";
import { Edit } from "@mui/icons-material";
import DoneIcon from "@mui/icons-material/Done";
import TextFieldComponent from "../../components/Base/TextFieldComponent";
import BoxComponent from "../../components/Base/BoxComponent";

const UpdateFormItem = ({
  editingDisabled,
  updateTextToState,
  label,
  value,
}) => {
  const [text, setText] = useState("");
  const [editMode, setEditMode] = useState(false);

  if (editingDisabled) {
    return (
      <StackComponent alignItems="flex-start" justifyContent="space-between">
        <StackComponent sx={{ width: "100%" }} spacing="8px" direction="column">
          <>
            <LabelComponent>{label} </LabelComponent>
            <TypographyComponent>{value}</TypographyComponent>
          </>
        </StackComponent>
      </StackComponent>
    );
  }

  return (
    <StackComponent alignItems="flex-start" justifyContent="space-between">
      <StackComponent sx={{ width: "100%" }} spacing="8px" direction="column">
        {editMode ? (
          <TextFieldComponent
            fullWidth
            label={label}
            value={text}
            onInputChange={(e) => setText(e)}
          />
        ) : (
          <>
            <LabelComponent>{label} </LabelComponent>
            <TypographyComponent>{value}</TypographyComponent>
          </>
        )}
      </StackComponent>
      {editMode ? (
        <IconButtonComponent
          onClick={() => {
            updateTextToState(text);
            setText("");
            setEditMode(false);
          }}
          sx={{ alignSelf: "flex-end", marginBottom: "8px" }}
        >
          <DoneIcon />
        </IconButtonComponent>
      ) : (
        <IconButtonComponent
          onClick={() => {
            setText(value);
            setEditMode((prevState) => !prevState);
          }}
        >
          <Edit />
        </IconButtonComponent>
      )}
    </StackComponent>
  );
};

export default UpdateFormItem;
