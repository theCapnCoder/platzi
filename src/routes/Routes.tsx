import { Route, Routes } from "react-router-dom";

import Category from "../pages/Categories/Category";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import SingleProduct from "../pages/Products/SingleProduct";
import Users from "../pages/Users/Users";

import { ROUTES } from "../utils/routes";

const AppRoutes = () => {
  console.log(ROUTES.CATEGORY)
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />}></Route>
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<Category />} />
      <Route path={ROUTES.USER} element={<Users />} />
    </Routes>
  );
};

export default AppRoutes;
