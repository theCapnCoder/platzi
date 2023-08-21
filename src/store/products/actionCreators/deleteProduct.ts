import { createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../../api/products";

export const deleteProductAsync = createAsyncThunk(
  "products/deleteProduct",
  async (productId: number) => {
    try {
      await productsApi.deleteProduct(productId);
      return productId;
    } catch (error) {
      throw new Error("Failed to delete product");
    }
  }
);