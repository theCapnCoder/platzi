import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/constants";
import axios from "axios";

type Payload = {
  id: number;
};

export const getProductsByCategory = createAsyncThunk(
  "products/getProductsByCategory",
  async (payload: Payload, thunkAPI) => {
    try {
      // https://api.escuelajs.co/api/v1/categories/1/products
      const response = await axios(`${BASE_URL}/categories/${payload.id}/products`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);