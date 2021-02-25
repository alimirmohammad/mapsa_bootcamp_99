import { useState } from 'react';

export default function CounterFun() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(count);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
