import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import userSlice from "./user/userSlice";
import { playersSlice } from "./api/playersSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [playersSlice.reducerPath]: playersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiSlice.middleware, playersSlice.middleware]),
  devTools: true,
});
