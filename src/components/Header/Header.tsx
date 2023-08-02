import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../assets/img/logo.webp";
import { Favorite, HeadphonesRounded, ShoppingBag } from "@mui/icons-material";

const Header = () => {
  return (
    <Stack direction={"row"}>
      <Box flexGrow={1} sx={{ maxWidth: 100 }}>
        <Link to={ROUTES.HOME}>
          <Box
            component={"img"}
            src={logo}
            sx={{ width: 50, height: 50, borderRadius: 2 }}
          />
        </Link>
      </Box>

      <Stack direction={"row"} justifyContent={"space-between"} flexGrow={1}>
        <Stack direction={"row"} spacing={2}>
          <Avatar />
          <Typography>User</Typography>
        </Stack>

        <TextField></TextField>

        <Stack direction={"row"} spacing={1}>
          <Favorite />
          <ShoppingBag />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
