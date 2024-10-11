import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import iphoneImg from "../assets/latestPhone.png";
import macbookImg from "../assets/latestWatch.png";
import airpodsImg from "../assets/latestAirpods.png";
import { Link } from "react-router-dom";

const CartPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "iphones",
      description: "Full Face · Double Visor",
      price: 50,
      quantity: 4,
      image: iphoneImg,
    },
    {
      id: 2,
      name: "macbooks",
      description: "Black · Limited Edition",
      price: 20,
      quantity: 5,
      image: macbookImg,
    },
    {
      id: 3,
      name: "airpods",
      description: "Full HD · 60 FPS",
      price: 70,
      quantity: 2,
      image: airpodsImg,
    },
  ]);

  // Function to increase item quantity
  const increaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  // Function to decrease item quantity
  const decreaseQuantity = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItems(updatedItems);
  };

  // Remove item from the cart
  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="item-price">
              <p>{item.price.toLocaleString()} EGP</p>
            </div>
            <div className="item-actions">
              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  className="quantity-btn"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="item-total">
              <p>{(item.price * item.quantity).toLocaleString()} EGP</p>
              <FontAwesomeIcon
                icon={faTrashCan}
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div class="total-container">
        <div class="totals">
          <div className="left">
            <div class="totals-item">
              <span>Shipping:</span>
            </div>
            <div class="totals-item">
              <span>Subtotal:</span>
            </div>
            <div class="totals-item">
              <span class="total-amount">Total:</span>
              <div></div>
            </div>
          </div>
          <div className="right">
            <div class="totals-item">
              <span>100EGP</span>
            </div>
            <div class="totals-item">
              <span>${calculateSubtotal()}</span>
            </div>
            <div class="totals-item">
              <span class="total-amount">${calculateSubtotal() + 100}</span>
            </div>
            <div class="totals-item">
              <span class="included-taxes">Included 14% Taxes</span>
            </div>
          </div>
        </div>
        <hr />
        <div class="button-container">
          <Link to="/">
            <button class="continue-shopping-btn">Continue Shopping</button>
          </Link>
          <Link to="/checkout">
            <button class="checkout-btn">Check Out</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
