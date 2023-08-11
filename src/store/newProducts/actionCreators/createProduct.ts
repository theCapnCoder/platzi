import { createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../../api/products";

export const createProductAsync = createAsyncThunk(
  "products/createProduct",
  async (productData: any) => {
    try {
      const response = await productsApi.createProduct(productData);
      return response;
    } catch (error) {
      throw new Error("Failed to create product");
    }
  }
);