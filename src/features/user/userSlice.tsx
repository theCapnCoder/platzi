import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants";
import axios from "axios";

type User = {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

type CurrentUser = {
  email: string;
  password: string;
  name: string;
  avatar: string;
  role: string;
  id: number;
  creationAt: string;
  updatedAt: string;
}

export const createUser = createAsyncThunk(
  "user/createUser",
  async (payload: User, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/users`, payload);
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

type InitState = {
  currentUser: CurrentUser | null;
  cart: any[];
  isLoading: boolean;
  formType: string;
  showForm: boolean;
};

const initialState: InitState = {
  currentUser: null,
  cart: [],
  isLoading: false,
  formType: "signup",
  showForm: false,
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
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getUser.pending, (state) => {
    //   state.isLoading = true
    // })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    // builder.addCase(getUser.rejected, (state) => {
    //   state.isLoading = false
    // })
  },
});

export const { addItemToCart, toggleForm } = userSlice.actions;

export default userSlice.reducer;
