import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="platzi" element={<Home />}></Route>
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    </Routes>
  );
};

export default AppRoutes;
