import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${BASE_URL}/categories`);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
)

type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};


type InitState = {
  list: Category[],
  isLoading: boolean,
}

const initialState: InitState = {
  list: [],
  isLoading: false
}

const categoriesSlice = createSlice({
  initialState,
  name: "categories",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.list = action.payload;
    })
    builder.addCase(getCategories.rejected, (state) => {
      state.isLoading = false
    })
  }
})

export default categoriesSlice.reducer;