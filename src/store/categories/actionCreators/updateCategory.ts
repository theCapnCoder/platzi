import { createAsyncThunk } from "@reduxjs/toolkit";
import categoriesApi from "../../../api/categories";
import { Category } from "../type";

type UpdateCategoryPayload = {
  id: number;
  categoryData: Partial<Category>;
}

export const updateCategoryAsync = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, categoryData }: UpdateCategoryPayload) => {
    try {
      const response = await categoriesApi.updateCategory(id, categoryData);
      return response;
    } catch (error) {
      throw new Error(`Failed to update category ${id}`);
    }
  }
);