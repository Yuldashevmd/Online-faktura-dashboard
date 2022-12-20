import { ButtonBase } from "@mui/material";
import React from "react";

const Button = ({
  width,
  height,
  bg,
  icon,
  title,
  font,
  children,
  onClick,
}) => {
  const bgChange = (color) => {
    switch (color) {
      case "primary":
        return (bg = "#2b63c0");
      case "danger":
        return (bg = "#FE346E");
      default:
        return (bg = "#fff");
    }
  };
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        width: width ?? "160px",
        height: height ?? "36px",
        background: bgChange(bg),
        borderRadius: "8px",
        color: bg === "#fff" ? "#252525" : "#Fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0 10px",
        transition: "all 0.2s ease",
        ":hover": {
          opacity: "0.9",
        },
      }}
    >
      {icon ? <img src={icon} alt="icon" /> : null}
      <p style={{ fontSize: font ?? "12px" }}>{title}</p>
      {children}
    </ButtonBase>
  );
};

export default Button;
