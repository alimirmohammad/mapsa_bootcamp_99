import React, { Component } from 'react';

class Info extends Component {
  state = {
    name: 'Ali',
    job: 'Developer'
  };

  changeName() {
    this.setState({ name: 'Reza' });
    // this.state.name = 'Reza';
    // console.log(this.state.name);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.changeName.bind(this)}>Change Name</button>
        <p>Hello {this.state.name}</p>
      </div>
    );
  }
}

export default Info;
