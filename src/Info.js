import React, { Component } from 'react';

class Info extends Component {
  render() {
    console.log(this.props);
    const name = this.props.name;
    const a = <p>Hello {name}</p>;
    return a;
  }
}

export default Info;
