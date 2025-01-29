import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../actions/productActions";

export const initialState = {
  items: [],
  id: "",
  total: null,
  created_at: "",
  updated_at: "",
  isLoading: false,
  statusCode: 0,
  message: null,
};

export const createCart = createAsyncThunk(
  "create_cart",
  async (payload, thunkAPI) => {
    try {
      return await productService.createCart(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCartItem = createAsyncThunk(
  "get_cart_item",
  async (cartID, thunkAPI) => {
    try {
      return await productService.getCartItems(cartID);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.id = "";
      state.total = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload?.message;
        state.statusCode = action?.payload?.status;
        state.id = action?.payload?.data?.id;
        state.items = action?.payload?.data?.items;
        state.total = action?.payload?.data?.total;
      })
      .addCase(createCart.rejected, (state) => {
        state.isLoading = false;
        state.id = "";
        state.items = [];
      })
      .addCase(getCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action?.payload?.message;
        state.statusCode = action?.payload?.status;
        state.items = action?.payload?.data;
      })
      .addCase(getCartItem.rejected, (state) => {
        state.isLoading = false;
        state.items = [];
      });
  },
});

const cartReducer = cartSlice.reducer;

export const { clearCart } = cartSlice.actions;

export default cartReducer;
