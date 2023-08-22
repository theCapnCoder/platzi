import { Box } from "@mui/material";
import { ListBar } from "./ListBar";
import { menu } from "./data";

const Sidebar = () => {
  return (
    <Box sx={{ py: 4 }}>
      <ListBar title={"Categories"} subtitle={"Users"} list={menu} />
    </Box>
  );
};

export default Sidebar;
