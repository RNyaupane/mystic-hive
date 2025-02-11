import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "../../actions/blogActions";

const initialState = {
  blogs: [],
  isLoading: false,
};

export const getBlogs = createAsyncThunk("blog_get", async (thunkAPI) => {
  try {
    return await blogService.getBlogs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getBlogDetail = createAsyncThunk(
  "blog_detail",
  async (payload, thunkAPI) => {
    try {
      return await blogService.getBlogDetail(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const blogSlice = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = Array.isArray(action?.payload?.data)
          ? action.payload.data
          : [];
      })
      .addCase(getBlogs.rejected, (state) => {
        state.isLoading = false;
        state.blogs = [];
      });
  },
});

const blogReducer = blogSlice.reducer;

export default blogReducer;
