import { requests } from "../restApi";

export const productApi = {
  getProduct: () => requests.get("shop/products/", {}),
  getProductDetail: (data) => requests.get(`shop/products/${data?.id}`),
  createCart: () => requests.post(`shop/carts/`),
  getCartItem: (cartId) =>
    requests.get(
      `shop/carts/${cartId}/items/`,
      {},
      { headers: { Authorization: "" } }
    ),
  addItemToCart: (data, id) => requests.post(`shop/carts/${id}/items/`, data),
};
