import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hook";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductsByCategory } from "../../features/products/actionCreators/getProductsByCategory";
import Products from "../Products/Products";

const Category = () => {
  const categories = useAppSelector((state) => state.categories);
  const isLoadingCategories = categories.isLoading;
  const { isLoading: isLoadingProducts, list } = useAppSelector(
    (state) => state.products
  );

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const nameCategory = isLoadingCategories
    ? categories.list.find((item) => item.id === Number(id))?.name || ""
    : "";

  useEffect(() => {
    if (id) {
      dispatch(getProductsByCategory({ id: Number(id) }));
    }
  }, [id, dispatch]);

  return (
    <Box>
      {isLoadingProducts ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box>
          <Products products={list} amount={10} title={nameCategory} />
        </Box>
      )}
    </Box>
  );
};

export default Category;
