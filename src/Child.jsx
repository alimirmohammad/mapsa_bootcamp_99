import { useContext } from 'react';
import { ContextValue } from './myContext';

const Child = () => {
  const context = useContext(ContextValue);

  return <div>Hi {context}</div>;
};

export default Child;
