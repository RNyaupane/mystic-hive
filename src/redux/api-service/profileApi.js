import { requests } from "../restApi";

export const profileApi = {
  getProfile: () => requests.get("auth/profile/me/", {}),
  getAddress: () => requests.get(`auth/address/`),
  getTestimonials: () =>
    requests.get(
      `client-testimonials/`,
      {},
      { headers: { Authorization: "" } }
    ),
  getOrderHistory: () => requests.get(`client-testimonials/`),
};
