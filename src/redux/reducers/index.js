import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./product/productSlice";
import productDetailReducer from "./product/productDetailSlice";
import cartReducer from "./cartSlice";
import wishlistReducer from "./wishlistSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
});
