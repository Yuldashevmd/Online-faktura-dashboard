import React, { createContext } from "react";

export const UseContext = createContext();
const Context = ({ children }) => {
  return <UseContext.Provider value={""}>{children}</UseContext.Provider>;
};

export default Context;
