import React, { Suspense } from "react";
import { Box } from "@mui/material";
import SidebarPage from "../Sidebar";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box display="flex">
      <SidebarPage />
      <Box display="flex" flexDirection="column" sx={{ background: "#F8FAFC" }}>
        <Navbar />
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default Layout;
