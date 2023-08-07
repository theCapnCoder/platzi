import React, { useState } from "react";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { Box, Paper, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const {
    data: products = [],
    isLoading,
    isSuccess,
  } = useGetProductsQuery({
    title: searchValue,
  });
  console.log("products", products);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box>
      <TextField
        placeholder="Search"
        onChange={handleValueChange}
        sx={{
          position: "relative",
          width: 300,
          "& .MuiInputBase-input": { py: 1 },
        }}
      />

      {isSuccess && Boolean(searchValue.length) && products.length ? (
        <Paper
          elevation={10}
          sx={{ p: 1, width: 300, position: "absolute", borderRadius: 3 }}
        >
          <Stack spacing={1} sx={{ maxHeight: 300, overflow: "auto" }}>
            {(products as Product[]).map(({ id, title, images }) => (
              <Link
                to={`platzi/products/${id}`}
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
      ) : null}
    </Box>
  );
};

export default Search;
