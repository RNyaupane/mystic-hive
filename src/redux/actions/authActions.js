import axios from "axios";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../config/config-global";

// Register Service
const register = async (registerData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}auth/register/`,
      registerData
    );
    if (response.status === 200 || response?.status === 201) {
      toast.success(response?.data?.message || "Register Successfully");
    } else {
      toast.error(response?.error?.message?.[0] || response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

//   Login Service
const login = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}auth/login/`, data);
    if (response.status === 200) {
      toast.success(response?.data?.message || "Login Successfully");
    } else {
      toast.error(response?.error?.message?.[0] || response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

//   Login Service
const googleLogin = async (data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}auth/social/google/`,
      data
    );
    if (response.status === 200) {
      toast.success(response?.data?.message || "Login Successfully");
    } else {
      toast.error(response?.error?.message?.[0] || response?.error?.message);
    }
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.message?.[0]);
    throw error;
  }
};

//Logout Serive
const logout = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}logout`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};

export const authService = {
  register,
  login,
  googleLogin,
  logout,
};
