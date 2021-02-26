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
    console.log('CONSTRUCTOR');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('GET_DERIVED');
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('SNAPSHOT');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('SHOULD_COMPONENT_UPDATE');
    if (
      nextProps.maxCount === this.props.maxCount &&
      nextProps.step === this.props.step &&
      nextState.count === this.state.count
    ) {
      return false;
    }
    return true;
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

  componentDidMount() {
    console.log('COMPONENT_DID_MOUNT');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('COMPONENT_DID_UPDATE');
  }

  componentWillUnmount() {
    console.log('COMPONENT_WILL_UNMOUNT');
  }

  render() {
    console.log('RENDER');
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
