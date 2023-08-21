import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductsAsync } from "../../store/products/actionCreators/fetchProductsByCategory";
import Products from "../Products/Products";

const Category = () => {
  const categories = useAppSelector((state) => state.categories);
  const isLoadingCategories = categories.isLoading;
  const { status, products } = useAppSelector(
    (state) => state.products
  );

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const nameCategory = isLoadingCategories
    ? categories.list.find((item) => item.id === Number(id))?.name || ""
    : "";

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsAsync(Number(id)));
    }
  }, [id, dispatch]);

  return (
    <Box>
      {status === 'loading' ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box>
          <Products products={products} amount={10} title={nameCategory} />
        </Box>
      )}
    </Box>
  );
};

export default Category;
