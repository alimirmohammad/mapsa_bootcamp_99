import { useReducer, useState, useEffect, useCallback } from 'react';
import {
  addGrudgeAction,
  removeGrudgeAction,
  toggleForgivenessAction
} from './actions';
import Grudge from './Grudge';
import GrudgeItem from './grudge.model';
import grudgeReducer from './reducer';

const firstState = initialState => {
  console.log('IS LAZY?');
  const x = localStorage.getItem('GRUDGE');
  return x ? JSON.parse(x) : initialState;
};

const GrudgeList = () => {
  // const [items, setItems] = useState([]);
  const [items, dispatch] = useReducer(grudgeReducer, [], firstState);
  const [personName, setPersonName] = useState('Vahid');
  const [reason, setReason] = useState('');

  useEffect(() => {
    const x = JSON.stringify(items);
    localStorage.setItem('GRUDGE', x);
  }, [items]);

  const addGrudge = event => {
    event.preventDefault();
    dispatch(addGrudgeAction(personName, reason));
    setPersonName('');
    setReason('');
  };

  const removeGrudge = useCallback(id => {
    dispatch(removeGrudgeAction(id));
  }, []);

  const toggleForgiveness = useCallback(id => {
    console.log('p', personName);
    dispatch(toggleForgivenessAction(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeInput = () => setPersonName('Forough');

  return (
    <div>
      <form onSubmit={addGrudge}>
        <input
          type='text'
          name='person'
          placeholder='person'
          value={personName}
          onChange={event => setPersonName(event.target.value)}
        />
        <input
          type='text'
          name='reason'
          placeholder='reason'
          value={reason}
          onChange={event => setReason(event.target.value)}
        />
        <input type='submit' />
      </form>
      <button onClick={changeInput}>Change</button>

      <ul>
        {items.map(item => (
          <Grudge
            key={item.id}
            grudge={item}
            onRemove={removeGrudge}
            onToggle={toggleForgiveness}
          />
        ))}
      </ul>
    </div>
  );
};

export default GrudgeList;
