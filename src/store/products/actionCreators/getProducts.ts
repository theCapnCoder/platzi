import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${BASE_URL}/products`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
