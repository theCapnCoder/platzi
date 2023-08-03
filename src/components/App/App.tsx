import { Box, Stack } from "@mui/material";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect } from "react";
import { getCategories } from "../../features/categories/categoriesSlice";
import { useAppDispatch } from "../../features/hook";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Box>
      <Header />

      <Stack direction={"row"}>
        <Sidebar />
        <AppRoutes />
      </Stack>
      
      <Footer />
    </Box>
  );
}

export default App;
