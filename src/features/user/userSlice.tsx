import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

// export const getUser = createAsyncThunk(
//   "categories/getCategories",
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios(`${BASE_URL}/categories`);
//       const data = await response.data;
//       return data;
//     } catch (error) {
//       console.log(error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

type InitState = {
  currentUsser: any[];
  cart: any[];
  isLoading: boolean;
};

const initialState: InitState = {
  currentUsser: [],
  cart: [],
  isLoading: false,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    addItemToCart: (state, { payload }) => {
      let newCart = [...state.cart];
      console.log(newCart);
      const found = state.cart.find(({ id }) => id === payload.id);
      console.log(found);
      if (found) {
        newCart = newCart.map((item) => {
          return item.id === payload.id
            ? {
                ...item,
                quantity: payload.quatnity || item.quantity + 1,
              }
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }

      console.log(newCart);
      state.cart = newCart;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getUser.pending, (state) => {
    //   state.isLoading = true
    // })
    // builder.addCase(getUser.fulfilled, (state, action) => {
    //   state.list = action.payload;
    // })
    // builder.addCase(getUser.rejected, (state) => {
    //   state.isLoading = false
    // })
  },
});

export const { addItemToCart } = userSlice.actions;

export default userSlice.reducer;
