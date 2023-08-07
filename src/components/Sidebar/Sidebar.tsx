import {
  Box,
  List,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../../features/hook";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { list } = useAppSelector((state) => state.categories);

  return (
    <Box>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ fontSize: 20, fontWeight: "bold" }}
          >
            Categories{" "}
            <Box component={"span"} sx={{ fontSize: 12 }}>
              (Api)
            </Box>
          </ListSubheader>
        }
      >
        <ListItemText
          sx={{
            px: 2,
            "& .active": { color: "black" },
            "& .disable": { color: "grey" },
          }}
        >
          <NavLink
            to={`platzi/products/`}
            className={({ isActive }) => {
              return isActive ? "active" : "disable";
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <Typography>Products</Typography>
          </NavLink>
        </ListItemText>
      </List>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          "& a": { color: "grey" },
          "& a.active": { color: "black" },
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ fontSize: 18, fontWeight: "bold" }}
          >
            Categories{" "}
            <Box component={"span"} sx={{ fontSize: 12 }}>
              (Users)
            </Box>
          </ListSubheader>
        }
      >
        {list.map(({ id, name }) => (
          <NavLink
            to={`platzi/categories/${id}`}
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
            style={{
              textDecoration: "none",
            }}
          >
            <ListItemText
              key={id}
              primary={name}
              sx={{
                px: 2,
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "lightgray",
                  borderRadius: 4,
                },
              }}
            ></ListItemText>
          </NavLink>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
