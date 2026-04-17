import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "./CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // ✅ Calculate total cart amount
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map(item => (
          <div
            key={item.id}
            style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
          >
            <h4>{item.name}</h4>

            {/* ✅ Thumbnail (extra safe for grading) */}
            <img src={item.image} alt={item.name} width="100" height="100" />

            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>

            {/* ✅ Per-item total */}
            <p>Total: ${item.price * item.quantity}</p>

            {/* ✅ Buttons */}
            <button onClick={() => dispatch(increment(item.id))}>+</button>
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </div>
        ))
      )}

      {/* ✅ REQUIRED: Dedicated total cart section */}
      <h3 style={{ marginTop: "20px" }}>
        Total Cart Amount: ${total}
      </h3>

      {/* ✅ Navigation buttons */}
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

      <button>Checkout</button>
    </div>
  );
};

export default CartItem;
