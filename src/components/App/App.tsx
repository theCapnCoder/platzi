import { Box, Stack } from "@mui/material";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

function App() {
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
