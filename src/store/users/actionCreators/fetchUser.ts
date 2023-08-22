import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../../api/users";

export const fetchUserAsync = createAsyncThunk(
  'users/fetchUser',
  async (userId: number) => {
    try {
      const user = await userApi.fetchUser(userId);
      return user;
    } catch (error) {
      throw new Error('Failed to fetch user');
    }
  });
