import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { MainRoute } from "../../utils/routerMain";
import { ReactComponent as FrameLogo } from "../../assets/svg/FrameLogo.svg";
import { ReactComponent as SettingIcon } from "../../assets/svg/settings.svg";
import { ReactComponent as LogOutIcon } from "../../assets/svg/Union.svg";
import { ReactComponent as OperatorIcon } from "../../assets/svg/operator.svg";
import { ReactComponent as SupportIcon } from "../../assets/svg/suport.svg";
import { Box } from "@mui/material";

const SidebarPage = () => {
  const navigate = useNavigate();

  const menuItemStyle = {
    ".ps-menu-label": {
      display: "flex",
      alignItems: "center",
      gap: "0 15px",
    },
    ".css-1bdadyq": {
      ":hover": {
        background: "#ffffff29",
        borderLeft: "4px solid #fff",
        transition: "all 0.2s linear",
      },
    },
  };
  const boxStyle = {
    margin: "20px 0",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    gap: "0 15px",
    cursor: "pointer",
  };
  return (
    <Sidebar
      rootStyles={{
        "& .ps-sidebar-container": {
          backgroundColor: "#0C2556",
          height: "100vh",
          position: "sticky",
          top: "0",
          color: "#fff",
        },
      }}
    >
      <Menu
        rootStyles={{
          padding: "25px 20px",
          cursor: "pointer",
          borderBottom: "1px solid #6c6b6b7f",
        }}
      >
        <FrameLogo onClick={() => navigate("/")} />
      </Menu>
      <Menu>
        {MainRoute.map((item) => (
          <MenuItem
            rootStyles={menuItemStyle}
            key={item?.id}
            routerLink={<NavLink to={item?.path} />}
            activestyle={{
              background: "#ffffff29",
              borderLeft: "4px solid #fff",
              transition: "all 0.2s linear",
            }}
          >
            {item?.icon}
            {item?.title}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        rootStyles={{
          marginTop: "90%",
        }}
      >
        <Box sx={boxStyle}>
          <OperatorIcon />
          <div>
            <p>Тех поддержка:</p>
            <p>+998 99 999 99 99</p>
          </div>
        </Box>
        <Box sx={boxStyle}>
          <SettingIcon />
          <p>Настройки</p>
        </Box>
        <Box sx={boxStyle}>
          <LogOutIcon />
          <p>Выйти</p>
        </Box>
        <Box sx={boxStyle}>
          <SupportIcon />
        </Box>
      </Menu>
    </Sidebar>
  );
};

export default SidebarPage;
