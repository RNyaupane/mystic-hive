import { requests } from "../restApi";

const getUserProfile = async () => {
  try {
    const response = await requests.get(`auth/profile/me/`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error during Getting Profile Data:", error);
    throw error;
  }
};

export const userService = {
  getUserProfile,
};
