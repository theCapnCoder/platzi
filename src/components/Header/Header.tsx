import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../assets/img/logo.webp";
import { Favorite, ShoppingBag } from "@mui/icons-material";
import { useAppSelector } from "../../features/hook";
import { useDispatch } from "react-redux";
import { ToggleAction, toggleForm } from "../../features/user/userSlice";
import Search from "./Search";

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleCLick = (type: ToggleAction["payload"]["formType"]) => {
    if (!currentUser) {
      dispatch(toggleForm({ showForm: true, formType: type }));
    }
  };

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        py: 3,
        px: 5,
        backgroundColor: "lightgray",
        borderRadius: 4,
      }}
    >
      <Box flexGrow={1} sx={{ maxWidth: 130, margin: "auto 0" }}>
        <Link to={ROUTES.HOME} style={{ margin: "auto 0" }}>
          <Box
            sx={{
              cursor: "pointer",
              width: 50,
              height: 50,
            }}
          >
            <Box
              component={"img"}
              src={logo}
              sx={{ width: "100%", height: "100%", borderRadius: 2 }}
            />
          </Box>
        </Link>
      </Box>

      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexGrow={1}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          sx={{ cursor: "pointer" }}
        >
          <Stack direction={"row"} spacing={1}>
            {currentUser ? (
              <Link
                to={ROUTES.PROFILE}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "black",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Avatar src={currentUser?.avatar} />
                  <Typography>{currentUser.name}</Typography>
                </Stack>
              </Link>
            ) : (
              <>
                <Button
                  onClick={() => handleCLick("login")}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  onClick={() => handleCLick("signup")}
                  variant="contained"
                >
                  Sign Up
                </Button>
              </>
            )}
          </Stack>
        </Stack>

        <Search />

        <Stack direction={"row"} spacing={1}>
          <Favorite />
          <ShoppingBag />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
