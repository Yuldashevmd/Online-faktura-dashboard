import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import "./index.css";
import Root from "./root";
import Context from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <ProSidebarProvider>
          <Root />
        </ProSidebarProvider>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
