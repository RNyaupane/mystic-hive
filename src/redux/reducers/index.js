/* eslint-disable no-unused-vars */
import { combineReducers } from "@reduxjs/toolkit";
import authReducer, {
  logoutUser,
  initialState as authInitialState,
} from "./authSlice";
import productReducer from "./product/productSlice";
import productDetailReducer from "./product/productDetailSlice";
import cartReducer, { initialState as cartInitialState } from "./cartSlice";
import wishlistReducer, {
  initialState as wishlistInitialState,
} from "./wishlistSlice";
import blogReducer from "./blogs/blogSlice";

const appReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  blog: blogReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === logoutUser.type || action.type === "auth/logout") {
    return {
      ...state,
      auth: authInitialState,
      // cart: cartInitialState,
      // wishlist: wishlistInitialState,
    };
  }
  return appReducer(state, action);
};
