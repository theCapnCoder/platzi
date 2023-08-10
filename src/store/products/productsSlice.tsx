import { createSlice } from "@reduxjs/toolkit";
import { shuffle } from "../../utils/common";
import { getProducts } from "./actionCreators/getProducts";
import { InitState } from "./types";
import { getProductsByCategory } from "./actionCreators/getProductsByCategory";

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
    getRelatedProducts: (state, { payload }) => {
      const list = state.list.filter(({ category: { id } }) => id === payload);
      state.related = shuffle(list);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getProductsByCategory.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProductsByCategory.fulfilled, (state, action) => {
      state.list = action.payload;
      console.log(action.payload);
      state.isLoading = false;
    });
    builder.addCase(getProductsByCategory.rejected, (state) => {
      state.isLoading = false;
    })
  },
});

export const { filterByPrice, getRelatedProducts } = productsSlice.actions;

export default productsSlice.reducer;
