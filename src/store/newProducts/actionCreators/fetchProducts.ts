import { createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../../api/products";

export const fetchProductsAsync = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await productsApi.fetchProducts();
      return response;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  }
);
