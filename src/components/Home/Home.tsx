import { Box } from "@mui/material";
import Products from "../Products/Products";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Categories from "../Categories/Categories";
import { useEffect } from "react";
import { filterByPrice } from "../../store/products/productsSlice";
import { getProducts } from "../../store/products/actionCreators/getProducts";
import { selectAllProducts } from "../../store/newProducts/productsSlice";
import { fetchProductsAsync } from "../../store/newProducts/actionCreators/fetchProducts";

const Home = () => {
  const {
    products: { list, filtered },
    categories,
  } = useAppSelector((state) => state);

  const products = useAppSelector(selectAllProducts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return (
    <Box>
      <Products products={products} amount={10} title="Products" />
      <Categories products={categories.list} amount={5} />
      <Products products={filtered} amount={5} title="Less then 100$" />
    </Box>
  );
};

export default Home;
