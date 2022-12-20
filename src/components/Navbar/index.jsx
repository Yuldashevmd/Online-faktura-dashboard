import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as NotificationIcon } from "../../assets/navSvg/notification.svg";
import { ReactComponent as WalletIcon } from "../../assets/navSvg/wallet.svg";
import { ReactComponent as SetupIcon } from "../../assets/navSvg/setup.svg";
import { ReactComponent as QuestionIcon } from "../../assets/navSvg/question.svg";
import Button from "../GenericComp/Button";

const Navbar = ({ info }) => {
  const navMainStyle = {
    width: "82vw",
    maxWidth: "1440px",
    height: "95px",
    background: "#FFFFFF !important",
    boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.08)",
    display: "flex",
    alignItems: "center",
    padding: "0 32px",
    fontSize: "14px",
    justifyContent: "space-between",
    position: "relative",
    top: "0",
  };
  return (
    <Box sx={navMainStyle}>
      <Box>
        <p>{info?.user?.fullName ?? "USER FULL NAME"}</p>
        <span>{info?.user?.inn ?? "566800736"}</span>
      </Box>
      <Box display="flex" alignItems="center" gap="0 45px">
        <Box display="flex" alignItems="center" gap="0 10px">
          <WalletIcon />
          <Box>
            <p>Ваш баланс:</p>
            <Typography
              variant="p"
              sx={{
                color: "#2B63C0",
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "21px",
              }}
            >
              {info?.user?.balance ?? "150.000"} сум
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button bg="primary" title="Активировать тариф" />
        </Box>
        <Box>
          <NotificationIcon style={{ cursor: "pointer" }} />
        </Box>
        <Box>
          <QuestionIcon style={{ cursor: "pointer" }} />
        </Box>
        <Box>
          <SetupIcon style={{ cursor: "pointer" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
