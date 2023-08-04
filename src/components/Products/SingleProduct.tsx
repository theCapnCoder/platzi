import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";
import { Box, Typography } from "@mui/material";
import Product from "./Product";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery(id);

  console.log(data);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isFetching, isLoading, isSuccess, navigate]);

  return (
    <Box p={3}>
      <Typography mb={3} variant="h3">SingleProduct</Typography>
      <Product />
    </Box>
  );
};

export default SingleProduct;
