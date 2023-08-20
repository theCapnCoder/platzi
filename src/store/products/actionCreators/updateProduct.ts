import { createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../../api/products";

export const updateProductAsync = createAsyncThunk(
  "products/updateProduct",
  async ({
    productId,
    productData,
  }: {
    productId: number;
    productData: any;
  }) => {
    try {
      const response = await productsApi.updateProduct(productId, productData);
      return response;
    } catch (error) {
      throw new Error("Failed to update product");
    }
  }
);