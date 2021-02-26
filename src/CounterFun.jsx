import { useEffect, useState } from 'react';
import classes from './styles.module.css';

function calculateState() {
  console.log('Lazy Initilizer');
  return 0;
}

export default function CounterFun({condition}) {
  // Lazy Initializer
  const [count, setCount] = useState(calculateState);
  console.log('Render');

  useEffect(() => {
    console.log('useEffect');
    // console.log('useEffect count', count);
    return () => {
      console.log('useEffect clean up');
      // console.log('useEffect clean up', count);
    };
  }, [count, condition]);

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
      <span className={classes.heading}>{count}</span>
      <br />
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
