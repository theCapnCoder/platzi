import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";

import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import userSlice from "./user/userSlice";
import usersSlice from "./users/usersSlice";
import notificationsSlice from "./notifications/notificationsSlice";
import { playersSlice } from "./api/playersSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    user: userSlice,
    users: usersSlice,
    notifications: notificationsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [playersSlice.reducerPath]: playersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          services: {
            categories: categoriesSlice,
            products: productsSlice,
            user: userSlice,
            users: usersSlice,
          }
        }
      }
    }).concat([apiSlice.middleware, playersSlice.middleware]),
  devTools: true,
});
