// src/pages/CartPage.js
import React from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateSubtotal } =
    useCart();

  const increaseQuantity = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const decreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  return (
    <div className="cart-page">
      <h1 className="header-container">Your Cart</h1>
      <div className="cart-header">
        <span>Product</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Total</span>
      </div>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <img
                src={item.images[0].image}
                alt={item.name}
                className="item-image"
              />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.storage}</p>
              </div>
            </div>
            <div className="item-price">
              <p>${item.price.toLocaleString()}</p>
            </div>
            <div className="item-actions">
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => decreaseQuantity(item.id, item.quantity)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="quantity-btn"
                  onClick={() => increaseQuantity(item.id, item.quantity)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="item-total">
              <p>${(item.price * item.quantity).toLocaleString()}</p>
              <FontAwesomeIcon
                icon={faTrashCan}
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="total-container">
        <div className="totals">
          <div className="left">
            <div className="totals-item">
              <span>Shipping:</span>
            </div>
            <div className="totals-item">
              <span>Subtotal:</span>
            </div>
            <div className="totals-item">
              <span className="total-amount">Total:</span>
            </div>
          </div>
          <div className="right">
            <div className="totals-item">
              <span>$20</span>
            </div>
            <div className="totals-item">
              <span>${calculateSubtotal().toLocaleString()}</span>
            </div>
            <div className="totals-item">
              <span className="total-amount">
                ${(calculateSubtotal() + 20).toLocaleString()}
              </span>
            </div>
            <div className="totals-item">
              <span className="included-taxes">Included 14% Taxes</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="button-container">
          <Link to="/">
            <button className="continue-shopping-btn">Continue Shopping</button>
          </Link>
          <Link to="/checkout">
            <button className="checkout-btn">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
