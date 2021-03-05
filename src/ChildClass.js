import React from 'react';
import { ContextValue } from './myContext';


class ChildClass extends React.Component {

  static contextType = ContextValue;

  render() {
    let value = this.context;
    return <div>Hi {value.name}</div>;
  }
}

export default ChildClass;
