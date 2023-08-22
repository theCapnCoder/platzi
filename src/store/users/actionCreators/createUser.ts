import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../../api/users";
import { User } from "../type";

export const createUserAsync = createAsyncThunk(
  'users/createUser',
  async (userData: Omit<User, 'id'>) => {
    try {
      const newUser = await userApi.createUser(userData);
      return newUser;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  });
