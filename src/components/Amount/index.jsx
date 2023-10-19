import { useState } from "react";
import './style.css';

const Amount = ({ value, onChange }) => {
  //const [count, setCount] = useState(value);

  const handleIncrement = () => {
    onChange(value + 1);
  }

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  }

  return (
    <div className="amount">
      <button className="amount__btn" onClick={handleDecrement}>–</button>
      <div className="amount__count">{value}</div>
      <button className="amount__btn" onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Amount;
