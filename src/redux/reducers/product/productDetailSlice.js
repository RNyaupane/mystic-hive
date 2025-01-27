import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../actions/productActions";

const initialState = {
  details: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  statusCode: 0,
  message: null,
};

export const getProductDetail = createAsyncThunk(
  "product_detail",
  async (payload, thunkAPI) => {
    try {
      return await productService.getProductDetail({ payload });
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productDetailSlice = createSlice({
  name: "productDetails",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action?.payload?.message;
        state.statusCode = action?.payload?.status;
        state.details = action?.payload?.data;
      })
      .addCase(getProductDetail.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.details = null;
      });
  },
});

const productDetailReducer = productDetailSlice.reducer;

export default productDetailReducer;
