import { Box } from "@mui/material";
import React from "react";

const Dot = ({ bg }) => {
  const SwitchColor = (color) => {
    switch (color) {
      case "success":
        return (color = "#0FBE7B");
      case "rejected":
        return (color = "#FE346E");
      case "proccess":
        return (color = "#FFA41D");
      case "draft":
        return (color = "#D9D9D9");
      default:
        return (color = "#fe0000");
    }
  };
  return (
    <Box
      width="12px"
      height="12px"
      borderRadius="50%"
      sx={{ background: SwitchColor(bg) }}
    ></Box>
  );
};

export default Dot;
