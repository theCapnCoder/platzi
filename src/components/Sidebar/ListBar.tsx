import { Box, List, ListItemText, ListSubheader } from "@mui/material";
import { NavLink } from "react-router-dom";

export type ListItem = {
  id: number;
  name: string;
  url: string;
}

type Props = {
  title: string;
  subtitle: string;
  list: ListItem[];
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
    >
      {list.map(({ id, name, url }) => (
        <NavLink
          key={id}
          to={`platzi/${url}`}
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
