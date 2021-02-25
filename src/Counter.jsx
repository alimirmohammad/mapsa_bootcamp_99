import React from 'react';

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    // this.setState((prevState, props) => ({ count: prevState.count + 1 }));
    // this.setState(prevState => {
    //   console.log(prevState.count);
    //   console.log(this.state.count);
    //   return { count: prevState.count + 1 };
    // });

    this.setState(prevState => {
      if (this.state.count + this.props.step > this.props.maxCount)
        return undefined;
      return { count: prevState.count + this.props.step };
    });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <br />
        <button onClick={this.increment}>Inc</button>
        <button onClick={this.decrement}>Dec</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
