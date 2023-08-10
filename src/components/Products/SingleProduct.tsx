import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/api/apiSlice";
import { ROUTES } from "../../utils/routes";
import { Box, Typography } from "@mui/material";
import Product from "./Product";
import { useDispatch } from "react-redux";
import { getRelatedProducts } from "../../store/products/productsSlice";
import { useAppSelector } from "../../store/hook";
import Products from "./Products";

const SingleProduct = () => {
  const { related } = useAppSelector((state) => state.products);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery(id);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isFetching, isLoading, isSuccess, navigate]);

  useEffect(() => {
    if (data) {
      dispatch(getRelatedProducts(data.category.id));
    }
  }, [dispatch, data]);

  return (
    <Box p={3}>
      <Typography mb={3} variant="h3">
        SingleProduct
      </Typography>
      {isLoading && <Typography>Loading...</Typography>}
      {isSuccess && <Product item={data} />}
      <Products products={related} amount={5} title="Related Products"/>
    </Box>
  );
};

export default SingleProduct;
