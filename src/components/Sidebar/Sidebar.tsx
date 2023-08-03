import { Box, List, ListItemText, ListSubheader } from "@mui/material";
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
            sx={{ fontSize: 24, fontWeight: "bold" }}
          >
            Categories
          </ListSubheader>
        }
      >
        {list.map(({ id, name }) => (
          <ListItemText
            key={id}
            sx={{
              "& .active": { color: "black" },
              "& .disable": { color: "grey" },
            }}
          >
            <NavLink
              to={`platzi/categories/${id}`}
              className={({ isActive }) => {
                return isActive ? "active" : "disable";
              }}
              style={{
                textDecoration: "none",
              }}
            >
              {name}
            </NavLink>
          </ListItemText>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
