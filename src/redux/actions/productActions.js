import { toast } from "react-toastify";
import { productApi } from "../api-service/productApi";

const getProducts = async () => {
  try {
    const response = await productApi.getProduct();
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

const getProductDetail = async ({ payload }) => {
  try {
    const response = await productApi.getProductDetail(payload);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

const createCart = async (payload) => {
  console.log("CREAT CARt Oayload", payload);
  try {
    const response = await productApi.createCart();
    console.log(response);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

const getCartItems = async (id) => {
  try {
    const response = await productApi.getCartItem(id);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

export const productService = {
  getProducts,
  getProductDetail,
  createCart,
  getCartItems,
};
