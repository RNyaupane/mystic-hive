import { useEffect, useState } from "react";
import OrderListCheckout from "./order-list-checkout";
import { profileApi } from "../../redux/api-service/profileApi";
import AddressList from "./address-list";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutPage = () => {
  const [activeAccordion, setActiveAccordion] = useState({
    address: true,
    payment: false,
  });

  const cartId = useSelector((state) => state.cart.id);
  const stripePromise = loadStripe("your-publishable-key-here");
  const [address, setAddress] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState();
  const [addLoad, setAddLoad] = useState(false);
  const [isNewAdd, setIsNewAdd] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("stripe");

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

  // const handlePlaceOrder = (e) => {
  //   e.preventDefault();
  //   if (!selectedAddress) {
  //     toast.warn("Please select an address");
  //   } else {
  //     console.log({ cart_id: cartId, address_id: selectedAddress });
  //   }
  // };

  return (
    <div className="checkout-area section-padding">
      <div className="container">
        <form>
          <div className="checkout-wrap">
            <div className="row">
              <div className="col-lg-8 col-12">
                <AddressList
                  address={address}
                  addLoad={addLoad}
                  activeAccordion={activeAccordion}
                  toggleAccordion={toggleAccordion}
                  isNewAdd={isNewAdd}
                  setIsNewAdd={setIsNewAdd}
                  setSelectedAddress={setSelectedAddress}
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
                                <li className="addToggle ">
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
                                <li className="removeToggle ">
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
                            <div id="open5" className="payment-name active">
                              {paymentMethod === "stripe" && (
                                <Elements stripe={stripePromise}>
                                  <StripeCheckoutForm
                                    selectedAddress={selectedAddress}
                                    cartId={cartId}
                                  />
                                </Elements>
                              )}
                              {/* <div className="contact-form form-style">
                                <div className="row">
                                  <div className="col-lg-12 col-md-12 col-12">
                                    <div className="submit-btn-area text-center">
                                      <button
                                        className="theme-btn"
                                        type="submit"
                                        onClick={(e) => handlePlaceOrder(e)}
                                      >
                                        Place Order
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
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
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
