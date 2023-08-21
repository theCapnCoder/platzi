import { RootState } from "../type";

export const selectAllProducts = (state: RootState) => state.products.products;
export const selectSelectedProduct = (state: RootState) => state.products.selectedProduct;
export const selectRelatedProducts = (state: RootState) => state.products.related;
export const selectFilteredProducts = (state: RootState) => state.products.filtered;
export const selectProductStatus = (state: RootState) => state.products.status;
export const selectProductError = (state: RootState) => state.products.error;