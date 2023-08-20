import { createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from "../../../api/categories";

export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await categoriesApi.fetchCategories();
      return response;
    } catch (error) {
      throw new Error("Failed to fetch categories");
    }
  }
);
