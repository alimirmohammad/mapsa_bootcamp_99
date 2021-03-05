import { Component } from 'react';
import GrudgeClass from './GrudgeClass';
import { ContextValue } from './myContext';

class GrudgeListClass extends Component {
  static contextType = ContextValue;

  render() {
    console.log('GrudgeListContext', this.context.name);
    return <GrudgeClass />;
  }
}

export default GrudgeListClass;
