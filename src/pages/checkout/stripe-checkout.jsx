import { useState } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { productApi } from "../../redux/api-service/productApi";
import { clearCart } from "../../redux/reducers/cartSlice";
import { useOptions } from "../../hooks/use-options";

const cardStyle = {
  style: {
    base: {
      color: "#424770",
      letterSpacing: "0.025em",
      fontFamily: "Source Code Pro, monospace",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#9e2146",
    },
  },
};

const StripeCheckoutForm = ({ selectedAddress }) => {
  const stripe = useStripe();
  const elements = useElements();
  const cartId = useSelector((state) => state.cart.id);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const options = useOptions();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!selectedAddress) {
      toast.warn("Please select an address");
      return;
    }

    if (!stripe || !elements) {
      toast.error("Stripe is not loaded");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Place Order
      const orderResponse = await productApi.orderPlace({
        cart_id: cartId,
        address_id: selectedAddress,
      });
      dispatch(clearCart());

      if (!orderResponse) {
        throw new Error("Order placement failed");
      }
      const orderId = orderResponse.id;

      // Step 2: Process Payment (Backend creates Stripe intent)
      const paymentResponse = await productApi.processPayment({
        order: orderId,
        payment_method: "STRIPE",
      });

      if (!paymentResponse?.data?.client_secret) {
        throw new Error("Payment processing failed");
      }

      // Step 3: Confirm Payment on Frontend
      const { client_secret } = paymentResponse.data;
      const confirmPayment = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
        },
      });

      if (confirmPayment.error) throw new Error(confirmPayment.error.message);

      if (confirmPayment.paymentIntent.status === "succeeded") {
        toast.success("Payment successful!");
      }
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <form className="stripe-form w-100">
      <div className="d-flex w-100">
        <img
          src="assets/img/stripe.png"
          className="m-auto"
          alt=""
          style={{ maxWidth: "70px" }}
        />
      </div>

      {/* <div className="stripe-card-container">
        <CardElement options={cardStyle} className="stripe-card" />
      </div> */}

      <label>
        Card Number
        <CardNumberElement options={cardStyle} className="stripe-card" />
      </label>
      <label>
        Expiration Date
        <CardExpiryElement options={cardStyle} className="stripe-card" />
      </label>
      <label>
        Security Code
        <CardCvcElement options={cardStyle} className="stripe-card" />
      </label>
      <button
        onClick={handlePayment}
        disabled={!stripe || loading}
        className="theme-btn mt-3"
      >
        {loading ? "Processing..." : "Pay with Stripe"}
      </button>
    </form>
  );
};

export default StripeCheckoutForm;
