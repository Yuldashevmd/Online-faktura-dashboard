import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import "./index.css";
import Root from "./root";
import Context from "./context";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Context>
        <ProSidebarProvider>
          <Root />
        </ProSidebarProvider>
      </Context>
    </BrowserRouter>
  </Provider>
);
