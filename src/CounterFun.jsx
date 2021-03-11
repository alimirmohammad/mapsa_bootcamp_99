import React, { useEffect, useReducer, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counterReducer, { asyncInc, dec, inc, res } from './reducer';
import classes from './styles.module.css';

function calculateState() {
  console.log('Lazy Initilizer');
  return 0;
}

function CounterFun() {
  // Lazy Initializer
  // const [count, setCount] = useState(calculateState);
  // const [count, dispatch] = useReducer(counterReducer, 0);
  const count = useSelector(state => state.value);
  const dispatch = useDispatch();
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
    dispatch(inc());
    dispatch(inc());
    dispatch(inc());
    console.log(count);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    dispatch(dec());
    // setCount(count - 1);
  }

  function reset() {
    dispatch(res());
    // setCount(0);
  }

  function asyncIncrement() {
    dispatch(asyncInc());
  }

  return (
    <div>
      <span className={classes.heading}>{count}</span>
      <br />
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={asyncIncrement}>Async Inc</button>
    </div>
  );
}

export default React.memo(CounterFun);
