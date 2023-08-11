import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../type";
import { fetchProductsAsync } from "./actionCreators/fetchProducts";
import { fetchProductAsync } from "./actionCreators/fetchProduct";
import { updateProductAsync } from "./actionCreators/updateProduct";
import { deleteProductAsync } from "./actionCreators/deleteProduct";
import { createProductAsync } from "./actionCreators/createProduct";
import { ProductsState } from "./type";

const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  status: "idle",
  error: null,
};

const newProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })

      .addCase(fetchProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })

      .addCase(createProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createProductAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products.push(action.payload);
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })

      .addCase(updateProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProductAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(updateProductAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })

      .addCase(deleteProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const deletedProductId = action.payload;
        state.products = state.products.filter(
          (product) => product.id !== deletedProductId
        );
      })
      .addCase(deleteProductAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectAllProducts = (state: RootState) =>
  state.newProducts.products;
export const selectSelectedProduct = (state: RootState) =>
  state.newProducts.selectedProduct;
export const selectProductStatus = (state: RootState) =>
  state.newProducts.status;
export const selectProductError = (state: RootState) => state.newProducts.error;

export default newProductsSlice.reducer;
