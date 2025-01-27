import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../actions/userActions";

const initialState = {
  userInfo: {},
  isError: false,
  isLoading: false,
};

export const getUserProfile = createAsyncThunk(
  "get_Profile",
  async (cartID, thunkAPI) => {
    try {
      return await userService.getUserProfile();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action?.payload?.data;
      })
      .addCase(getProfile.rejected, (state) => {
        state.isLoading = false;
        state.userInfo = {};
      });
  },
});

const userReducer = userSlice.reducer;

export default userReducer;
