import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, removeItem } from "./CartSlice";
import { Link } from "react-router-dom";

const CartItem = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Unit Price: ${item.price}</p>
          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(increment(item.id))}>+</button>
          <button onClick={() => dispatch(decrement(item.id))}>-</button>
          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>
        </div>
      ))}

      <h3>Total Cost: ${total}</h3>

      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>

      <button>Checkout</button>
    </div>
  );
};

export default CartItem;
