import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { authService } from "../actions/authActions";
import axios from "axios";
import { API_BASE_URL } from "../../config/config-global";

export const initialState = {
  user: {},
  isError: false,
  isAuthenticated: false,
  isSuccess: false,
  isLoading: false,
  statusCode: 0,
  message: null,
  accessToken: null,
  refreshToken: null,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      return await authService.login(formData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const googleLoginUser = createAsyncThunk(
  "auth/googleLoginUser",
  async (googleData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}auth/social/google/`,
        googleData
      );
      return response.data; // Store response data in Redux state
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

//Reset State
export const logoutUser = createAction("logout");

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = {};
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.user = [];
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action?.payload?.data?.user;
        state.accessToken = action?.payload?.data?.access;
        state.refreshToken = action?.payload?.data?.refresh;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.user = {};
      })

      // Google Login User
      .addCase(googleLoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(googleLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.isAuthenticated = true;
        state.user = action?.payload?.data?.user;
        state.accessToken = action?.payload?.data?.access;
        state.refreshToken = action?.payload?.data?.refresh;
      })
      .addCase(googleLoginUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
      })

      //Reset State
      .addCase(logoutUser, (state) => {
        state.user = {};
        state.accessToken = "";
        state.refreshToken = "";
        state.isAuthenticated = false;
      });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
