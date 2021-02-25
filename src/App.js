import React from 'react';
import './App.css';
import './styles.css';
import CounterFun from './CounterFun';
import InfoFun from './InfoFun';
import Counter from './Counter';

class App extends React.Component {
  render() {
    const myStyle = { color: 'blue', backgroundColor: 'yellow' };
    return (
      <>
        <div className='App'>
          <h1 style={myStyle}>I'm the best</h1>
        </div>
        {/* <Info name='Sanaz' /> */}
        {/* <InfoFun /> */}
        {/* <CounterFun /> */}
        <Counter maxCount={15} step={4} />
      </>
    );
  }
}

export default App;
