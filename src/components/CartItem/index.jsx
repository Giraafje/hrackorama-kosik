import Amount from "../Amount";
import CartProduct from "../CartProduct";
import './style.css';
import { useState } from "react";

const CartItem = ({ product, onAmountChange }) => {
  //const [count, setCount] = useState(product.amount);

  // const handleAmountChange = (newCount) => {
  //   setCount(newCount)
  // };

  return (
    <div className="cart-item">
      <CartProduct name={product.name} price={product.price} />
      <Amount value={product.amount} onChange={onAmountChange} />
    </div>
  )
};

export default CartItem;
