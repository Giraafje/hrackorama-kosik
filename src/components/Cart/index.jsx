import CartItem from "../CartItem";
import './style.css';
import { useState } from "react";

const products = [
  {
    name: 'Hrad z kostek',
    price: 450,
    amount: 2,
  },
  {
    name: 'Autíčko na ovládání',
    price: 1500,
    amount: 1,
  },
  {
    name: 'Domeček pro panenky',
    price: 1350,
    amount: 1,
  },
  {
    name: 'Dětský telefon',
    price: 730,
    amount: 1,
  },
];

const Cart = () => {
  const [cartProducts, setCartProducts] = useState(products)

  // musime vedet, u ktereho produktu nastavujeme stav
  const handleAmountChange = (index, newCount) => {
    const newProducts = [...cartProducts]; // stejne jako aktualni stav
    newProducts[index].amount = newCount;
    setCartProducts(newProducts);
  };

  const totalAmount = () => {
    return cartProducts.reduce((sum, item) => sum + item.amount, 0);
  }

  return (
    <div className="cart">
      <div className="cart__head">
        <h2>Košík</h2>
        <span>Položek: {totalAmount()}</span>
      </div>
      <div className="cart__items">
        {products.map((product, idx) => (
          <CartItem key={product.name} product={product} onAmountChange={(amount) => handleAmountChange(idx, amount)} />
        ))}
      </div>
    </div>
  )
};

export default Cart;
