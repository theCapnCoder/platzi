import { createAsyncThunk } from "@reduxjs/toolkit";
import userApi from "../../../api/users";

export const checkEmailAvailabilityAsync = createAsyncThunk(
  'users/checkEmailAvailability',
  async (email: string) => {
    try {
      const response = await userApi.checkEmail(email);
      return response.isAvailable;
    } catch (error) {
      throw new Error('Failed to check email availability');
    }
  });
