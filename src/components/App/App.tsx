import { Box, Stack } from "@mui/material";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import { getCategories } from "../../features/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../features/hook";
import UserSignupForm from "../User/UserSignupForm";
import { toggleForm } from "../../features/user/userSlice";
import UserLoginForm from "../User/UserLoginForm";
import { getProducts } from "../../features/products/actionCreators/getProducts";

function App() {
  const dispatch = useAppDispatch();
  const { formType } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Box sx={{ p: 4 }}>
      <Header />

      {formType === "signup" && (
        <UserSignupForm
          onClose={() =>
            dispatch(toggleForm({ showForm: false, formType: "signup" }))
          }
        />
      )}

      {formType === "login" && (
        <UserLoginForm
          onClose={() =>
            dispatch(toggleForm({ showForm: false, formType: "login" }))
          }
        />
      )}

      <Stack direction={"row"}>
        <Sidebar />
        <AppRoutes />
      </Stack>

      <Footer />
    </Box>
  );
}

export default App;
