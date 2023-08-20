import { Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Categories from "../Categories/Categories";
import { useEffect } from "react";
import {
  selectAllProducts,
  selectFilteredProducts,
} from "../../store/products/selectors";
import { selectAllCategories } from "../../store/categories/categoriesSlice";
import { fetchProductsAsync } from "../../store/products/actionCreators/fetchProducts";
import { filterByPrice } from "../../store/products/productsSlice";
import Products from "../Products/Products";

const Home = () => {
  const products = useAppSelector(selectAllProducts);
  const filtered = useAppSelector(selectFilteredProducts);
  const categories = useAppSelector(selectAllCategories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!products.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, products.length]);

  return (
    <Box>
      <Products products={products} amount={10} title="Products" />
      <Categories products={categories} amount={5} />
      <Products products={filtered} amount={5} title="Less then 100$" />
    </Box>
  );
};

export default Home;
