import { createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../../api/products";

export const fetchProductAsync = createAsyncThunk(
  "products/fetchProduct",
  async (productId: number) => {
    try {
      const response = await productsApi.fetchProduct(productId);
      return response;
    } catch (error) {
      throw new Error("Failed to fetch product");
    }
  }
);