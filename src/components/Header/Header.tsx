import {
  Avatar,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  Link as MuLink,
  Autocomplete,
  CircularProgress,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import logo from "../../assets/img/logo.webp";
import { Favorite, ShoppingBag } from "@mui/icons-material";
import { useAppSelector } from "../../features/hook";
import { useDispatch } from "react-redux";
import { ToggleAction, toggleForm } from "../../features/user/userSlice";
import { useState } from "react";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import React from "react";
import Search from "./Search";

type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
};

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");

  const {
    data: products = [],
    isLoading,
    isSuccess,
  } = useGetProductsQuery({
    title: searchValue,
  });
  console.log(products);

  // const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchValue(e.target.value);
  // };

  const handleValueChange = (event: React.ChangeEvent<{}>, name: string) => {
    if (name !== null) {
      // setSearchValue(() => name);
    }
  };

  const handleCLick = (type: ToggleAction["payload"]["formType"]) => {
    if (!currentUser) {
      dispatch(toggleForm({ showForm: true, formType: type }));
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
          sx={{ cursor: "pointer" }}
        >
          <Stack direction={"row"} spacing={1}>
            {currentUser ? (
              <MuLink href={ROUTES.PROFILE} underline="none">
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Avatar src={currentUser?.avatar} />
                  <Typography>{currentUser.name}</Typography>
                </Stack>
              </MuLink>
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

        <Box>
          <TextField
            placeholder="Search"
            sx={{
              position: "relative",
              width: 300,
              "& .MuiInputBase-input": { py: 1 },
            }}
          />

          {isSuccess && (
            <Paper
              elevation={10}
              sx={{ p: 1, width: 300, position: "absolute", borderRadius: 3 }}
            >
              <Stack spacing={1} sx={{ maxHeight: 300, overflow: "auto" }}>
                {(products as Product[]).map(({ id, title, images }) => (
                  <Link
                    to={`platzi/categories/${id}`}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "black",
                    }}
                  >
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <Box sx={{ width: 50, height: 50 }}>
                        <Box
                          component={"img"}
                          src={images[0]}
                          sx={{
                            flexShrink: 1,
                            flexGrow: 0,
                            margin: "auto",
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </Box>
                      <Typography>{title}</Typography>
                    </Stack>
                  </Link>
                ))}
              </Stack>
            </Paper>
          )}
        </Box>

        <Stack direction={"row"} spacing={1}>
          <Favorite />
          <ShoppingBag />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
