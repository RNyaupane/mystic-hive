import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./product/productSlice";
import productDetailReducer from "./product/productDetailSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  productDetails: productDetailReducer,
});
