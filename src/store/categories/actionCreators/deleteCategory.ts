import { createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from "../../../api/categories";

export const deleteCategoryAsync = createAsyncThunk(
  "categories/deleteCategory",
  async (categoryId: number) => {
    try {
      const response = await categoriesApi.deleteCategory(categoryId);
      return response;
    } catch (error) {
      throw new Error(`Failed to delete category ${categoryId}`);
    }
  }
)