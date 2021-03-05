import { Component } from 'react';
import ChildClass from './ChildClass';
import { ContextValue } from './myContext';

class GrudgeClass extends Component {
  render() {
    return (
      <ContextValue.Provider value={{ name: 'Akbar' }}>
        <ChildClass />
      </ContextValue.Provider>
    );
  }
}

export default GrudgeClass;
