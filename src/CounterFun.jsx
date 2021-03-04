import React, { useEffect, useReducer, useState } from 'react';
import counterReducer from './reducer';
import classes from './styles.module.css';

function calculateState() {
  console.log('Lazy Initilizer');
  return 0;
}

function CounterFun() {
  // Lazy Initializer
  // const [count, setCount] = useState(calculateState);
  const [count, dispatch] = useReducer(counterReducer, 0);
  console.log('Render');

  useEffect(() => {
    console.log('useEffect');
    // console.log('useEffect count', count);
    return () => {
      console.log('useEffect clean up');
      // console.log('useEffect clean up', count);
    };
  }, [count]);

  function increment() {
    dispatch('INC');
    dispatch('INC');
    dispatch('INC');
    console.log(count);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    dispatch('DEC');
    // setCount(count - 1);
  }

  function reset() {
    dispatch('RESET');
    // setCount(0);
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

export default React.memo(CounterFun);
