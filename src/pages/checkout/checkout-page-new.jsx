import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import AddressList from "./address-list";
import OrderListCheckout from "./order-list-checkout";
import StripeCheckoutForm from "./stripe-checkout";
import { useDispatch, useSelector } from "react-redux";
import { profileApi } from "../../redux/api-service/profileApi";
import { toast } from "react-toastify";
import { clearCart } from "../../redux/reducers/cartSlice";
import { productApi } from "../../redux/api-service/productApi";
import { requests } from "../../redux/restApi";

// Load Stripe instance
const stripePromise = loadStripe(
  "pk_test_51PGk1E08B7UPR9midVhC2PlwAYdcEowjTvHEgJS12GRRiZIFq2D9rCzcKKa0xntvKTDDIt6DxtQP6Qyles7FKXQJ00WJYc7wA7"
);

const CheckoutPageNew = () => {
  const [activeAccordion, setActiveAccordion] = useState({
    address: true,
    payment: false,
  });
  const [formData, setFormData] = useState({
    city: "",
    state: "",
    postal_code: "",
    country: "",
  });

  const cartId = useSelector((state) => state.cart.id);
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const [addLoad, setAddLoad] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [isNewAdd, setIsNewAdd] = useState(false);
  const dispatch = useDispatch();

  const toggleAccordion = (key) => {
    setActiveAccordion((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const fetchAddress = async () => {
    setAddLoad(true);
    try {
      const res = await profileApi.getAddress();
      setAddress(res?.data);
    } catch (error) {
      console.warn(error);
    } finally {
      setAddLoad(false);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);

  //Place order for cash delivery
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!isNewAdd && !selectedAddress) {
      toast.warn("Please select an address");
      return;
    } else {
      try {
        let addressId;

        if (isNewAdd) {
          const res = await requests.post("auth/address/", {
            ...formData,
          });
          addressId = res?.data?.id;
        } else {
          addressId = selectedAddress;
        }

        const orderResponse = await productApi.orderPlace({
          cart_id: cartId,
          address_id: addressId,
        });
        console.log(orderResponse);
        if (!orderResponse?.data) {
          dispatch(clearCart());
          throw new Error("Order placement failed");
        }
        const orderId = orderResponse?.data?.id;

        const paymentResponse = await productApi.processPayment({
          order: orderId,
          payment_method: "CASH",
        });
        if (paymentResponse) {
          toast.success("Order Placed Successfully");
          
        }
      } catch (err) {
        console.warn(err);
        toast.error(
          `Failed To place order${
            err?.response?.data?.message || err?.response?.data?.message?.[0]
          }`
        );
      }
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="checkout-area section-padding">
        <div className="container">
          <div className="checkout-wrap">
            <div className="row">
              <div className="col-lg-8 col-12">
                <AddreshsList
                  address={address}
                  addLoad={addLoad}
                  activeAccordion={activeAccordion}
                  toggleAccordion={toggleAccordion}
                  isNewAdd={isNewAdd}
                  setIsNewAdd={setIsNewAdd}
                  setSelectedAddress={setSelectedAddress}
                  formData={formData}
                  setFormData={setFormData}
                />
                <div className="caupon-wrap s3">
                  <div className="payment-area">
                    <div className="row">
                      <div className="col-12">
                        <div
                          className={`coupon coupon-3 ${
                            activeAccordion.payment
                              ? "accordian-border-top"
                              : " accordian-border-left "
                          } `}
                          onClick={() => toggleAccordion("payment")}
                        >
                          <label id="toggle4">Payment Method</label>
                        </div>
                        {activeAccordion.payment && (
                          <div className="payment-option">
                            <div className="payment-select">
                              <ul>
                                <li className="addToggle">
                                  <input
                                    id="stripe"
                                    type="radio"
                                    checked={paymentMethod === "stripe"}
                                    onChange={() => setPaymentMethod("stripe")}
                                  />
                                  <label
                                    htmlFor="stripe"
                                    className="ps-2 me-4 cursor-pointer"
                                  >
                                    Payment By Stripe
                                  </label>
                                </li>
                                <li className="removeToggle">
                                  <input
                                    id="cash"
                                    type="radio"
                                    checked={paymentMethod === "cash"}
                                    onChange={() => setPaymentMethod("cash")}
                                  />
                                  <label
                                    htmlFor="cash"
                                    className="ps-2 cursor-pointer"
                                  >
                                    Cash On delivery
                                  </label>
                                </li>
                              </ul>
                            </div>
                            {/* <div id="open5" className="payment-name active"> */}
                            {paymentMethod === "stripe" && (
                              <Elements stripe={stripePromise}>
                                <StripeCheckoutForm
                                  selectedAddress={selectedAddress}
                                  cartId={cartId}
                                />
                              </Elements>
                            )}

                            {paymentMethod === "cash" && (
                              <div className="contact-form form-style">
                                <div className="row">
                                  <div className="col-lg-12 col-md-12 col-12">
                                    <div className="submit-btn-area text-center">
                                      <button
                                        className="theme-btn px-5"
                                        onClick={(e) => handlePlaceOrder(e)}
                                      >
                                        Place Order
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {/* </div> */}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <OrderListCheckout />
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default CheckoutPageNew;
