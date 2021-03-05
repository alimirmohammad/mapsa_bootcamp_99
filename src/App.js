import { useState } from 'react';
import GrudgeList from './GrudgeList';
import { ContextValue } from './myContext';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <ContextValue.Provider value={count}>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <div>{count}</div>
      <GrudgeList />
    </ContextValue.Provider>
  );
};

export default App;
