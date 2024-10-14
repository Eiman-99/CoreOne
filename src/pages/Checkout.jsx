import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems, calculateSubtotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const [formInputs, setFormInput] = useState({
    firstName: "",
    lastName: "",
    billingAddress: "",
    billingCity: "",
    extraNotes: "",
  });

  const shippingCost = 20;
  const taxes = calculateSubtotal() * 0.14;
  const grandTotal = calculateSubtotal() + shippingCost + taxes;

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>Shipping Address</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formInputs.firstName}
              onChange={(event) => {
                setFormInput({ ...formInputs, firstName: event.target.value });
              }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formInputs.lastName}
              onChange={(event) => {
                setFormInput({ ...formInputs, lastName: event.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="billingAddress"
              placeholder="Billing Address"
              required
              value={formInputs.billingAddress}
              onChange={(event) => {
                setFormInput({
                  ...formInputs,
                  billingAddress: event.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="billingCity"
              placeholder="Billing City"
              required
              value={formInputs.billingCity}
              onChange={(event) => {
                setFormInput({
                  ...formInputs,
                  billingCity: event.target.value,
                });
              }}
            />
          </div>
          <div className="form-group">
            <textarea
              name="extraNotes"
              placeholder="Extra notes......."
              value={formInputs.extraNotes}
              onChange={(event) => {
                setFormInput({
                  ...formInputs,
                  extraNotes: event.target.value,
                });
              }}
            />
          </div>

          <h2>Select Payment Methods</h2>
          <div className="payment-methods">
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                checked={paymentMethod === "Credit Card"}
                onChange={handlePaymentMethodChange}
              />
              Credit Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                checked={paymentMethod === "PayPal"}
                onChange={handlePaymentMethodChange}
              />
              PayPal
            </label>
          </div>

          {paymentMethod === "Credit Card" && (
            <div className="form-group credit-card-info">
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                required
              />
              <input
                type="text"
                name="cardName"
                placeholder="Name on Card"
                required
              />
              <input
                type="text"
                name="expiry"
                placeholder="Expiration Date (MM/YY)"
                required
              />
              <input type="text" name="cvv" placeholder="CVV" required />
            </div>
          )}
        </form>
      </div>

      <div className="checkout-summary">
        <h2>Your Order</h2>

        <div className="order-items">
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <p>
                {item.name} - {item.storage} - {item.quantity} x {item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="order-totals">
          <p>Shipping: ${shippingCost.toLocaleString()} </p>
          <p>Taxes (14%): ${taxes.toLocaleString()} </p>
          <p>Subtotal: ${calculateSubtotal().toLocaleString()} </p>
          <h3> Total: ${grandTotal.toLocaleString()} </h3>
        </div>

        <button className="place-order-btn">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
