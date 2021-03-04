import { useState } from 'react';
import Grudge from './Grudge';
import GrudgeItem from './grudge.model';

const GrudgeList = () => {
  const [items, setItems] = useState([]);
  const [personName, setPersonName] = useState('');
  const [reason, setReason] = useState('');

  const addGrudge = event => {
    event.preventDefault();
    const grudge = new GrudgeItem(personName, reason);
    setItems(prev => prev.concat(grudge));
    setPersonName('');
    setReason('');
  };

  const removeGrudge = id => {
    const updatedItems = items.filter(grudge => grudge.id !== id);
    setItems(updatedItems);
  };

  const toggleForgiveness = id => {
    const updatedItems = items.map(grudge => {
      if (grudge.id !== id) return grudge;
      return { ...grudge, forgiven: !grudge.forgiven };
    });
    setItems(updatedItems);
  };

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
