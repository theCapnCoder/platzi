import { createAsyncThunk } from "@reduxjs/toolkit";
import productsApi from "../../../api/products";

export type CreateProduct = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

export const createProductAsync = createAsyncThunk(
  "products/createProduct",
  async (productData: CreateProduct) => {
    try {
      const response = await productsApi.createProduct(productData);
      return response;
    } catch (error) {
      throw new Error("Failed to create product");
    }
  }
);