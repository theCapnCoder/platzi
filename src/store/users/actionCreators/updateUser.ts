import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../../api/users";
import { User } from "../type";

export const updateUserAsync = createAsyncThunk(
  'users/updateUser',
  async ({ id, updatedData }: { id: number; updatedData: Partial<User> }) => {
    try {
      const updatedUser = await userApi.updateUser(id, updatedData);
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to update user');
    }
  });
