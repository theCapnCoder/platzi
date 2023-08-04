import { Avatar, Box, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../assets/img/logo.webp";
import { Favorite, ShoppingBag } from "@mui/icons-material";
import { useAppSelector } from "../../features/hook";
import { useDispatch } from "react-redux";
import { toggleForm } from "../../features/user/userSlice";

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCLick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true));
    }
  };

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
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          onClick={handleCLick}
          sx={{ cursor: "pointer" }}
        >
          {currentUser ? <Avatar src={currentUser.avatar} /> : <Avatar />}
          <Typography>{currentUser?.name || "User"}</Typography>
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
