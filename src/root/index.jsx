import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../page/Error";
import { MainRoute } from "../utils/routerMain";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<ErrorPage />} />
      <Route element={<Layout />}>
        {MainRoute.map((item) => (
          <Route key={item?.id} path={item?.path} element={item?.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default Root;
