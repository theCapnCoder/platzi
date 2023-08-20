import { createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from "../../../api/categories";
import { Category } from "../type";

export const createCategoryAsync = createAsyncThunk(
  "categories/createCategory",
  async (categoryData: Category) => {
    try {
      const response = await categoriesApi.createCategory(categoryData);
      return response;
    } catch (error) {
      throw new Error("Failed to create category");
    }
  }
);