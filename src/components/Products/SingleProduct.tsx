import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getRelatedProducts } from "../../store/products/productsSlice";
import { ROUTES } from "../../utils/routes";
import { Box, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import {
  selectProductError,
  selectProductStatus,
  selectSelectedProduct,
} from "../../store/newProducts/productsSlice";
import { fetchProductAsync } from "../../store/newProducts/actionCreators/fetchProduct";
import { useAppDispatch } from "../../store/hook";

const SingleProduct = () => {
  // const { related } = useAppSelector((state) => state.products);
  const { productId } = useParams();
  const dispatch = useAppDispatch();
  const product = useSelector(selectSelectedProduct);
  const status = useSelector(selectProductStatus);
  const error = useSelector(selectProductError);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductAsync(Number(productId)));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      dispatch(getRelatedProducts(product.category.id));
    }
  }, [dispatch, product]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    navigate(ROUTES.HOME);
    return null; 
  }

  return (
    <Box p={3}>
      <Typography mb={3} variant="h3">
        SingleProduct
      </Typography>

      <ProductCard item={product} />
      {/* <Products products={related} amount={5} title="Related Products" /> */}
    </Box>
    
  );
};

export default SingleProduct;
