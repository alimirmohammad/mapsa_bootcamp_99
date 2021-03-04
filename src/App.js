import React from 'react';
import './App.css';
import CounterFun from './CounterFun';
import InfoFun from './InfoFun';
import Counter from './Counter';
import styles from './styles.module.css';
import Form from './Form';

class App extends React.Component {
  state = {
    condition: true
  };

  toggleState() {
    this.setState(prev => ({ condition: !prev.condition }));
  }

  render() {
    const myStyle = { color: 'blue', backgroundColor: 'yellow' };
    let content = <Counter maxCount={15} step={4} />;
    if (!this.state.condition) {
      content = null;
    }

    return (
      <>
        <div className='App'>
          <h1 className={styles.heading}>I'm the best</h1>
          <button onClick={this.toggleState.bind(this)}>
            Change Parent State
          </button>
        </div>
        {/* <Info name='Sanaz' /> */}
        {/* <InfoFun /> */}
        {/* <Form /> */}
        {/* <Counter /> */}
        {/* {content} */}
        <CounterFun />
      </>
    );
  }
}

export default App;
