import { Box, List, ListItemText, ListSubheader } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  subtitle: string;
  list: Array<{ id: number; name: string }>;
};

export const ListBar: React.FC<Props> = ({ title, subtitle, list }) => {
  return (
    <List
      sx={{
        width: 150,
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
          sx={{ mb: 2, fontSize: 18, lineHeight: "22px", fontWeight: "bold" }}
        >
          {title}{" "}
          <Box component={"span"} sx={{ fontSize: 12 }}>
            ({subtitle})
          </Box>
        </ListSubheader>
      }
    >
      {list.map(({ id, name }) => (
        <NavLink
          key={id}
          to={`platzi/categories/${id}`}
          className={({ isActive }) => {
            return isActive ? "active" : "";
          }}
          style={{
            textDecoration: "none",
          }}
        >
          <ListItemText
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
  );
};
