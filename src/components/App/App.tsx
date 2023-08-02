import { Box } from "@mui/material";
import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <Box>
      <Header />
      <AppRoutes />
      <Footer />
    </Box>
  );
}

export default App;
