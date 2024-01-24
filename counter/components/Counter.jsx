import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  const [amount, setAmount] = useState(0);
  function increse() {
    setCount(count + (count * amount) / 100);
  }
  function decrese() {
    setCount(count - (count * amount) / 100);
  }
  function increseAmount() {
    setAmount(amount + 10);
  }
  function decreseAmount() {
    setAmount(amount - 10);
  }
  return (
    <div>
      <h1>Count value: {count}</h1>
      <button onClick={increse}>{increse}+ </button>
      <button onClick={decrese}>{decrese}-</button>
      <h2>Incresement or decresement rate: % {amount}</h2>
      <button onClick={increseAmount}>+</button>
      <button onClick={decreseAmount}>-</button>
    </div>
  );
}
