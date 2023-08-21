import { createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from "../../../api/categories";

type FetchProductsByCategoryPayload = {
  categoryId: number;
}

export const fetchProductsByCategoryAsync = createAsyncThunk(
  "categories/fetchProductsByCategory",
  async ({ categoryId }: FetchProductsByCategoryPayload) => {
    try {
      const response = await categoriesApi.fetchProductsByCategory(categoryId);
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch products for category ${categoryId}`);
    }
  }
);