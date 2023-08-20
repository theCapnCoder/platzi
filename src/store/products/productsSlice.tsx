import { createSlice } from "@reduxjs/toolkit";
import { fetchProductsAsync } from "./actionCreators/fetchProducts";
import { fetchProductAsync } from "./actionCreators/fetchProduct";
import { updateProductAsync } from "./actionCreators/updateProduct";
import { deleteProductAsync } from "./actionCreators/deleteProduct";
import { createProductAsync } from "./actionCreators/createProduct";
import { ProductsState } from "./type";
import { shuffle } from "../../utils/common";

const initialState: ProductsState = {
  products: [],
  selectedProduct: null,
  status: "idle",
  related: [],
  filtered: [],
  error: null,
};

const newProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByPrice: (state, { payload }) => {
      state.filtered = state.products.filter(({ price }) => {
        return price < payload;
      });
    },
    getRelatedProducts: (state, { payload }) => {
      const list = state.products.filter(({ category: { id } }) => id === payload);
      state.related = shuffle(list);
    },
  },
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
        console.log("enter");
        const deletedProductId = action.payload;
        console.log(deletedProductId, state, state.products);
        console.log(state.status, JSON.stringify(state))
        state.products.map(product => console.log(product));
        state.products = state.products.filter((product) => {
          console.log(product.id, deletedProductId);
          return product.id !== deletedProductId;
        });
      })
      .addCase(deleteProductAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { filterByPrice, getRelatedProducts } = newProductsSlice.actions;

export default newProductsSlice.reducer;
