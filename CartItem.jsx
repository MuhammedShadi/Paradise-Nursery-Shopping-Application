import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";
import "./CartItem.css";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  if (cartItems.length === 0) {
    return <h2>Your cart is empty 🪴</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img
            src={item.image || "https://via.placeholder.com/100"}
            alt={item.name}
          />

          <div className="cart-details">
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            <div className="cart-actions">
              <button onClick={() => handleIncrease(item)}>+</button>
              <button onClick={() => handleDecrease(item)}>-</button>
              <button onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default CartItem;
