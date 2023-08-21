import { Box, Stack } from "@mui/material";
import AppRoutes from "../../routes/Routes";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect } from "react";
import { getCategories } from "../../store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import UserSignupForm from "../../components/User/UserSignupForm";
import { toggleForm } from "../../store/user/userSlice";
import UserLoginForm from "../../components/User/UserLoginForm";
import Notification from "../../components/Notification/Notification";

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

      <Notification />
    </Box>
  );
}

export default App;
