import { toast } from "react-toastify";
import { blogApi } from "../api-service/blgoApi";

const getBlogs = async () => {
  try {
    const response = await blogApi.getBlogs();
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

const getBlogDetail = async ({ payload }) => {
  try {
    const response = await blogApi.getBlogDetail(payload);
    return response;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

export const blogService = {
  getBlogs,
  getBlogDetail,
};
