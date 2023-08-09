import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";
import Category from "../Categories/Category";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="platzi" element={<Home />}></Route>
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<Category />} />
    </Routes>
  );
};

export default AppRoutes;
