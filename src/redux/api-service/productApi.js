import { requests } from "../restApi";

export const productApi = {
  getProduct: () =>
    requests.get("shop/products/", {}, { headers: { Authorization: "" } }),
  getProductDetail: (data) =>
    requests.get(
      `shop/products/${data?.id}`,
      {},
      { headers: { Authorization: "" } }
    ),
  createCart: () => requests.post(`shop/carts/`),
  getCartItem: (cartId) =>
    requests.get(
      `shop/carts/${cartId}/items/`,
      {},
      { headers: { Authorization: "" } }
    ),
  addItemToCart: (data, id) => requests.post(`shop/carts/${id}/items/`, data),
  updateItemToCart: (data, cartId, prodId) =>
    requests.put(`shop/carts/${cartId}/items/${prodId}`, data),
  orderPlace: (data) => requests.post(`shop/orders/`, data),
  processPayment: (data) => requests.post(`payment/`, data),
  stripeWebHook: (data) => requests.post(`payment/webhook/stripe/`, data),
};
