import { Box } from "@mui/material";
import Products from "../Products/Products";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Categories from "../Categories/Categories";
import { useEffect } from "react";
import { filterByPrice } from "../../store/products/productsSlice";
import { getProducts } from "../../store/products/actionCreators/getProducts";

const Home = () => {
  const {
    products,
    products: { list, filtered },
    categories,
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(100));
  }, [dispatch, list.length]);

  return (
    <Box>
      <Products products={products.list} amount={10} title="Products" />
      <Categories products={categories.list} amount={5} />
      <Products products={filtered} amount={5} title="Less then 100$" />
    </Box>
  );
};

export default Home;
