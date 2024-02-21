import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const RippleCardWithoutBorders = ({ children, ...otherProps }) => {
  return (
    <Card sx={{ border: "none", boxShadow: "none" }} {...otherProps}>
      <CardActionArea>{children}</CardActionArea>
    </Card>
  );
};

export default RippleCardWithoutBorders;
