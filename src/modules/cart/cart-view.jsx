/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../../components/spinner";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productApi } from "../../redux/api-service/productApi";
import { toast } from "react-toastify";
import { getCartItem } from "../../redux/reducers/cartSlice";
import EmptyContent from "../../components/empty-content";

const CartView = () => {
  const { items, isLoading, id } = useSelector((state) => state.cart);
  const [cartItems, setCartItems] = useState(items || []);

  const dispatch = useDispatch();
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const updateCart = async () => {
    for (const item of cartItems) {
      try {
        const res = await productApi.updateItemToCart(
          { quantity: item?.quantity },
          id,
          item?.product?.id
        );
      } catch (err) {
        console.error(err);
      }
    }

    dispatch(getCartItem(id));
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subTotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.product.unit_price) * item.quantity,
    0
  );
  const vat = subTotal * 0.02;
  const ecoTax = 100;
  const deliveryCharge = 100;
  const totalPrice = subTotal + vat + ecoTax + deliveryCharge;

  return (
    <div className="cart-area section-padding">
      <div className="container">
        <div className="form">
          <div className="cart-wrapper">
            <div className="row">
              <div className="col-12">
                <form action="#">
                  <table className="table-responsive cart-wrap">
                    <thead>
                      <tr>
                        <th className="images images-b">Image</th>
                        <th className="product-2">Product Name</th>
                        <th className="pr">Quantity</th>
                        <th className="ptice">Price</th>
                        <th className="stock">Total Price</th>
                        <th className="remove remove-b">Action</th>
                      </tr>
                    </thead>
                    {isLoading ? (
                      <tbody>
                        <tr>
                          <td colSpan={6}>
                            <Spinner title="Loading Cart Items" />
                          </td>
                        </tr>
                      </tbody>
                    ) : (
                      <tbody>
                        {cartItems?.length > 0 ? (
                          cartItems?.map((item) => (
                            <tr key={item.id}>
                              <td className="images">
                                <img
                                  src={
                                    item.product.images.find(
                                      (img) => img.is_primary
                                    )?.image ||
                                    "/assets/img/product/default-product.png"
                                  }
                                  alt={item.product.name}
                                  style={{ maxWidth: "100px" }}
                                />
                              </td>
                              <td className="product">
                                <ul>
                                  <li className="first-cart">
                                    {item.product.name}
                                  </li>
                                  <li>Brand: {item.product.brand || "N/A"}</li>
                                </ul>
                              </td>
                              <td className="stock">
                                <ul className="input-style">
                                  <li className="quantity cart-plus-minus">
                                    <input
                                      type="number"
                                      value={item.quantity}
                                      onChange={(e) =>
                                        handleQuantityChange(
                                          item.id,
                                          parseInt(e.target.value) || 1
                                        )
                                      }
                                      min="1"
                                    />
                                  </li>
                                </ul>
                              </td>
                              <td className="ptice">
                                $
                                {parseFloat(item.product.unit_price).toFixed(2)}
                              </td>
                              <td className="stock">
                                $
                                {(
                                  parseFloat(item.product.unit_price) *
                                  item.quantity
                                ).toFixed(2)}
                              </td>
                              <td className="action">
                                <ul>
                                  <li className="w-btn">
                                    <a
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      title="Remove from Cart"
                                      href="#"
                                    >
                                      <i className="fi flaticon-delete"></i>
                                    </a>
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={6}>
                              <EmptyContent title="No items in Cart" />
                            </td>
                          </tr>
                        )}
                      </tbody>
                    )}
                  </table>
                </form>
                <div className="submit-btn-area">
                  <ul>
                    <li>
                      <Link className="theme-btn" to="/shop">
                        Continue Shopping{" "}
                        <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </li>
                    <li>
                      <button type="button" onClick={updateCart}>
                        Update Cart
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="cart-product-list">
                  <ul>
                    <li>
                      Total product<span>({totalQuantity})</span>
                    </li>
                    <li>
                      Sub Price<span>${subTotal.toFixed(2)}</span>
                    </li>
                    <li>
                      Vat<span>${vat.toFixed(2)}</span>
                    </li>
                    <li>
                      Eco Tax<span>${ecoTax.toFixed(2)}</span>
                    </li>
                    <li>
                      Delivery Charge<span>${deliveryCharge.toFixed(2)}</span>
                    </li>
                    <li className="cart-b">
                      Total Price<span>${totalPrice.toFixed(2)}</span>
                    </li>
                  </ul>
                </div>
                <div className="submit-btn-area">
                  <ul>
                    <li>
                      <Link className="theme-btn" to="/checkout">
                        Proceed to Checkout{" "}
                        <i className="fa fa-angle-double-right"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
