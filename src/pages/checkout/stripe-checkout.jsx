import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { productApi } from "../../redux/api-service/productApi";

const cardStyle = {
  style: {
    base: {
      fontSize: "16px",
      color: "#424770",
      "::placeholder": { color: "#aab7c4" },
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      backgroundColor: "#fff",
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

      if (!orderResponse.ok) throw new Error("Order placement failed");
      const orderData = await orderResponse.json();
      const orderId = orderData.id; // Extract order ID

      // Step 2: Create Payment Method
      const cardElement = elements.getElement(CardElement);
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) throw new Error(error.message);

      // Step 3: Make Payment
      const paymentResponse = await productApi.processPayment({
        order: orderId,
        payment_method: "STRIPE",
        amount: 639,
        stripe_payment_method: paymentMethod.id, // Send Stripe payment method ID
      });

      if (!paymentResponse.ok) throw new Error("Payment failed");
      toast.success("Payment successful!");
    } catch (error) {
      toast.error(error.message);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handlePayment} className="stripe-form w-100">
      <div className="d-flex w-100">
        <img
          src="assets/img/stripe.png"
          className="m-auto"
          alt=""
          style={{ maxWidth: "70px" }}
        />
      </div>

      <div className="stripe-card-container">
        <CardElement options={cardStyle} className="stripe-card" />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="theme-btn mt-3"
      >
        {loading ? "Processing..." : "Pay with Stripe"}
      </button>
    </form>
  );
};

export default StripeCheckoutForm;
