import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/constants";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${baseURL}/products`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: Array<string>;
  creationAt: string;
  updatedAt: string;
  category: Category;
};

type InitState = {
  list: Product[];
  filtered: any[];
  related: any[];
  isLoading: boolean;
};

const initialState: InitState = {
  list: [],
  filtered: [],
  related: [],
  isLoading: false,
};

const productsSlice = createSlice({
  initialState,
  name: "categories",
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.list.filter(({ price }) => {
        return price < payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { filterByPrice } = productsSlice.actions;

export default productsSlice.reducer;
