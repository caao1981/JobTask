import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const fabStyle = {
  position: "absolute",
  bottom: 100,
  right: 100,
};

function FloatingActionButton({ handleClick, ...props }) {
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${transitionDuration.exit}ms`,
      }}
      unmountOnExit
    >
      <Fab
        {...props}
        onClick={() => handleClick()}
        sx={fabStyle}
        aria-label={"Add Service"}
        color={"primary"}
      >
        {<AddIcon />}
      </Fab>
    </Zoom>
  );
}

FloatingActionButton.defaultProps = {
  handleClick: (e) => {
    return;
  },
};

export default FloatingActionButton;
