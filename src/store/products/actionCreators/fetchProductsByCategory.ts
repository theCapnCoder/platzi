import { createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../../api/products";

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async (productId: number) => {
    try {
      const response = await productsApi.fetchProduct(productId);
      return response;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);
