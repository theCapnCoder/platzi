import { createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from "../../../api/categories";

type FetchCategoryPayload = {
  categoryId: number;
}

export const fetchCategoryAsync = createAsyncThunk(
  "categories/fetchCategory",
  async ({ categoryId }: FetchCategoryPayload) => {
    try {
      const response = await categoriesApi.fetchCategory(categoryId);
      return response;
    } catch (error) {
      throw new Error(`Failed to fetch category ${categoryId}`);
    }
  }
);