import { Box } from "@mui/material";
import { useAppSelector } from "../../store/hook";
import { ListBar } from "./ListBar";

const Sidebar = () => {
  const { list } = useAppSelector((state) => state.categories);

  return (
    <Box sx={{ py: 4 }}>
      <ListBar title={"Categories"} subtitle={"Users"} list={list} />
    </Box>
  );
};

export default Sidebar;
